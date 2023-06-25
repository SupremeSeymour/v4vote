"use client";

import { useAccount, useEnsName } from "wagmi";

import { useMemo } from "react";

export function Account() {
  const { address } = useAccount();
  const { data: ensName } = useEnsName({ address });

  const formattedAddress = useMemo(() => {
    if (address) {
      const start = address.slice(0, 6);
      const end = address.slice(-4);
      return `${start} - ${end}`;
    }
    return null;
  }, [address]);

  return (
    <div>
      {ensName ?? formattedAddress}
      {ensName ? ` (${formattedAddress})` : null}
    </div>
  );
}
