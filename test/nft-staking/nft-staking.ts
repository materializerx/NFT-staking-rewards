import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { expect } from "chai";
import { constants } from "ethers";
import { artifacts, ethers, waffle } from "hardhat";
import type { Artifact } from "hardhat/types";

import type { KongzNFT } from "../../src/types/contracts/KongzNFT";
// import type { Greeter } from "../../src/types/Greeter";
import type { NFTStaking } from "../../src/types/contracts/NFTStaking.sol/NFTStaking";
import type { RewardToken } from "../../src/types/contracts/RewardToken";

// import { Signers } from "../types";
// import { shouldBehaveLikeGreeter } from "./Greeter.behavior";

describe("Unit tests", function () {
  // const [owner, addr1] = await ethers.getSigners();

  // const deployer = owner.address;
  // const nullAddress = "0x0000000000000000000000000000000000000000";
  // const account1 = addr1.address;

  // /// factories
  // const RandomApeFactory = await ethers.getContractFactory("RandomApe");
  // const RewardTokenFactory = await ethers.getContractFactory("RewardToken");
  // const StakingSystemFactory = await ethers.getContractFactory(
  //   "StakingSystem"
  // );

  let kongzNFTContract: KongzNFT;
  let rewardTokenContract: RewardToken;
  let stakingContract: NFTStaking;
  let owner: SignerWithAddress;
  let userA: SignerWithAddress;
  let userB: SignerWithAddress;

  before(async function () {
    [owner, userA, userB] = await ethers.getSigners();
  });

  describe("NFT Stakeing", function () {
    before(async function () {
      const nftStakingArtifact: Artifact = await artifacts.readArtifact("NFTStaking");
      const kongzNFTArtifact: Artifact = await artifacts.readArtifact("KongzNFT");
      const rewardTokenArtifact: Artifact = await artifacts.readArtifact("RewardToken");

      kongzNFTContract = <KongzNFT>await waffle.deployContract(owner, kongzNFTArtifact);
      rewardTokenContract = <RewardToken>await waffle.deployContract(owner, rewardTokenArtifact);
      stakingContract = <NFTStaking>(
        await waffle.deployContract(owner, nftStakingArtifact, [kongzNFTContract.address, rewardTokenContract.address])
      );
    });

    it("should set approval for all in Kongz NFT contract for the staking contract", async () => {
      // console.log(("setting approval : " + stakingContract.address, userA, 0));

      const tx = kongzNFTContract.connect(owner).setApprovalForAll(stakingContract.address, true);

      // emit `ApprovalForAll` event
      await expect(tx).to.emit(kongzNFTContract, "ApprovalForAll");
    });

    it("should mint two(2) Kongz NFTs", async () => {
      //mint a NFT
      const tx1 = kongzNFTContract.connect(owner).safeMint(userA.address);
      await expect(tx1).to.emit(kongzNFTContract, "Transfer").withArgs(constants.AddressZero, userA.address, 0);
      //mint a NFT
      const tx2 = kongzNFTContract.connect(owner).safeMint(userA.address);
      await expect(tx2).to.emit(kongzNFTContract, "Transfer").withArgs(constants.AddressZero, userA.address, 1);

      // start staking
      await stakingContract.unpauseStaking();
      await stakingContract.setTokensClaimable(true);
    });

    it("should stake one(1) token from userA", async () => {
      // userA needs to setApproval for all to the staking contract
      const tx = await kongzNFTContract.connect(userA).setApprovalForAll(stakingContract.address, true);
      // emit event
      await expect(tx)
        .to.emit(kongzNFTContract, "ApprovalForAll")
        .withArgs(userA.address, stakingContract.address, true);

      // stake 1 token
      const tx2 = stakingContract.connect(userA).stake(0);
      await expect(tx2).to.emit(stakingContract, "Staked").withArgs(userA.address, 0);
    });
  });
});
