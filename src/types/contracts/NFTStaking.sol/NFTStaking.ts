/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export interface NFTStakingInterface extends utils.Interface {
  functions: {
    "claimReward(address)": FunctionFragment;
    "claimableTokens()": FunctionFragment;
    "emergencyUnstake(uint256)": FunctionFragment;
    "getStakedTokens(address)": FunctionFragment;
    "nft()": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rewardsToken()": FunctionFragment;
    "setTokensClaimable(bool)": FunctionFragment;
    "stake(uint256)": FunctionFragment;
    "stakeBatch(uint256[])": FunctionFragment;
    "stakedTotal()": FunctionFragment;
    "stakers(address)": FunctionFragment;
    "stakingStartTime()": FunctionFragment;
    "tokenOwner(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unpauseStaking()": FunctionFragment;
    "unstake(uint256)": FunctionFragment;
    "unstakeBatch(uint256[])": FunctionFragment;
    "updateReward(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "claimReward"
      | "claimableTokens"
      | "emergencyUnstake"
      | "getStakedTokens"
      | "nft"
      | "onERC721Received"
      | "owner"
      | "paused"
      | "renounceOwnership"
      | "rewardsToken"
      | "setTokensClaimable"
      | "stake"
      | "stakeBatch"
      | "stakedTotal"
      | "stakers"
      | "stakingStartTime"
      | "tokenOwner"
      | "transferOwnership"
      | "unpauseStaking"
      | "unstake"
      | "unstakeBatch"
      | "updateReward"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "claimReward", values: [string]): string;
  encodeFunctionData(
    functionFragment: "claimableTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyUnstake",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakedTokens",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "nft", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardsToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setTokensClaimable",
    values: [boolean]
  ): string;
  encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "stakeBatch",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "stakedTotal",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "stakers", values: [string]): string;
  encodeFunctionData(
    functionFragment: "stakingStartTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenOwner",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unpauseStaking",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unstake",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unstakeBatch",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "updateReward",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "claimReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimableTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyUnstake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nft", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardsToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTokensClaimable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakeBatch", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakedTotal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stakers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakingStartTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unpauseStaking",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unstakeBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateReward",
    data: BytesLike
  ): Result;

  events: {
    "ClaimableStatusUpdated(bool)": EventFragment;
    "EmergencyUnstake(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "RewardPaid(address,uint256)": EventFragment;
    "Staked(address,uint256)": EventFragment;
    "Unpaused(address)": EventFragment;
    "Unstaked(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ClaimableStatusUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EmergencyUnstake"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardPaid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Staked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unstaked"): EventFragment;
}

export interface ClaimableStatusUpdatedEventObject {
  status: boolean;
}
export type ClaimableStatusUpdatedEvent = TypedEvent<
  [boolean],
  ClaimableStatusUpdatedEventObject
>;

export type ClaimableStatusUpdatedEventFilter =
  TypedEventFilter<ClaimableStatusUpdatedEvent>;

export interface EmergencyUnstakeEventObject {
  user: string;
  tokenId: BigNumber;
}
export type EmergencyUnstakeEvent = TypedEvent<
  [string, BigNumber],
  EmergencyUnstakeEventObject
>;

export type EmergencyUnstakeEventFilter =
  TypedEventFilter<EmergencyUnstakeEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface RewardPaidEventObject {
  user: string;
  reward: BigNumber;
}
export type RewardPaidEvent = TypedEvent<
  [string, BigNumber],
  RewardPaidEventObject
>;

export type RewardPaidEventFilter = TypedEventFilter<RewardPaidEvent>;

export interface StakedEventObject {
  owner: string;
  amount: BigNumber;
}
export type StakedEvent = TypedEvent<[string, BigNumber], StakedEventObject>;

export type StakedEventFilter = TypedEventFilter<StakedEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface UnstakedEventObject {
  owner: string;
  amount: BigNumber;
}
export type UnstakedEvent = TypedEvent<
  [string, BigNumber],
  UnstakedEventObject
>;

export type UnstakedEventFilter = TypedEventFilter<UnstakedEvent>;

