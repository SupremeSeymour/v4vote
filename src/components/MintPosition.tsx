"use client";
import { useEffect, useState } from "react";
import { useAccount, useWaitForTransaction } from "wagmi";
import {
  usePrepareWagmiV3VaultMintPosition,
  useWagmiV3VaultMintPosition,
  usePrepareWagmiV3OtherMintPosition,
  useWagmiV3OtherMintPosition,
  useCenterTickSlot0,
  useCenterTickTickSpacing,
} from "../generated";
import { useChainId } from "wagmi";

export function MintPosition() {
  const chainId = useChainId(); // Get the chainId

  const poolAddressArbGoerli = "0x90c4b83ebd7064e3548498f8db43e9d66467a2c7";
  const poolAddressPolyMumbai = "0xa74cd5e13431FF7969F5b8770fC121768b14607e";
  const [lpWidth, setLPWidth] = useState(0);
  const wethAddressArbGoerli = "0x865782BE8B791A8C11D174Da06D60Fa32828459C";
  const wethAddressPolyMumbai = "0x65dbc1F05bF843032c26355f42a6E9a703c75885";
  const [token0Amount, setToken0Amount] = useState(10);
  const [token1Amount, setToken1Amount] = useState(10);
  const [centerTick, setCenterTick] = useState(10);

  // Conditionally set poolAddress and wethAddress based on the chainId
  const poolAddress =
    chainId === 8001 ? poolAddressArbGoerli : poolAddressPolyMumbai;
  const wethAddress =
    chainId === 421613 ? wethAddressArbGoerli : wethAddressPolyMumbai;

  console.log(chainId);

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

  // Prepare and execute hooks based on chainId
  const prepareHook =
    chainId === 8001
      ? usePrepareWagmiV3OtherMintPosition
      : usePrepareWagmiV3VaultMintPosition;
  const executeHook =
    chainId === 8001
      ? useWagmiV3OtherMintPosition
      : useWagmiV3VaultMintPosition;

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
  } = prepareHook({
    args,
  });
  const { data, error, isError, write } = executeHook(config);

  const { isLoading, isSuccess } = useWaitForTransaction({ hash: data?.hash });

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-100">
      <div className="card bordered max-w-md mx-auto">
        <div className="card-body">
          <h2 className="card-title">Mint Position</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Token 0 Amount</span>
            </label>
            <input
              type="number"
              title="Token 0 Amount"
              onChange={(e) => setToken0Amount(Number(e.target.value))}
              className="input input-bordered"
              placeholder="Enter Token 0 Amount"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Token 1 Amount</span>
            </label>
            <input
              type="number"
              title="Token 1 Amount"
              onChange={(e) => setToken1Amount(Number(e.target.value))}
              className="input input-bordered"
              placeholder="Enter Token 1 Amount"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">LP Width</span>
            </label>
            <input
              type="number"
              title="LP Width"
              onChange={(e) => setLPWidth(Number(e.target.value))}
              className="input input-bordered"
              placeholder="Enter LP Width"
            />
          </div>
          <button
            onClick={() => write?.()}
            className={`btn btn-primary btn-block ${
              !write || isLoading ? "btn-disabled" : ""
            }`}
          >
            {isLoading ? "Minting..." : "Mint A Position"}
          </button>
          {isSuccess && (
            <div className="alert alert-success mt-4">
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
          {(isPrepareError || isError) && console.log("Error!")}
        </div>
      </div>
    </div>
  );
}
