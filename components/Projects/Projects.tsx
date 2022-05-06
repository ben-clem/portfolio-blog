import Header from "@components/Header";
import { format } from "date-fns";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Project as ProjectProps } from "@layer/generated/types";
import { allProjects } from "@layer/generated";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { FastFadeContainer, FadeContainer, Fade } from "@anims/index";

allProjects.sort((a, b) => {
  return a.published < b.published ? 1 : -1;
});

const filter = (query: string) => {
  if (!query) return allProjects;

  return allProjects.filter((project: ProjectProps) => {
    const tags = project.tags.toLowerCase();
    return tags.includes(query.toLowerCase());
  });
};

const Topic: FC<{
  text: string;
  activeTag: string;
  setActiveTag: Dispatch<SetStateAction<string>>;
}> = ({ text, activeTag, setActiveTag }) => {
  const [active, setActive] = useState(activeTag === text);

  useEffect(() => {
    if (activeTag === text) setActive(true);
    else setActive(false);
  }, [setActive, activeTag, text]);

  return (
    <motion.button
      className={`text-md p-1 rounded-full flex justify-center align-center transition-all ${
        active
          ? "bg-gray-900 dark:bg-gray-100 hover:bg-gray-700 dark:hover:bg-gray-300 text-gray-100 dark:text-gray-900"
          : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
      }`}
      onClick={() => (active ? setActiveTag("") : setActiveTag(text))}
      variants={Fade}
    >
      {text}
    </motion.button>
  );
};

const Post: FC<ProjectProps> = ({
  slug,
  title,
  tags,
  published,
  readingTime,
}) => {
  return (
    <Link href={`/projects/${slug}`} passHref locale={false}>
      <motion.a className={tags} variants={Fade}>
        <div
          className="h-64 bg-cover bg-no-repeat bg-center rounded-2xl ring-gray-100 dark:ring-gray-900 ring hover:ring-offset-8 border-none ring-offset-gray-100 dark:ring-offset-gray-900 hover:ring-gray-900 dark:hover:ring-white transition-all"
          style={{ backgroundImage: `url("/static/img/thumbnails/projects/${slug}.jpg")` }}
        />
        <h1 className="text-2xl mt-5 text-white text-center hover:underline">
          {title}
        </h1>
        <p className="text-md mt-2 text-center hover:text-white">
          {format(Date.parse(published), "MMMM yyyy")}
          {" · "}
          {Math.trunc(readingTime.minutes)}
          {" minute read"}
        </p>
      </motion.a>
    </Link>
  );
};

const Projects: FC = () => {
  const topics = [
    "Apollo GraphQL",
    "Chakra UI",
    "Create React App",
    "Dex",
    "Emotion",
    "Express",
    "FilePond",
    "Formik",
    "GraphQL",
    "JavaScript",
    "LevelDB",
    "Material UI",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "React",
    "React Router",
    "Socket.IO",
    "SuperTest",
    "TypeGraphQL",
    "TypeORM",
    "TypeScript",
    "urql",
  ];
  const [active, setActive] = useState("");
  const filteredPosts = filter(active);

  const { t } = useTranslation("common");

  return (
    <motion.div className="w-full" initial="hidden" animate="visible">
      <Header head={t("projectHeader")} bio={t("projectBio")} />
      <motion.h1 variants={Fade} className="mt-6 text-bold text-2xl">
        Filter by tag
      </motion.h1>
      <motion.div
        variants={FastFadeContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-rows-auto grid-cols-2 sm:grid-cols-6 gap-2 mt-5"
      >
        {topics.map((topic, index) => (
          <Topic
            text={topic}
            activeTag={active}
            setActiveTag={setActive}
            key={index}
          />
        ))}
      </motion.div>
      <motion.div
        variants={FadeContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-rows-auto sm:grid-cols-3 gap-10 mt-10"
      >
        {filteredPosts!.map((project, index) => (
          <Post {...project} key={index} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
