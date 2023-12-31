"use client";

import { useEffect, useState } from "react";
import { useMockHogMint, usePrepareMockHogMint } from "../generated";
import { useAccount, useWaitForTransaction } from "wagmi";

export function MintHog() {
  const [mintMEthAmount, setMintMEthAmount] = useState(
    BigInt(Math.pow(100, 10))
  );
  const { address } = useAccount();

  useEffect(() => {
    if (!address) {
      return;
    }
  }, [address]);

  if (!address) {
    return null;
  }
  const args: [`0x${string}`, bigint] = [address, mintMEthAmount];

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareMockHogMint({ args });

  const { data, error, isError, write } = useMockHogMint(config);

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
          {isLoading ? "Minting Hog..." : "Mint Hog"}
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
        {(isPrepareError || isError) &&
          console.log("Error in TokenMint", prepareError || error)}
      </div>
    </>
  );
}
