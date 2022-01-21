/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UbeswapWrapper,
  UbeswapWrapperInterface,
} from "../UbeswapWrapper";

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
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        internalType: "address",
        name: "token2",
        type: "address",
      },
    ],
    name: "addTokenPair",
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
    inputs: [
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        internalType: "address",
        name: "token2",
        type: "address",
      },
    ],
    name: "removeTokenPair",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ubeswap",
    outputs: [
      {
        internalType: "contract IUbeswapRouter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002161001c610026565b61002a565b61007a565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610ede806100896000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063c515ee231161005b578063c515ee23146100d0578063df1c8c17146100f0578063f2fde38b14610103578063fe0291561461011657610088565b8063715018a61461008d5780638da5cb5b14610097578063a356ce58146100b5578063a7c87ec2146100bd575b600080fd5b610095610129565b005b61009f61017d565b6040516100ac9190610c43565b60405180910390f35b61009f61018c565b6100956100cb366004610a46565b6101a4565b6100e36100de366004610a7e565b610251565b6040516100ac9190610d77565b6100956100fe366004610a46565b610268565b610095610111366004610a0e565b610311565b6100e3610124366004610abe565b610382565b6101316106ce565b6001600160a01b031661014261017d565b6001600160a01b0316146101715760405162461bcd60e51b815260040161016890610d42565b60405180910390fd5b61017b60006106d2565b565b6000546001600160a01b031690565b73e3d8bd6aed4f159bc8000a9cd47cffdb95f9612181565b6101ac6106ce565b6001600160a01b03166101bd61017d565b6001600160a01b0316146101e35760405162461bcd60e51b815260040161016890610d42565b6001600160a01b03918216600081815260016020818152604080842095909616835293845284822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00908116831790915581855285832093835292909352929092208054909216179055565b600061025e84848461073a565b90505b9392505050565b6102706106ce565b6001600160a01b031661028161017d565b6001600160a01b0316146102a75760405162461bcd60e51b815260040161016890610d42565b6001600160a01b03918216600081815260016020818152604080842095909616835293845284822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff009081169091559084528482209282529190925291902080549091169055565b6103196106ce565b6001600160a01b031661032a61017d565b6001600160a01b0316146103505760405162461bcd60e51b815260040161016890610d42565b6001600160a01b0381166103765760405162461bcd60e51b815260040161016890610cae565b61037f816106d2565b50565b6040805160028082526060820183526000928392919060208301908036833701905050905085816000815181106103e2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b031681525050848160018151811061043d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6001600160a01b0392831660209182029290920101526040517f23b872dd00000000000000000000000000000000000000000000000000000000815242918816906323b872dd9061049690339030908a90600401610c71565b602060405180830381600087803b1580156104b057600080fd5b505af11580156104c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e89190610bbd565b506040517f095ea7b30000000000000000000000000000000000000000000000000000000081526001600160a01b0388169063095ea7b3906105449073e3d8bd6aed4f159bc8000a9cd47cffdb95f96121908990600401610c95565b602060405180830381600087803b15801561055e57600080fd5b505af1158015610572573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105969190610bbd565b6105b25760405162461bcd60e51b815260040161016890610d0b565b600073e3d8bd6aed4f159bc8000a9cd47cffdb95f961216338ed1739878786336105dd88601e610e06565b6040518663ffffffff1660e01b81526004016105fd959493929190610d80565b600060405180830381600087803b15801561061757600080fd5b505af115801561062b573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526106719190810190610b03565b905080600182516106829190610e1e565b815181106106b9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101519350505050949350505050565b3390565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03808416600090815260016020908152604080832093861683529290529081205460ff1661077157506000610261565b6040517f96ed28f900000000000000000000000000000000000000000000000000000000815260009073e3d8bd6aed4f159bc8000a9cd47cffdb95f96121906396ed28f9906107c69088908890600401610c57565b60206040518083038186803b1580156107de57600080fd5b505afa1580156107f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108169190610a2a565b9050600080826001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561085457600080fd5b505afa158015610868573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061088c9190610bdd565b506dffffffffffffffffffffffffffff1691506dffffffffffffffffffffffffffff169150826001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b1580156108ea57600080fd5b505afa1580156108fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109229190610a2a565b6001600160a01b0316876001600160a01b03161461093c57905b6040517f054d50d400000000000000000000000000000000000000000000000000000000815273e3d8bd6aed4f159bc8000a9cd47cffdb95f961219063054d50d49061099090889086908690600401610df0565b60206040518083038186803b1580156109a857600080fd5b505afa1580156109bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e09190610c2b565b979650505050505050565b80516dffffffffffffffffffffffffffff81168114610a0957600080fd5b919050565b600060208284031215610a1f578081fd5b813561026181610e93565b600060208284031215610a3b578081fd5b815161026181610e93565b60008060408385031215610a58578081fd5b8235610a6381610e93565b91506020830135610a7381610e93565b809150509250929050565b600080600060608486031215610a92578081fd5b8335610a9d81610e93565b92506020840135610aad81610e93565b929592945050506040919091013590565b60008060008060808587031215610ad3578081fd5b8435610ade81610e93565b93506020850135610aee81610e93565b93969395505050506040820135916060013590565b60006020808385031215610b15578182fd5b825167ffffffffffffffff80821115610b2c578384fd5b818501915085601f830112610b3f578384fd5b815181811115610b5157610b51610e64565b83810260405185828201018181108582111715610b7057610b70610e64565b604052828152858101935084860182860187018a1015610b8e578788fd5b8795505b83861015610bb0578051855260019590950194938601938601610b92565b5098975050505050505050565b600060208284031215610bce578081fd5b81518015158114610261578182fd5b600080600060608486031215610bf1578283fd5b610bfa846109eb565b9250610c08602085016109eb565b9150604084015163ffffffff81168114610c20578182fd5b809150509250925092565b600060208284031215610c3c578081fd5b5051919050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201527f6464726573730000000000000000000000000000000000000000000000000000606082015260800190565b6020808252600f908201527f417070726f76616c206661696c65640000000000000000000000000000000000604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b90815260200190565b600060a082018783526020878185015260a0604085015281875180845260c0860191508289019350845b81811015610dcf5784516001600160a01b031683529383019391830191600101610daa565b50506001600160a01b03969096166060850152505050608001529392505050565b9283526020830191909152604082015260600190565b60008219821115610e1957610e19610e35565b500190565b600082821015610e3057610e30610e35565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6001600160a01b038116811461037f57600080fdfea26469706673582212209f982dd879f2828372438dac23800eb49356efb86bc864797e239e9796d55ca364736f6c63430008000033";

type UbeswapWrapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UbeswapWrapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UbeswapWrapper__factory extends ContractFactory {
  constructor(...args: UbeswapWrapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "UbeswapWrapper";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UbeswapWrapper> {
    return super.deploy(overrides || {}) as Promise<UbeswapWrapper>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UbeswapWrapper {
    return super.attach(address) as UbeswapWrapper;
  }
  connect(signer: Signer): UbeswapWrapper__factory {
    return super.connect(signer) as UbeswapWrapper__factory;
  }
  static readonly contractName: "UbeswapWrapper";
  public readonly contractName: "UbeswapWrapper";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UbeswapWrapperInterface {
    return new utils.Interface(_abi) as UbeswapWrapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UbeswapWrapper {
    return new Contract(address, _abi, signerOrProvider) as UbeswapWrapper;
  }
}
