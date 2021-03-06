import { DeployFunction } from "hardhat-deploy/types";

const deployMinima: DeployFunction = async function ({
  getNamedAccounts,
  deployments,
  getChainId,
  getUnnamedAccounts,
}) {
  // await hre.run('compile');
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;
  const openMath = await deploy("OpenMath", {
    from: deployer,
  });
  const ubeswap = await deployments.get("UbeswapWrapper");
  const mobius = await deployments.get("MobiusWrapper");
  const moola = await deployments.get("MoolaWrapper");
  const tokens = {
    Celo: "0x471EcE3750Da237f93B8E339c536989b8978a438",
    cUSD: "0x765DE816845861e75A25fCA122bb6898B8B1282a",
    USDC: "0x2A3684e9Dc20B857375EA04235F2F7edBe818FA7",
    cEUR: "0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73",
    mcUSD: "0x918146359264C492BD6934071c6Bd31C854EDBc3",
    mobi: "0x73a210637f6F6B7005512677Ba6B3C96bb4AA44B",
  };

  await deploy("Minima", {
    from: deployer,
    args: [Object.values(tokens), [ubeswap.address, moola.address]],
    log: true,
    libraries: {
      OpenMath: openMath.address,
    },
  });
};

export default deployMinima;
deployMinima.id = "deploy_minima";
deployMinima.tags = ["Minima"];
