import { FC, ReactNode, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Nav/Nav";
import BackToTop from "./Top";
import NextLink from "next/link";

export const meta = {
  root: "https://benclem.dev",
  title: "Benoît Clemenceau | benclem.dev",
  description:
    "Graduate student at Boston University, MS in CIS, looking for a Software Engineer OPT",
  image: "/banner-linkedin-photo-bg-name.png",
  type: "website",
};

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋🏼</text></svg>"
        />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`${meta.root}${router.asPath}`} />
        <link rel="canonical" href={`${meta.root}${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta
          property="og:site_name"
          content="Benoît Clemenceau | benclem.dev"
        />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ben_clem_" />
        <meta name="theme-color" content="#FF70C6" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <NextLink href={"/"} passHref>
        <a
          className="absolute sm:fixed sm:w-32 w-64 left-0 right-0 text-lg transition-all
          text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-50
          inline-block sm:hidden xl:inline-block
          text-center xl:text-left
          mt-0 sm:mt-10
          ml-auto mr-auto sm:ml-10
          top-[3.2rem] sm:top-0"
        >
          benclem.dev
        </a>
      </NextLink>
      <div className="flex flex-col items-center">
        <div className="2xl:w-[53rem] xl:w-[53rem] lg:w-[53rem] md:w-[44rem] sm:w-[93%] w-[93%] mt-10">
          <Navbar navOpen={open} setNavOpen={setOpen} />
          {!open && <main id="main">{children}</main>}
          {/* <Footer /> */}
          <BackToTop />
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
