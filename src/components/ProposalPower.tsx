"use client";

import { useWagmiV3VaultQueryVotePower } from "../generated";
import { useAccount, useBlockNumber } from "wagmi";

export function ProposalPower() {
  const { address } = useAccount();
  const { data: blockNumberData } = useBlockNumber();
  const fillBytes =
    "0x0000000000000000000000000000000000000000000000000000000000000000";
  const blockNumber = blockNumberData?.toString();

  console.log("address", address);
  console.log("blockNumber", blockNumber);
  console.log("fillBytes", fillBytes);

  const { data: dataVP, error } = useWagmiV3VaultQueryVotePower({
    args: [address, blockNumber, fillBytes],
  });

  if (error) {
    // Handle the error here, you can display an error message or take any other appropriate action
    return <div>Error: {error.message}</div>;
  }

  return <>{dataVP && dataVP?.toString()}</>;
}
