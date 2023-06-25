"use client";

import { BaseError } from "viem";
import { useAccount, useConnect, useDisconnect } from "wagmi";

export function Connect() {
  const { connector, isConnected } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div>
      <div className="flex space-x-2">
        {isConnected ? (
          <>
            <button onClick={() => disconnect()} className="btn btn-red">
              Disconnect from {connector?.name}
            </button>
          </>
        ) : (
          <>
            {connectors
              .filter((x) => x.ready && x.id !== connector?.id)
              .map((x) => (
                <button
                  key={x.id}
                  onClick={() => connect({ connector: x })}
                  className="btn btn-blue"
                >
                  {x.name}
                  {isLoading &&
                    x.id === pendingConnector?.id &&
                    " (connecting)"}
                </button>
              ))}
          </>
        )}
      </div>

      {error && <div>{(error as BaseError).shortMessage}</div>}
    </div>
  );
}
