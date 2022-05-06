import { Fade, FadeContainer } from "@anims/index";
import Contact from "@components/Contact";
import components from "@components/MDX";
import Wrapper from "@components/Wrapper";
import { allInfos } from "@layer/generated";
import { motion } from "framer-motion";
import { GetStaticProps, NextPage } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Components from "../components/MDX";

const About: NextPage<{ about: { body: { code: string } } }> = ({ about }) => {
  const Component = useMDXComponent(about.body.code);
  const { t } = useTranslation("common");

  return (
    <Wrapper>
      <motion.div variants={FadeContainer} initial="hidden" animate="visible">
        <motion.div className="flex justify-between items-end">
          <motion.h1 className="mt-12 text-5xl" variants={Fade}>
            {t("aboutHeader")}
          </motion.h1>
          <div className="hidden sm:block">
            <Components.Download></Components.Download>
          </div>
        </motion.div>
      </motion.div>
      <div className="flex sm:hidden mt-10 justify-center">
        <Components.Download></Components.Download>
      </div>
      <motion.p className="text-lg mt-10" variants={Fade}>
        {t("aboutBio")}
      </motion.p>

      <div className="blog">
        <Component components={components} />
      </div>
      <Contact />
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const about = allInfos.find(
    (page: { slug: string }) => page.slug === `about-${locale}`
  )!;

  return {
    props: { about, ...(await serverSideTranslations(locale!, ["common"])) },
  };
};

export default About;