export interface NFTStaking extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NFTStakingInterface;

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
    claimReward(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimableTokens(overrides?: CallOverrides): Promise<[boolean]>;

    emergencyUnstake(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getStakedTokens(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { tokenIds: BigNumber[] }>;

    nft(overrides?: CallOverrides): Promise<[string]>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rewardsToken(overrides?: CallOverrides): Promise<[string]>;

    setTokensClaimable(
      _enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stake(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakeBatch(
      tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakedTotal(overrides?: CallOverrides): Promise<[BigNumber]>;

    stakers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        balance: BigNumber;
        rewardsReleased: BigNumber;
      }
    >;

    stakingStartTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    tokenOwner(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unpauseStaking(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unstake(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unstakeBatch(
      tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateReward(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  claimReward(
    _user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimableTokens(overrides?: CallOverrides): Promise<boolean>;

  emergencyUnstake(
    _tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getStakedTokens(
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  nft(overrides?: CallOverrides): Promise<string>;

  onERC721Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rewardsToken(overrides?: CallOverrides): Promise<string>;

  setTokensClaimable(
    _enabled: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stake(
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakeBatch(
    tokenIds: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakedTotal(overrides?: CallOverrides): Promise<BigNumber>;

  stakers(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { balance: BigNumber; rewardsReleased: BigNumber }
  >;

  stakingStartTime(overrides?: CallOverrides): Promise<BigNumber>;

  tokenOwner(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unpauseStaking(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unstake(
    _tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unstakeBatch(
    tokenIds: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateReward(
    _user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    claimReward(_user: string, overrides?: CallOverrides): Promise<void>;

    claimableTokens(overrides?: CallOverrides): Promise<boolean>;

    emergencyUnstake(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getStakedTokens(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    nft(overrides?: CallOverrides): Promise<string>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rewardsToken(overrides?: CallOverrides): Promise<string>;

    setTokensClaimable(
      _enabled: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    stake(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    stakeBatch(
      tokenIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    stakedTotal(overrides?: CallOverrides): Promise<BigNumber>;

    stakers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        balance: BigNumber;
        rewardsReleased: BigNumber;
      }
    >;

    stakingStartTime(overrides?: CallOverrides): Promise<BigNumber>;

    tokenOwner(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unpauseStaking(overrides?: CallOverrides): Promise<void>;

    unstake(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    unstakeBatch(
      tokenIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    updateReward(_user: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "ClaimableStatusUpdated(bool)"(
      status?: null
    ): ClaimableStatusUpdatedEventFilter;
    ClaimableStatusUpdated(status?: null): ClaimableStatusUpdatedEventFilter;

    "EmergencyUnstake(address,uint256)"(
      user?: string | null,
      tokenId?: null
    ): EmergencyUnstakeEventFilter;
    EmergencyUnstake(
      user?: string | null,
      tokenId?: null
    ): EmergencyUnstakeEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "RewardPaid(address,uint256)"(
      user?: string | null,
      reward?: null
    ): RewardPaidEventFilter;
    RewardPaid(user?: string | null, reward?: null): RewardPaidEventFilter;

    "Staked(address,uint256)"(owner?: null, amount?: null): StakedEventFilter;
    Staked(owner?: null, amount?: null): StakedEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;

    "Unstaked(address,uint256)"(
      owner?: null,
      amount?: null
    ): UnstakedEventFilter;
    Unstaked(owner?: null, amount?: null): UnstakedEventFilter;
  };

  estimateGas: {
    claimReward(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimableTokens(overrides?: CallOverrides): Promise<BigNumber>;

    emergencyUnstake(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getStakedTokens(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nft(overrides?: CallOverrides): Promise<BigNumber>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rewardsToken(overrides?: CallOverrides): Promise<BigNumber>;

    setTokensClaimable(
      _enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stake(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakeBatch(
      tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakedTotal(overrides?: CallOverrides): Promise<BigNumber>;

    stakers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    stakingStartTime(overrides?: CallOverrides): Promise<BigNumber>;

    tokenOwner(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unpauseStaking(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unstake(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unstakeBatch(
      tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateReward(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claimReward(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimableTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    emergencyUnstake(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getStakedTokens(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nft(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rewardsToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setTokensClaimable(
      _enabled: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stake(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakeBatch(
      tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakedTotal(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stakers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stakingStartTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenOwner(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unpauseStaking(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unstake(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unstakeBatch(
      tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateReward(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
