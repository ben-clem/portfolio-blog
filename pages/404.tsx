import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, NextPage } from "next";
import { allInfos } from "@layer/generated";
import Wrapper from "@components/Wrapper";
import { useTranslation } from "next-i18next";
import Header from "@components/Header";
import Contact from "@components/Contact";
import Link from "next/link";

const About: NextPage = () => {
  const { t } = useTranslation("common");

  return (
    <Wrapper>
      <h1 className="mt-20 mb-2 text-5xl">{t("lost")}</h1>
      <div className="blog flex flex-row items-center">
        <h1 className="mt-5 mb-8 text-8xl">{t("lostIcon")}</h1>
        <p className="m-5">
          {t("broken")}
          <Link href="https://github.com/ben-clem/portfolio-blog/issues">
            https://github.com/ben-clem/portfolio-blog/issues
          </Link>
          .
        </p>
      </div>
      <Contact variant="mt-10" />
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: { ...(await serverSideTranslations(locale!, ["common"])) },
  };
};

export default About;
