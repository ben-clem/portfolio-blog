import { FC } from "react";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import Link from "next/link";
import * as A from "@anims/index";

import { useKBar } from "kbar";

const Contact: FC = () => {
  const { t } = useTranslation("common");
  const { query } = useKBar();

  return (
    <>
      <div className="flex mt-28 mb-8 p-5 md:p-10 rounded-lg border-gray-200 dark:border-gray-700 border-2">
        <div>
          <h1>{t("contactCardTitle")}</h1>
          <p className="mt-5 text-lg">{t("contactCardContent")}</p>
        </div>

        <motion.div
          className="flex flex-col pt-3 ml-10 border-l border-gray-500 dark:border-gray-200"
          variants={A.FadeContainer}
        >
          {[
            {
              icon: FiMail,
              href: "mailto:benoit.clemenceau@mac.com",
              title: "benoit.clemenceau@mac.com",
            },
            {
              icon: FiPhone,
              href: "tel:+1 (857) 337-8248",
              title: "+1 (857) 337-8248",
            },

            {
              icon: FiLinkedin,
              href: "https://linkedin.com/in/benclem",
              title: "https://linkedin.com/in/benclem",
            },
          ].map((link, index) => (
            <Link href={link.href} key={index} passHref>
              <motion.a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-row ml-10 mb-5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
                variants={A.Fade}
                aria-label={link.icon.toString()}
              >
                <link.icon size={22} />
                <p className="contact">{link.title}</p>
              </motion.a>
            </Link>
          ))}
        </motion.div>
      </div>
      <motion.div className="flex justify-center mb-4">
        <motion.p className="text-sm hidden sm:flex" variants={A.Fade}>
          {t("WIP1")}
          <motion.a
            href="https://github.com/ben-clem/portfolio-blog"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            variants={A.Fade}
          >
            {t("there")}
          </motion.a>
          {t("WIP2")}
          <motion.a
            href="https://github.com/ben-clem/portfolio-blog"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            variants={A.Fade}
          >
            {t("there")}
          </motion.a>
          {t("WIP3")}
          <motion.a
            href="https://github.com/ben-clem/portfolio-blog"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            variants={A.Fade}
          >
            {t("there")}
          </motion.a>
          {t("WIP4")}
        </motion.p>
      </motion.div>

      <motion.div className="flex justify-center mb-32">
        <motion.p className="text-sm hidden sm:flex" variants={A.Fade}>
          {t("tip")}
          <button
            onClick={query.toggle}
            style={{ opacity: 1 }}
            className="mx-1 inline bg-white dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-500 text-gray-600 dark:text-white text-xs leading-5 py-0.7 px-1.5 border border-gray-500 rounded-md"
          >
            <kbd className="font-sans no-underline">⌘</kbd>{" "}
            <kbd className="font-sans">K</kbd>
          </button>{" "}
          {t("navigate")}
        </motion.p>
      </motion.div>
    </>
  );
};

export default Contact;
