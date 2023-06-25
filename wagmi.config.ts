import { defineConfig } from '@wagmi/cli'
import { react } from '@wagmi/cli/plugins'
import * as chains from 'wagmi/chains'

import { wagmiV3Vault } from './abis/wagmiV3Vault'
import { mockEth } from './abis/mockEth'
import { mockHog } from './abis/mockHog'
import { centerTick } from './abis/centerTick'
import { proposalMaker } from './abis/proposalMaker'
import { wagmiV3Other } from './abis/wagmiV3Other'
import { quereyVotingPower } from './abis/quereyVotingPower'

export default defineConfig(() => {
  return {
    out: 'src/generated.ts',
    contracts: [
      {
        abi: wagmiV3Vault,
        name: 'WagmiV3Vault',
        address: {
          [chains.arbitrumGoerli.id]: '0x66a6eD42FEB017788F271006515BF29f4ec58319',
        },
      },
       {
        abi: mockEth,
        name: 'MockEth',
        address: {
          [chains.arbitrumGoerli.id]: '0x865782BE8B791A8C11D174Da06D60Fa32828459C',
          [chains.polygonMumbai.id]: '0x65dbc1F05bF843032c26355f42a6E9a703c75885',
        },
      },
      {
        abi: mockHog,
        name: 'MockHog',
        address: {
          [chains.arbitrumGoerli.id]: '0x3cA0BDc410F58d04564C07ecD7f9A994F012e04b',
          [chains.polygonMumbai.id]: '0x963C7950B97e2ce301Eb49Fb1928aA5C7fe8e8eC',
        }
      },
      {
        abi: centerTick,
        name: 'CenterTick',
        address: {
          [chains.arbitrumGoerli.id]: '0xa74cd5e13431FF7969F5b8770fC121768b14607e',
          [chains.polygonMumbai.id]: '0x90c4B83eBD7064e3548498F8DB43E9d66467a2c7',
        }
      },
      {
        abi: proposalMaker,
        name: 'ProposalMaker',
        address: {
          [chains.arbitrumGoerli.id]: '0x2bb36CBeb88b5dD8eadBEe0e1811C0f5B2EfC721',
        }
      },
      {
        abi: wagmiV3Other,
        name: 'WagmiV3Other',
        address: {
          [chains.polygonMumbai.id]: '0x2218aa64910Ba98c19Ce14b327399a026C3b24FC',
        }
      },
      {
        abi: quereyVotingPower,
        name: 'QuereyVotingPower',
        address: {
          [chains.arbitrumGoerli.id]: '0xf1440B27d1Ad75212F8E3C4dB213c74Be596a6F2',
        }
      }
    ],
    plugins: [react()],
  }
})