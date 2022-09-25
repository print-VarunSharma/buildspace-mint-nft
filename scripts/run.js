const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactor("MyEpicNFT");
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();

  console.log("Contract is deployed to: ", nftContract.address);

  // Call the function.
  let txn = await nftContract.makeAnEpicNFT();

  // Wait for it to be minted.

  await txn.wait();

  //  Mint another NFT for fun.

  txn = await nftContract.makeAnEpicNFT();

  // Wait for it to be mined.

  await txn.wait();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain;
