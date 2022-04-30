import { FC } from "react";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import Link from "next/link";
import * as A from "@anims/index";

const Contact: FC = () => {
  const { t } = useTranslation("common");

  return (
    <div className="flex mt-28 mb-56 p-5 md:p-10 rounded-lg border-gray-200 dark:border-gray-700 border-2">
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
            title: "benoit.clemenceau@mac.com"
          },
          {
            icon: FiPhone,
            href: "tel:+1 (857) 337-8248",
            title: "+1 (857) 337-8248"
          },

          {
            icon: FiLinkedin,
            href: "https://linkedin.com/in/benclem",
            title: "https://linkedin.com/in/benclem"
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
              <p className="ml-3 underline text-sky-600 hover:text-sky-800">
                {link.title}
              </p>
            </motion.a>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default Contact;
