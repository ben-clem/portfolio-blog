import { FC, ReactNode } from "react";
import Head from "next/head";
import Wrapper from "@components/Wrapper";
import Header from "@components/Header";

const DocPage: FC<{
  title: string;
  description: string;
  heading: string;
  bio: string;
  children: ReactNode;
}> = ({ title, description, heading, bio, children }) => {
  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <Header head={heading} bio={bio} />
      <div className="blog mb-24">{children}</div>
    </Wrapper>
  );
};

export default DocPage;
