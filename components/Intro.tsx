import * as A from "@anims/index";
import Wavy from "@anims/WavyText";
import { motion } from "framer-motion";
import { useKBar } from "kbar";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

const Socials: FC = () => {
  return (
    <motion.div className="flex mt-7" variants={A.FadeContainer}>
      {[
        {
          icon: FiGithub,
          href: "https://github.com/ben-clem",
        },
        {
          icon: FiLinkedin,
          href: "https://linkedin.com/in/benclem",
        },
        {
          icon: FiMail,
          href: "mailto:benoit.clemenceau@mac.com",
        },
        {
          icon: FiPhone,
          href: "tel:+1 (857) 337-8248",
        },
      ].map((link, index) => (
        <Link href={link.href} key={index} passHref>
          <motion.a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="mr-5"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            variants={A.Fade}
            aria-label={link.icon.toString()}
          >
            <link.icon size={22} />
          </motion.a>
        </Link>
      ))}
    </motion.div>
  );
};

const Intro: FC = () => {
  const { t } = useTranslation("common");
  const { query } = useKBar();

  return (
    <motion.div
      className="mt-20 flex items-start"
      variants={A.FadeContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex-1"
        variants={A.FadeContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl text-teal-600 dark:text-teal-600 h-16 w-fit pt-2 "
          variants={A.Fade}
        >
          {t("header")}
        </motion.h1>
        <motion.p
          className="text-gray-900 dark:text-white text-xl mt-3"
          variants={A.Fade}
        >
          {t("tagline")}
        </motion.p>
        <Wavy text={t("bio")} heading="p" className="text-xl mt-5 mr-20" />
        <Socials />
        <motion.p
          className="text-l mr-20 mt-10 pt-5 hidden sm:flex"
          variants={A.Fade}
        >
          {t("tip")}
          <button
            onClick={query.toggle}
            style={{ opacity: 1 }}
            className="mx-2 inline bg-white dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-500 text-gray-600 dark:text-white text-xs leading-5 py-0.5 px-1.5 border border-gray-500 rounded-md"
          >
            <kbd className="font-sans no-underline">⌘</kbd>{" "}
            <kbd className="font-sans">K</kbd>
          </button>{" "}
          {t("navigate")}
        </motion.p>
      </motion.div>
      <motion.div variants={A.Image} className="hidden sm:block">
        <Image
          src="https://avatars.githubusercontent.com/u/37048286?v=4"
          width={150}
          height={150}
          alt="Profile"
          className="rounded-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default Intro;
