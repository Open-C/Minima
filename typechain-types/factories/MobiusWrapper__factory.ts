/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MobiusWrapper, MobiusWrapperInterface } from "../MobiusWrapper";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "contracts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "numTokens",
        type: "uint256[]",
      },
    ],
    name: "addMultipleSwapContracts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "swapAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "numTokens",
        type: "uint256",
      },
    ],
    name: "addSwapContract",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "getQuote",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenFrom",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenTo",
        type: "address",
      },
    ],
    name: "getTradeIndices",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenIndexFrom",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenIndexTo",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "swapAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minAmountOut",
        type: "uint256",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "swapContained",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "tokenRoute",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002161001c610026565b61002a565b61007a565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b611100806100896000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c806393dc4ac611610076578063e3cc4bfa1161005b578063e3cc4bfa14610173578063f2fde38b14610186578063fe02915614610199576100be565b806393dc4ac614610133578063c515ee2314610153576100be565b8063715018a6116100a7578063715018a61461010e57806380a071c7146101185780638da5cb5b1461012b576100be565b80632ba29f24146100c35780633d6f9f46146100ee575b600080fd5b6100d66100d1366004610c92565b6101ac565b6040516100e593929190610fd8565b60405180910390f35b6101016100fc366004610c92565b610304565b6040516100e59190610e3c565b61011661032a565b005b610116610126366004610d7a565b61037e565b610101610465565b610146610141366004610c5a565b610474565b6040516100e59190610e8d565b610166610161366004610cca565b610489565b6040516100e59190610fcf565b610146610181366004610d4f565b6104d3565b610116610194366004610c5a565b6107bd565b6101666101a7366004610d0a565b61082e565b6001600160a01b0380831660009081526001602090815260408083208585168452909152812054909182911680156102fd576040517f66c0bd2400000000000000000000000000000000000000000000000000000000815281906001600160a01b038216906366c0bd2490610225908990600401610e3c565b60206040518083038186803b15801561023d57600080fd5b505afa158015610251573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102759190610e1b565b60ff169350806001600160a01b03166366c0bd24866040518263ffffffff1660e01b81526004016102a69190610e3c565b60206040518083038186803b1580156102be57600080fd5b505afa1580156102d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102f69190610e1b565b60ff169250505b9250925092565b60016020908152600092835260408084209091529082529020546001600160a01b031681565b610332610afd565b6001600160a01b0316610343610465565b6001600160a01b0316146103725760405162461bcd60e51b815260040161036990610f63565b60405180910390fd5b61037c6000610b01565b565b610386610afd565b6001600160a01b0316610397610465565b6001600160a01b0316146103bd5760405162461bcd60e51b815260040161036990610f63565b8281146103dc5760405162461bcd60e51b815260040161036990610ef5565b60005b8381101561045e5761044b85858381811061040a57634e487b7160e01b600052603260045260246000fd5b905060200201602081019061041f9190610c5a565b84848481811061043f57634e487b7160e01b600052603260045260246000fd5b905060200201356104d3565b508061045681611066565b9150506103df565b5050505050565b6000546001600160a01b031690565b60026020526000908152604090205460ff1681565b60008060008061049987876101ac565b919450925090506001600160a01b0381166104ba57600093505050506104cc565b6104c683838784610b69565b93505050505b9392505050565b60006104dd610afd565b6001600160a01b03166104ee610465565b6001600160a01b0316146105145760405162461bcd60e51b815260040161036990610f63565b6001600160a01b03831660009081526002602052604090205460ff161561053d575060006107b7565b6001600160a01b038316600090815260026020526040812080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905583908367ffffffffffffffff8111156105a757634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156105d0578160200160208202803683370190505b50905060005b848110156106bd576040517f82b866000000000000000000000000000000000000000000000000000000000081526001600160a01b038416906382b8660090610623908490600401610ff7565b60206040518083038186803b15801561063b57600080fd5b505afa15801561064f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106739190610c76565b82828151811061069357634e487b7160e01b600052603260045260246000fd5b6001600160a01b0390921660209283029190910190910152806106b581611066565b9150506105d6565b5060005b848110156107af5760008282815181106106eb57634e487b7160e01b600052603260045260246000fd5b6020026020010151905060005b8681101561079a5782811461078857600084828151811061072957634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160a01b038581166000908152600184526040808220938316825292909352912080547fffffffffffffffffffffffff000000000000000000000000000000000000000016918b16919091179055505b8061079281611066565b9150506106f8565b505080806107a790611066565b9150506106c1565b506001925050505b92915050565b6107c5610afd565b6001600160a01b03166107d6610465565b6001600160a01b0316146107fc5760405162461bcd60e51b815260040161036990610f63565b6001600160a01b0381166108225760405162461bcd60e51b815260040161036990610e98565b61082b81610b01565b50565b60008060008061083e88886101ac565b919450925090506001600160a01b03811661086b5760405162461bcd60e51b815260040161036990610f98565b6040517f23b872dd000000000000000000000000000000000000000000000000000000008152819042906001600160a01b038b16906323b872dd906108b890339030908d90600401610e50565b602060405180830381600087803b1580156108d257600080fd5b505af11580156108e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061090a9190610de3565b506040517f095ea7b30000000000000000000000000000000000000000000000000000000081526001600160a01b038b169063095ea7b3906109529086908c90600401610e74565b602060405180830381600087803b15801561096c57600080fd5b505af1158015610980573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a49190610de3565b6109c05760405162461bcd60e51b815260040161036990610f2c565b60006001600160a01b038316639169558687878c8c6109e088601e61104e565b6040518663ffffffff1660e01b8152600401610a00959493929190611023565b602060405180830381600087803b158015610a1a57600080fd5b505af1158015610a2e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a529190610e03565b6040517fa9059cbb0000000000000000000000000000000000000000000000000000000081529091506001600160a01b038b169063a9059cbb90610a9c9033908590600401610e74565b602060405180830381600087803b158015610ab657600080fd5b505af1158015610aca573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aee9190610de3565b509a9950505050505050505050565b3390565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040517fa95b089f00000000000000000000000000000000000000000000000000000000815260009082906001600160a01b0382169063a95b089f90610bb790899089908990600401611005565b60206040518083038186803b158015610bcf57600080fd5b505afa158015610be3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c079190610e03565b9695505050505050565b60008083601f840112610c22578182fd5b50813567ffffffffffffffff811115610c39578182fd5b6020830191508360208083028501011115610c5357600080fd5b9250929050565b600060208284031215610c6b578081fd5b81356104cc816110b5565b600060208284031215610c87578081fd5b81516104cc816110b5565b60008060408385031215610ca4578081fd5b8235610caf816110b5565b91506020830135610cbf816110b5565b809150509250929050565b600080600060608486031215610cde578081fd5b8335610ce9816110b5565b92506020840135610cf9816110b5565b929592945050506040919091013590565b60008060008060808587031215610d1f578081fd5b8435610d2a816110b5565b93506020850135610d3a816110b5565b93969395505050506040820135916060013590565b60008060408385031215610d61578182fd5b8235610d6c816110b5565b946020939093013593505050565b60008060008060408587031215610d8f578384fd5b843567ffffffffffffffff80821115610da6578586fd5b610db288838901610c11565b90965094506020870135915080821115610dca578384fd5b50610dd787828801610c11565b95989497509550505050565b600060208284031215610df4578081fd5b815180151581146104cc578182fd5b600060208284031215610e14578081fd5b5051919050565b600060208284031215610e2c578081fd5b815160ff811681146104cc578182fd5b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201527f6464726573730000000000000000000000000000000000000000000000000000606082015260800190565b60208082526012908201527f4172726179206c656e6774687320766172790000000000000000000000000000604082015260600190565b6020808252600f908201527f417070726f76616c206661696c65640000000000000000000000000000000000604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252601c908201527f5377617020636f6e747261637420646f6573206e6f7420657869737400000000604082015260600190565b90815260200190565b92835260208301919091526001600160a01b0316604082015260600190565b60ff91909116815260200190565b60ff9384168152919092166020820152604081019190915260600190565b60ff958616815293909416602084015260408301919091526060820152608081019190915260a00190565b600082198211156110615761106161109f565b500190565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156110985761109861109f565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b038116811461082b57600080fdfea26469706673582212208dbbd8835459f98bd4c2a7261bfcccbfe77774759f6d1d62c116f72b341e395b64736f6c63430008000033";

type MobiusWrapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MobiusWrapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MobiusWrapper__factory extends ContractFactory {
  constructor(...args: MobiusWrapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MobiusWrapper";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MobiusWrapper> {
    return super.deploy(overrides || {}) as Promise<MobiusWrapper>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MobiusWrapper {
    return super.attach(address) as MobiusWrapper;
  }
  connect(signer: Signer): MobiusWrapper__factory {
    return super.connect(signer) as MobiusWrapper__factory;
  }
  static readonly contractName: "MobiusWrapper";
  public readonly contractName: "MobiusWrapper";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MobiusWrapperInterface {
    return new utils.Interface(_abi) as MobiusWrapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MobiusWrapper {
    return new Contract(address, _abi, signerOrProvider) as MobiusWrapper;
  }
}