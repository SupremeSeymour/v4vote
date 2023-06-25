"use client";
import React, { useEffect, useState, useMemo, ReactNode } from "react";
import { useAccount } from "wagmi";
import { useMockEthAllowance, useMockHogAllowance } from "../generated";
import { WethApproval } from "./WethApproval";
import { HogApproval } from "./HogApproval";
import { MintPosition } from "./MintPosition";

export function Approval() {
  const { address } = useAccount();
  const spender = "0x72557BA3ce9cBFA594069787d2A24D21F6678B3a";
  const [displayData, setDisplayData] = useState<string | null>(null);
  const [displayButton, setDisplayButton] = useState<ReactNode | null>(
    "Loading..."
  );

  const configWETH = useMemo(
    () => ({ args: [address, spender] }),
    [address, spender]
  );
  const configHOG = useMemo(
    () => ({ args: [address, spender] }),
    [address, spender]
  );

  const { data: dataWETH } = useMockEthAllowance(configWETH);
  const { data: dataHOG } = useMockHogAllowance(configHOG);
  // useEffect(() => {
  //   if (dataWETH < 1000) {
  //     setDisplayButton(<WethApproval />);
  //   } else if (dataHOG < 1000) {
  //     setDisplayButton(<HogApproval />); // Replaced null with HogApproval component
  //   } else {
  //     setDisplayButton(<MintPosition />);
  //   }
  // }, [dataHOG, dataWETH]);

  useEffect(() => {
    const data = dataWETH || dataHOG; // Merge data or choose one depending on your requirement
    if (!data) {
      console.log("no data");
      console.log(address);
      console.log(spender);
      console.log(data);
    } else {
      console.log(dataWETH);
      console.log(dataHOG);
      // Convert `data` to a string if it isn't one already.
      const displayCleanData =
        typeof data === "bigint" ? data.toString() : data;
      setDisplayData(displayCleanData);
    }
  }, [address, spender, dataWETH, dataHOG]);

  return (
    <div>
      <WethApproval />
      <HogApproval />
      <MintPosition />
    </div>
  );
}
