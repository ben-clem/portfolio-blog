import * as A from "@anims/index";
import Wavy from "@anims/WavyText";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {
  FiChevronRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
} from "react-icons/fi";

const Socials: FC = () => {
  return (
    <motion.div className="flex sm:mt-7 mt-5" variants={A.FadeContainer}>
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

  return (
    <motion.div
      className="sm:mt-20 mt-10 flex items-start"
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
        <motion.div variants={A.Image} className="self-center sm:hidden mb-10">
          <div className="flex justify-center">
            <Image
              src="https://avatars.githubusercontent.com/u/37048286?v=4"
              width={150}
              height={150}
              alt="Profile"
              className="rounded-full"
            />
          </div>
        </motion.div>
        <motion.h1
          className="sm:text-5xl text-4xl text-teal-600 dark:text-teal-600 w-fit h-fit pt-2 "
          variants={A.Fade}
        >
          {t("header")}
        </motion.h1>
        <motion.p
          className="text-gray-900 dark:text-white sm:text-xl text-lg mt-3"
          variants={A.Fade}
        >
          {t("tagline")}
        </motion.p>
        <Wavy
          text={t("bio")}
          heading="p"
          className="sm:text-xl text-lg sm:mt-5 mt-3 mr-20"
        />

        <Socials />

        <Link href="/about" passHref>
          <motion.a
            className="flex items-center text-xl group w-fit sm:mt-7 mt-5"
            variants={A.Fade}
          >
            {t("about")}
            <FiChevronRight className="group-hover:translate-x-1 transition-all ml-1 mt-1" />
          </motion.a>
        </Link>
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
