import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import DocPage from "@components/HomeMacAgents/DocPage";

const HomeMacAgentsPrivacy: NextPage = () => {
  return (
    <DocPage
      title="Privacy policy | Home Mac Agents"
      description="Home Mac Agents reads Google Calendar and Google Tasks on my Mac. Tokens stay in Keychain. Event and task text reach Google APIs and the model provider for that session."
      heading="Privacy policy"
      bio="How Home Mac Agents uses Google Calendar and Google Tasks on this Mac."
    >
      <p>Last updated 5 September 2026.</p>
      <p>
        Home Mac Agents is a personal desktop helper on my Mac. It is not
        offered to other people. The app page is{" "}
        <Link href="/home-mac-agents">
          <a>/home-mac-agents</a>
        </Link>
        .
      </p>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-2">
        Data it can read
      </h2>
      <p>With my Google account consent, it can read:</p>
      <ul>
        <li>Google Calendar events, read-only</li>
        <li>Google Tasks lists and tasks, read-only</li>
      </ul>
      <p>
        It cannot send mail, create or edit Calendar events or Tasks, or access
        Drive, Gmail, or Contacts.
      </p>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-2">
        Where that data goes
      </h2>
      <p>
        OAuth tokens stay in macOS Keychain on this computer. The local agents
        do not receive those tokens.
      </p>
      <p>
        When I ask a local Cursor or Codex session about my calendar or tasks,
        titles, times, and task text go to Google&apos;s APIs, then into that
        session so the model can answer. I do not run a backend that stores this
        data.
      </p>
      <p>I do not sell it. I do not share it with advertisers.</p>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-2">
        Contact
      </h2>
      <p>
        Questions:{" "}
        <a href="mailto:benoit.clemenceau@mac.com">
          benoit.clemenceau@mac.com
        </a>
        .
      </p>
    </DocPage>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ["common"])),
  },
});

export default HomeMacAgentsPrivacy;
