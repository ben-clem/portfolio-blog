import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import DocPage from "@components/HomeMacAgents/DocPage";

const HomeMacAgents: NextPage = () => {
  return (
    <DocPage
      title="Home Mac Agents"
      description="A personal desktop helper on my Mac. Local Cursor and Codex sessions use it to read Google Calendar and Google Tasks."
      heading="Home Mac Agents"
      bio="A desktop helper I run on my own Mac. Local Cursor and Codex sessions use it to read Google Calendar and Google Tasks."
    >
      <p>
        This is not a public product. There is no signup, no website login, and
        no server of mine sitting between the agents and Google.
      </p>
      <h2>What it does</h2>
      <p>
        On this computer, a local CLI talks to Google&apos;s APIs. Cursor and
        Codex call that CLI. Calendar goes through a local MCP server. Tasks go
        through the CLI. OAuth tokens stay in macOS Keychain. The agents never
        receive the tokens.
      </p>
      <p>
        The Google OAuth client is a Desktop app named Home Mac Agents. It
        requests Calendar read-only and Tasks read-only. It cannot send mail,
        change events or tasks, or open Drive, Gmail, or Contacts.
      </p>
      <h2>Privacy</h2>
      <p>
        Read the{" "}
        <Link href="/home-mac-agents/privacy">
          <a>privacy policy</a>
        </Link>
        .
      </p>
      <h2>Operator</h2>
      <p>
        Benoît Clemenceau.{" "}
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

export default HomeMacAgents;
