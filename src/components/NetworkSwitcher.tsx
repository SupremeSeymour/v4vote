"use client";

import { BaseError } from "viem";
import { useNetwork, useSwitchNetwork } from "wagmi";

export function NetworkSwitcher() {
  const { chain } = useNetwork();
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();

  return (
    <>
      <div>
        Connected to {chain?.name ?? chain?.id}
        {chain?.unsupported && " (unsupported)"}
      </div>

      {switchNetwork && (
        <div className="relative">
          <select
            value={chain?.id}
            onChange={(e) => switchNetwork(Number(e.target.value))}
            className="appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-blue-500"
          >
            {chains.map((x) =>
              x.id === chain?.id ? null : (
                <option key={x.id} value={x.id}>
                  {x.name}
                  {isLoading && x.id === pendingChainId && " (switching)"}
                </option>
              )
            )}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M11 6L9 8 5 4 3 6l6 6 6-6z" />
            </svg>
          </div>
        </div>
      )}

      {error && <div>{(error as BaseError).message}</div>}
    </>
  );
}
