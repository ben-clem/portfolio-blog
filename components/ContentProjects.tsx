import * as A from "@anims/index";
import { allProjects, Project } from "@layer/generated";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { FC } from "react";
import { FiChevronRight } from "react-icons/fi";
import { format } from "timeago.js";

allProjects.sort((a, b) => {
  return a.published < b.published ? 1 : -1;
});

const Content: FC<{
  data: Project[];
}> = ({ data }) => {
  const { t } = useTranslation("common");

  return (
    <motion.div
      className="mt-20 pt-5 flex w-full flex-col"
      variants={A.FadeContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={A.Fade} className="mb-5">
        {t("projectsHeader")}
      </motion.h1>
      {data.map((item, index) => (
        <Link
          href={`/projects/${item.slug}`}
          key={index}
          passHref
          locale={false}
        >
          <motion.a
            href={`/project/${item.slug}`}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between cursor-pointer rounded-lg p-5 hover:bg-gray-200 dark:hover:bg-gray-700"
            variants={A.Fade}
          >
            <h1 className="text-xl text-ellipsis whitespace-nowrap overflow-hidden w-11/12 sm:w-2/3 font-medium">
              {typeof item.title === "string" && item.title}
            </h1>
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-600 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-300">
                {format(item.published)}
                {" · "}
                {Math.trunc(item.readingTime.minutes)}
                {" minute read"}
              </p>
              <div className="flex text-white"></div>
            </div>
          </motion.a>
        </Link>
      ))}
      <Link href="/projects" passHref scroll={true}>
        <motion.a
          className="flex items-center text-xl group w-fit mt-5"
          variants={A.Fade}
        >
          {t("projects")}
          <FiChevronRight className="group-hover:translate-x-1 transition-all ml-1 mt-1" />
        </motion.a>
      </Link>
    </motion.div>
  );
};

export const Projects: FC = () => {
  const projects = allProjects.slice(0, 3);

  return <Content data={projects} />;
};
