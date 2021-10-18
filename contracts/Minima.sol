//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./AMMs/IWrapper.sol";
import "./OpenMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Minima is Ownable {
  using OpenMath for *;
  address[] dexs;
  address[] supportedTokens;
  mapping(address => bool) dexKnown;
  uint256 numTokens;
  uint256 fee = 5 * (10**7);
  uint256 FEE_DENOM = 10**10;

  event FeeUpdated(address owner, uint256 oldFee, uint256 newFee);
  event FeesClaimed(address owner);
  event TokenAdded(address token);
  event DexAdded(address dex, string name);
  event Swap(
    address tokenFrom,
    address tokenTo,
    uint256 amountIn,
    uint256 amountOut
  );

  function addDex(address dexAddress, string calldata name) external onlyOwner {
    require(!dexKnown[dexAddress], "DEX has alread been added");
    dexKnown[dexAddress] = true;
    dexs.push(dexAddress);
    emit DexAdded(dexAddress, name);
  }

  function addToken(address newToken) external onlyOwner {
    for (uint256 i = 0; i < supportedTokens.length; i++) {
      require(supportedTokens[i] != newToken, "Token already added");
    }
    supportedTokens.push(newToken);
    numTokens++;
    emit TokenAdded(newToken);
  }

  function updateFee(uint256 _fee) external onlyOwner {
    emit FeeUpdated(owner(), fee, _fee);
    fee = _fee;
  }

  function getFees() external onlyOwner {
    for (uint256 i = 0; i < numTokens; i++) {
      IERC20 token = IERC20(supportedTokens[i]);
      token.transfer(owner(), token.balanceOf(address(this)));
    }
    emit FeesClaimed(owner());
  }

  function getBestExchange(
    address tokenIn,
    address tokenOut,
    uint256 amountIn
  ) public view returns (int256 rate, address exchange) {
    uint256 amountOut = 0;
    for (uint256 i = 0; i < dexs.length; i++) {
      uint256 quote = IWrapper(dexs[i]).getQuote(tokenIn, tokenOut, amountIn);
      if (quote > amountOut) {
        amountOut = quote;
        exchange = dexs[i];
      }
    }
    rate = OpenMath.exchangeRate(amountIn, amountOut);
  }

  function getTokenIndex(address token) internal view returns (uint256) {
    for (uint256 i = 0; i < numTokens; i++) {
      if (address(supportedTokens[i]) == token) {
        return i;
      }
    }
    revert("Token is not supported");
  }

  function getExpectedOutFromPath(
    address[] memory tokenPath,
    address[] memory exchangePath,
    uint256 amountIn
  ) internal view returns (uint256 expectedOut) {
    require(tokenPath.length > 1, "Path must contain atleast two tokens");
    require(
      exchangePath.length == tokenPath.length - 1,
      "Exchange path incorrect length"
    );

    expectedOut = amountIn;
    for (uint256 i = 0; i < exchangePath.length; i++) {
      expectedOut = IWrapper(exchangePath[i]).getQuote(
        tokenPath[i],
        tokenPath[i + 1],
        expectedOut
      );
    }
  }

  function getExpectedOut(
    address tokenIn,
    address tokenOut,
    uint256 amountIn
  )
    external
    view
    returns (
      uint256 amountOut,
      address[] memory tokenPath,
      address[] memory exchangePath
    )
  {
    uint256 tokenFromIndex = getTokenIndex(tokenIn);
    uint256 tokenOutIndex = getTokenIndex(tokenOut);

    (
      int256[][] memory exchangeRates,
      address[][] memory exchanges,
      int256[] memory pathTo,
      uint256[] memory parents,
      bool arbExists
    ) = fillBoard(tokenFromIndex);

    (
      address[] memory tokenPath,
      address[] memory exchangePath
    ) = getPathFromBoard(
        tokenFromIndex,
        tokenOutIndex,
        exchangeRates,
        exchanges,
        pathTo,
        parents
      );
    amountOut = getExpectedOutFromPath(tokenPath, exchangePath, amountIn);
  }

  function fillBoard(uint256 tokenFromIndex)
    public
    view
    returns (
      int256[][] memory exchangeRates,
      address[][] memory exchanges,
      int256[] memory pathTo,
      uint256[] memory parents,
      bool arbExists
    )
  {
    exchangeRates = new int256[][](numTokens);
    exchanges = new address[][](numTokens);
    pathTo = new int256[](numTokens);
    parents = new uint256[](numTokens);

    for (uint256 i = 0; i < numTokens; i++) {
      pathTo[i] = OpenMath.MAX_INT;
      exchangeRates[i] = new int256[](numTokens);
      exchanges[i] = new address[](numTokens);
      if (i == tokenFromIndex) {
        pathTo[i] = 0;
      }
      for (uint256 i = 0; i < numTokens; i++) {
        ERC20 tokenIn = ERC20(supportedTokens[i]);
        for (uint256 j = 0; j < numTokens; j++) {
          (int256 rate, address exchange) = getBestExchange(
            address(tokenIn),
            supportedTokens[j],
            10**tokenIn.decimals()
          );
          exchanges[i][j] = exchange;
          exchangeRates[i][j] = OpenMath.log2(-1 * rate);
        }
      }
    }

    {
      bool improved = true;
      uint256 iteration = 0;
      while (iteration < numTokens && improved) {
        improved = false;
        iteration++;
        for (uint256 i = 0; i < numTokens; i++) {
          int256 curCost = pathTo[i];
          for (uint256 j = 0; j < numTokens; j++) {
            if (curCost + exchangeRates[i][j] < pathTo[j]) {
              pathTo[j] = curCost + exchangeRates[i][j];
              improved = true;
              parents[j] = i;
            }
          }
        }
        if (iteration == numTokens) {
          arbExists = improved;
        }
      }
    }
  }

  function getPathFromBoard(
    uint256 tokenFromIndex,
    uint256 tokenOutIndex,
    int256[][] memory exchangeRates,
    address[][] memory exchanges,
    int256[] memory pathTo,
    uint256[] memory parents
  )
    public
    view
    returns (address[] memory tokenPath, address[] memory exchangePath)
  {
    tokenPath = new address[](numTokens);
    exchangePath = new address[](numTokens);
    uint256 curIndex = tokenOutIndex;
    uint256 iterations = 0;

    while (curIndex != tokenFromIndex) {
      require(iterations < numTokens, "No path exists");
      uint256 parent = parents[curIndex];
      tokenPath[iterations] = supportedTokens[curIndex];
      exchangePath[iterations++] = exchanges[parent][curIndex];
      curIndex = parent;
    }
    tokenPath[iterations++] = supportedTokens[tokenFromIndex];
    for (uint256 i = 0; i <= iterations / 2; i++) {
      address tmp = tokenPath[i];
      tokenPath[i] = tokenPath[tokenPath.length - i];
      tokenPath[tokenPath.length - i] = tmp;
      if (i <= exchangePath.length / 2) {
        tmp = exchangePath[i];
        exchangePath[i] = exchangePath[exchangePath.length - i];
        exchangePath[exchangePath.length - i] = tmp;
      }
    }
  }

  function swap(
    address[] memory tokenPath,
    address[] memory exchangePath,
    uint256 amountIn,
    uint256 minAmountOut,
    address recipient
  ) public returns (uint256 actualAmountOut) {
    require(tokenPath.length > 1, "Path must contain atleast two tokens");
    require(
      exchangePath.length == tokenPath.length - 1,
      "Exchange path incorrect length"
    );
    IERC20 inputToken = IERC20(tokenPath[0]);
    require(
      inputToken.transferFrom(msg.sender, address(this), amountIn),
      "Transfer failed"
    );
    actualAmountOut = amountIn;
    for (uint256 i = 0; i < exchangePath.length; i++) {
      inputToken = IERC20(tokenPath[i]);
      IERC20 outToken = IERC20(tokenPath[i + 1]);
      uint256 startingBalance = outToken.balanceOf(address(this));
      address exchange = exchangePath[i];
      require(inputToken.approve(exchange, actualAmountOut), "Approval failed");

      IWrapper(exchange).swap(
        address(inputToken),
        address(outToken),
        actualAmountOut,
        0
      );
      actualAmountOut = outToken.balanceOf(address(this)) - startingBalance;
    }
    uint256 swapFee = (actualAmountOut * fee) / FEE_DENOM;
    actualAmountOut -= swapFee;

    require(actualAmountOut >= minAmountOut, "Slippage was too high");
    IERC20(tokenPath[tokenPath.length - 1]).transfer(
      recipient,
      actualAmountOut
    );
    emit Swap(
      tokenPath[0],
      tokenPath[tokenPath.length - 1],
      amountIn,
      actualAmountOut
    );
  }

  function swapOnChain(
    address tokenIn,
    address tokenOut,
    uint256 amountIn,
    uint256 minAmountOut,
    address recipient
  ) external returns (uint256) {
    uint256 tokenFromIndex = getTokenIndex(tokenIn);
    uint256 tokenOutIndex = getTokenIndex(tokenOut);

    (
      int256[][] memory exchangeRates,
      address[][] memory exchanges,
      int256[] memory pathTo,
      uint256[] memory parents,

    ) = fillBoard(tokenFromIndex);

    (
      address[] memory tokenPath,
      address[] memory exchangePath
    ) = getPathFromBoard(
        tokenFromIndex,
        tokenOutIndex,
        exchangeRates,
        exchanges,
        pathTo,
        parents
      );
    return swap(tokenPath, exchangePath, amountIn, minAmountOut, recipient);
  }
}