"use client";
import { useEffect, useState, useMemo } from "react";
import { useWaitForTransaction } from "wagmi";
import { usePrepareMockEthApprove, useMockEthApprove } from "../generated";
import { useChainId } from "wagmi";

export function WethApproval() {
  const chainId = useChainId(); // Get the ChainID

  //Arb Address & Poly Pool Addresses
  const arbGoerliSpender = "0x66a6eD42FEB017788F271006515BF29f4ec58319";
  const polyMumbaiSpender = "0x2218aa64910Ba98c19Ce14b327399a026C3b24FC";
  const spender = chainId === 8001 ? polyMumbaiSpender : arbGoerliSpender;
  const amountApproved = 10000000000000000000000000000000000000n;

  const args: [`0x${string}`, bigint] = [spender, amountApproved];

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareMockEthApprove({ args });

  const { data, error, isError, write } = useMockEthApprove(config);

  const { isLoading, isSuccess } = useWaitForTransaction({ hash: data?.hash });

  return (
    <>
      <div>
        <button
          disabled={!write || isLoading}
          onClick={() => write?.()}
          className="btn btn-primary"
        >
          {isLoading ? "Approving Eth..." : "Approve Eth"}
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
