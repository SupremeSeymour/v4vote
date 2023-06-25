"use client";
import { useEffect, useState, useMemo } from "react";
import { useAccount, useWaitForTransaction } from "wagmi";
import {
  usePrepareWagmiV3VaultMintPosition,
  useWagmiV3VaultMintPosition,
  useCenterTickSlot0,
  useCenterTickTickSpacing,
} from "../generated";

export function MintPosition() {
  const poolAddress = "0x9a75BE84bD636E2F1FA8c14789072f3d71d90EDb";
  const [lpWidth, setLPWidth] = useState(0);
  const wethAddress = "0x6c82C6a018e71dB30FF9FE13579fafc681707f32";
  const [token0Amount, setToken0Amount] = useState(10);
  const [token1Amount, setToken1Amount] = useState(10);
  const [centerTick, setCenterTick] = useState(10);

  const { data: dataSlot0 } = useCenterTickSlot0({});
  const { data: dataTickSpacing } = useCenterTickTickSpacing({});

  useEffect(() => {
    if (dataSlot0 && dataTickSpacing) {
      const nearestTick = getNearestusableTick(dataSlot0[1], dataTickSpacing);
      setCenterTick(nearestTick);
    }
  }, [dataSlot0, dataTickSpacing]);

  function getNearestusableTick(currentTick, space) {
    console.log("Num", currentTick, space);
    let direction;
    let nearestTick;

    if (currentTick === 0) {
      return 0;
    }

    direction = currentTick >= 0 ? BigInt(1) : BigInt(-1);
    currentTick *= direction;

    let bigIntSpace = BigInt(space);
    nearestTick =
      currentTick % bigIntSpace <= bigIntSpace / 2n
        ? currentTick - (currentTick % bigIntSpace)
        : currentTick + (bigIntSpace - (currentTick % bigIntSpace));

    return nearestTick;
  }

  const args = [
    {
      desiredPool: poolAddress,
      centerTick: centerTick,
      width: lpWidth,
      userToken: wethAddress,
      token0AmountDesired: token0Amount,
      token1AmountDesired: token1Amount,
    },
  ];

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareWagmiV3VaultMintPosition({ args });
  const { data, error, isError, write } = useWagmiV3VaultMintPosition(config);
  const { isLoading, isSuccess } = useWaitForTransaction({ hash: data?.hash });

  return (
    <div>
      <input
        type="number"
        title="Token 0 Amount"
        onChange={(e) => setToken0Amount(Number(e.target.value) || 10)}
      />
      <input
        type="number"
        title="Token 1 Amount"
        onChange={(e) => setToken1Amount(Number(e.target.value) || 10)}
      />
      <input
        type="number"
        title="LP Width"
        onChange={(e) => setLPWidth(Number(e.target.value) || 10)}
      />

      <button disabled={!write || isLoading} onClick={() => write?.()}>
        {isLoading ? "Minting..." : "Mint A Position"}
      </button>

      {isSuccess && (
        <div>
          Successfully Created An LP!
          <div>
            <a href={`https://goerli.etherscan.io/tx/${data?.hash}`}>
              GoerliScan
            </a>
          </div>
        </div>
      )}

      {(isPrepareError || isError) && console.log("Error")}
    </div>
  );
}
