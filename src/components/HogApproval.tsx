"use client";
import { useEffect, useState, useMemo } from "react";
import { useWaitForTransaction } from "wagmi";
import { usePrepareMockHogApprove, useMockHogApprove } from "../generated";

export function HogApproval() {
  const spender = "0x72557BA3ce9cBFA594069787d2A24D21F6678B3a";
  const amountApproved = 100000000000000000000000000000n;

  const args: [`0x${string}`, bigint] = [spender, amountApproved];

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareMockHogApprove({ args });

  const { data, error, isError, write } = useMockHogApprove(config);

  const { isLoading, isSuccess } = useWaitForTransaction({ hash: data?.hash });

  return (
    <div>
      <button disabled={!write || isLoading} onClick={() => write?.()}>
        {isLoading ? "Approving Hog..." : "Approve Hog"}
      </button>
      {isSuccess && (
        <div>
          Successfully Created An LP!
          <div>
            <a href={`https://goerli.etherscan.io/tx/${data?.hash}`}>
              {" "}
              GoerliScan{" "}
            </a>
          </div>
        </div>
      )}
      {(isPrepareError || isError) && (
        <div>Error: {(prepareError || error)?.message}</div>
      )}
    </div>
  );
}
