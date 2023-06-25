import { defineConfig } from '@wagmi/cli'
import { react } from '@wagmi/cli/plugins'
import * as chains from 'wagmi/chains'

import { wagmiV3Vault } from './abis/wagmiV3Vault'
import { mockEth } from './abis/mockEth'
import { mockHog } from './abis/mockHog'
import { centerTick } from './abis/centerTick'

export default defineConfig(() => {
  return {
    out: 'src/generated.ts',
    contracts: [
      {
        abi: wagmiV3Vault,
        name: 'WagmiV3Vault',
        address: {
          [chains.goerli.id]: '0x72557BA3ce9cBFA594069787d2A24D21F6678B3a',
        },
      },
       {
        abi: mockEth,
        name: 'MockEth',
        address: {
          [chains.goerli.id]: '0x6c82C6a018e71dB30FF9FE13579fafc681707f32',
        },
      },
      {
        abi: mockHog,
        name: 'MockHog',
        address: {
          [chains.goerli.id]: '0x58b3541343adf4c920748032bA1425569591406A'
        }
      },
      {
        abi: centerTick,
        name: 'CenterTick',
        address: {
          [chains.goerli.id]: '0x9a75BE84bD636E2F1FA8c14789072f3d71d90EDb'
        }
      }
    ],
    plugins: [react()],
  }
})