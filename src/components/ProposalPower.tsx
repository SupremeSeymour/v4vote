"use client";
import { useWagmiV3VaultQVp } from "../generated";
import { useAccount, useBlockNumber } from "wagmi";

export function ProposalPower() {
  const { address } = useAccount();
  const { data: blockNumberData } = useBlockNumber();
  const fillBytes = "0x0000000000000000000000000000000000000000";
  const blockNumber = Number(blockNumberData) - 20; // Stagger the blockNumber value by adding 20

  const { data: dataVP, error } = useWagmiV3VaultQVp({
    args: [address, blockNumber],
  });

  if (error) {
    // Handle the error here, you can display an error message or take any other appropriate action
    return <div>Error: {error.message}</div>;
  }

  console.log(dataVP);

  return <>{dataVP && dataVP?.toString()}</>;
}
