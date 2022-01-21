/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface MobiusWrapperInterface extends utils.Interface {
  contractName: "MobiusWrapper";
  functions: {
    "addMultipleSwapContracts(address[],uint256[])": FunctionFragment;
    "addSwapContract(address,uint256)": FunctionFragment;
    "getQuote(address,address,uint256)": FunctionFragment;
    "getTradeIndices(address,address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "swap(address,address,uint256,uint256)": FunctionFragment;
    "swapContained(address)": FunctionFragment;
    "tokenRoute(address,address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addMultipleSwapContracts",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addSwapContract",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getQuote",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTradeIndices",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapContained",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenRoute",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addMultipleSwapContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addSwapContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getQuote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTradeIndices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapContained",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenRoute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface MobiusWrapper extends BaseContract {
  contractName: "MobiusWrapper";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MobiusWrapperInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addMultipleSwapContracts(
      contracts: string[],
      numTokens: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addSwapContract(
      swapAddress: string,
      numTokens: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getQuote(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTradeIndices(
      tokenFrom: string,
      tokenTo: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string] & {
        tokenIndexFrom: BigNumber;
        tokenIndexTo: BigNumber;
        swapAddress: string;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swap(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      minAmountOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapContained(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    tokenRoute(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addMultipleSwapContracts(
    contracts: string[],
    numTokens: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addSwapContract(
    swapAddress: string,
    numTokens: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getQuote(
    tokenIn: string,
    tokenOut: string,
    amountIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTradeIndices(
    tokenFrom: string,
    tokenTo: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string] & {
      tokenIndexFrom: BigNumber;
      tokenIndexTo: BigNumber;
      swapAddress: string;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swap(
    tokenIn: string,
    tokenOut: string,
    amountIn: BigNumberish,
    minAmountOut: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapContained(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  tokenRoute(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addMultipleSwapContracts(
      contracts: string[],
      numTokens: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    addSwapContract(
      swapAddress: string,
      numTokens: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getQuote(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTradeIndices(
      tokenFrom: string,
      tokenTo: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string] & {
        tokenIndexFrom: BigNumber;
        tokenIndexTo: BigNumber;
        swapAddress: string;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    swap(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      minAmountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapContained(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    tokenRoute(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    addMultipleSwapContracts(
      contracts: string[],
      numTokens: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addSwapContract(
      swapAddress: string,
      numTokens: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getQuote(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTradeIndices(
      tokenFrom: string,
      tokenTo: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swap(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      minAmountOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapContained(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    tokenRoute(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addMultipleSwapContracts(
      contracts: string[],
      numTokens: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addSwapContract(
      swapAddress: string,
      numTokens: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getQuote(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTradeIndices(
      tokenFrom: string,
      tokenTo: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swap(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      minAmountOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapContained(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenRoute(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}