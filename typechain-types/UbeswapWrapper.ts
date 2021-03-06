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

export interface UbeswapWrapperInterface extends utils.Interface {
  contractName: "UbeswapWrapper";
  functions: {
    "addTokenPair(address,address)": FunctionFragment;
    "getQuote(address,address,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "removeTokenPair(address,address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "swap(address,address,uint256,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "ubeswap()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addTokenPair",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getQuote",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeTokenPair",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "ubeswap", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "addTokenPair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getQuote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeTokenPair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ubeswap", data: BytesLike): Result;

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

export interface UbeswapWrapper extends BaseContract {
  contractName: "UbeswapWrapper";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UbeswapWrapperInterface;

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
    addTokenPair(
      token1: string,
      token2: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getQuote(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeTokenPair(
      token1: string,
      token2: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ubeswap(overrides?: CallOverrides): Promise<[string]>;
  };

  addTokenPair(
    token1: string,
    token2: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getQuote(
    tokenIn: string,
    tokenOut: string,
    amountIn: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeTokenPair(
    token1: string,
    token2: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ubeswap(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    addTokenPair(
      token1: string,
      token2: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getQuote(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeTokenPair(
      token1: string,
      token2: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    swap(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      minAmountOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    ubeswap(overrides?: CallOverrides): Promise<string>;
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
    addTokenPair(
      token1: string,
      token2: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getQuote(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeTokenPair(
      token1: string,
      token2: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

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

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ubeswap(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addTokenPair(
      token1: string,
      token2: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getQuote(
      tokenIn: string,
      tokenOut: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeTokenPair(
      token1: string,
      token2: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

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

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ubeswap(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
