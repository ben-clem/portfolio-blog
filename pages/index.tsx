import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Intro from "@components/Intro";
import Wrapper from "@components/Wrapper";
import { Blogs } from "@components/ContentBlogs";
import { Projects } from "@components/ContentProjects";
import Contact from "@components/Contact";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Intro />
      <Projects />
      <Blogs />
      <Contact />
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ["common"])),
  },
});

export default Home;
