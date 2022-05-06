import { FC } from "react";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import Link from "next/link";
import * as A from "@anims/index";

import { useKBar } from "kbar";

const Contact: FC<{ variant?: string }> = ({ variant = "mt-28" }) => {
  const { t } = useTranslation("common");
  const { query } = useKBar();

  return (
    <>
      <div
        className={
          "flex sm:flex-row flex-col mb-8 p-5 sm:pb-5 pb-2 md:p-10 rounded-lg border-gray-200 dark:border-gray-700 border-2 " +
          " " +
          variant
        }
      >
        <div>
          <h1>{t("contactCardTitle")}</h1>
          <p className="sm:mt-5 mt-2 text-lg">{t("contactCardContent")}</p>
        </div>

        <motion.div
          className="flex flex-col sm:pt-3 pt-5 sm:ml-10 mt-5 sm:border-l sm:border-t-0 border-t border-gray-500 dark:border-gray-200"
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
                className="flex flex-row sm:ml-10 ml-3 mb-5"
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
      <motion.div className="flex flex-row justify-center mb-4">
        <p className="text-sm">
          {t("WIP1")}
          <motion.a
            href="https://github.com/ben-clem/portfolio-blog"
            target="_blank"
            rel="noreferrer"
            className="text-gray-900 dark:text-white hover:underline underline-offset-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            variants={A.Fade}
          >
            {t("there")}
          </motion.a>
          {t("WIP2")}
          <motion.a
            href="https://github.com/ben-clem/portfolio-blog/blob/master/CHANGELOG.md"
            target="_blank"
            rel="noreferrer"
            className="text-gray-900 dark:text-white hover:underline underline-offset-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            variants={A.Fade}
          >
            {t("there")}
          </motion.a>
          {t("WIP3")}
          <motion.a
            href="https://github.com/ben-clem/portfolio-blog/issues"
            target="_blank"
            rel="noreferrer"
            className="text-gray-900 dark:text-white hover:underline underline-offset-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            variants={A.Fade}
          >
            {t("there")}
          </motion.a>
          {t("WIP4")}
        </p>
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
