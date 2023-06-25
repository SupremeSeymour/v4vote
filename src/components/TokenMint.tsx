"use client";

import { useState } from "react";
import { useMockEthMint, usePrepareMockEthMint } from "../generated";
import { useAccount, useWaitForTransaction } from "wagmi";

export function MintETH() {
  const [mintMEthAmount, setMintMEthAmount] = useState(
    BigInt(Math.pow(1000, 10))
  );
  const { address } = useAccount();

  const args: [`0x${string}`, bigint] = [address, mintMEthAmount];

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareMockEthMint({ args });

  const { data, error, isError, write } = useMockEthMint(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <>
      <div>
        <button
          disabled={!write || isLoading}
          onClick={() => write?.()}
          className="btn btn-primary"
        >
          {isLoading ? "Minting Eth..." : "Mint Eth"}
        </button>
        {isSuccess && (
          <div className="mt-2">
            Successfully Created An LP!
            <div>
              <a
                href={`https://goerli.etherscan.io/tx/${data?.hash}`}
                className="text-blue-500 underline"
              >
                GoerliScan
              </a>
            </div>
          </div>
        )}
        {(isPrepareError || isError) && console.log("Error in TokenMint")}
      </div>
    </>
  );
}
