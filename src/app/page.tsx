import { Account } from "../components/Account";
import { Connect } from "../components/Connect";
import { Connected } from "../components/Connected";
import { Approval } from "../components/Approval";
import { NetworkSwitcher } from "../components/NetworkSwitcher";
import Link from "next/link";
import { MintETH } from "../components/TokenMint";
import { MintHog } from "../components/TokenMintHog";
import { ProposalPower } from "../components/ProposalPower";

export function Page() {
  return (
    <>
      <nav className="daisy-navbar bg-base-200 px-4 py-3 flex justify-between items-center shadow-lg">
        <div className="daisy-navbar-start">
          <h1 className="text-xl text-base-content ml-2 whitespace-nowrap">
            V3 Voting
          </h1>
        </div>
        <div className="daisy-navbar-center hidden lg:flex">
          <ul className="daisy-menu daisy-menu-horizontal p-0 flex justify-center items-center">
            <li className="mr-6">
              <Link
                className="text-base-content btn"
                href="http://localhost:3000/proposals"
              >
                Proposal
              </Link>
            </li>
            <li className="mr-6">
              <Link
                className="text-base-content btn"
                href="http://localhost:3000/vaults"
              >
                Stake
              </Link>
            </li>
            <li className="mr-6">
              <Link
                className="text-base-content btn"
                href="http://localhost:3000/voters"
              >
                Voter
              </Link>
            </li>
          </ul>
        </div>
        <div className="daisy-navbar-end flex items-center">
          <Account />
          <Connect />
          <NetworkSwitcher />
        </div>
      </nav>

      <Connected>
        <div className="flex flex-col items-center space-y-4">
          <div className="w-full">
            <Approval />
            <ProposalPower />
          </div>
        </div>
      </Connected>
    </>
  );
}

export default Page;
