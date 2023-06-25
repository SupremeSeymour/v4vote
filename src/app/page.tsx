import { Account } from "../components/Account";
import { Connect } from "../components/Connect";
import { Connected } from "../components/Connected";
import { Approval } from "../components/Approval";

export function Page() {
  return (
    <>
      <h1>V3 Voting</h1>

      <Connect />

      <Connected>
        <Account />
        <hr />
        <hr />
        <Approval />
      </Connected>
    </>
  );
}

export default Page;
