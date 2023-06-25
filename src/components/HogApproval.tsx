"use client";
import { useEffect, useState, useMemo } from "react";
import { useWaitForTransaction } from "wagmi";
import { usePrepareMockHogApprove, useMockHogApprove } from "../generated";

import { useChainId } from "wagmi";

export function HogApproval() {
  const chainId = useChainId(); // Get the ChainID

  //Arb Address & Poly Pool Addresses
  const arbGoerliSpender = "0xaD3d2dbAE27c6F17b76487ce0875c33d2047EFa4";
  const polyMumbaiSpender = "0xf17Aa81FDDcf0B0650b5763C71CF79D64a87D428";
  const spender = chainId === 8001 ? polyMumbaiSpender : arbGoerliSpender;
  const amountApproved = 10000000000000000000000000000000000000n;

  const args: [`0x${string}`, bigint] = [spender, amountApproved];

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareMockHogApprove({ args });

  const { data, error, isError, write } = useMockHogApprove(config);

  const { isLoading, isSuccess } = useWaitForTransaction({ hash: data?.hash });

  return (
    <>
      <div>
        <button
          disabled={!write || isLoading}
          onClick={() => write?.()}
          className="btn btn-primary"
        >
          {isLoading ? "Approving Hog..." : "Approve Hog"}
        </button>
        {isSuccess && (
          <div className="mt-2">
            <h3>Transaction Successful!</h3>
          </div>
        )}
        {(isPrepareError || isError) && console.log("Error in HogAprovals")}
      </div>
    </>
  );
}
