import { Fade, FadeContainer, FastFadeContainer } from "@anims/index";
import Header from "@components/Header";
import { allBlogs } from "@layer/generated";
import { Blog as BlogProps } from "@layer/generated/types";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

const filter = (query: string) => {
  if (!query) return allBlogs;

  return allBlogs.filter((blog: BlogProps) => {
    const tags = blog.tags.toLowerCase();
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
      className={`text-md py-0 px-2 rounded-lg flex justify-center align-center transition-opacity ${
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

const Post: FC<BlogProps> = ({ slug, title, published, readingTime }) => {
  const date = new Date(published + "T00:00:00Z");
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  return (
    <Link href={`/blog/${slug}`} passHref locale={false}>
      <motion.a variants={Fade}>
        <div className="flex items-center">
          <div
            className="h-32 w-32 flex-none mr-6 bg-cover bg-no-repeat bg-center rounded-2xl ring-gray-100 dark:ring-gray-900 ring hover:ring-offset-8 border-none ring-offset-gray-100 dark:ring-offset-gray-900 hover:ring-gray-900 dark:hover:ring-white transition-all"
            style={{
              backgroundImage: `url("/static/img/thumbnails/blog/${slug}.jpg")`,
            }}
          />
          <div className="flex items-center">
            <div>
              <h1 className="text-3xl mb-2 text-white hover:underline">
                {title}
              </h1>
              <p className="text-lg hover:text-white">
                {format(date, "MMMM dd, yyyy")}
              </p>
              <p className="text-lg hover:text-white">
                {Math.trunc(readingTime.minutes)}
                {" minute read"}
              </p>
            </div>
          </div>
        </div>
      </motion.a>
    </Link>
  );
};

const Blog: FC = () => {
  const [active, setActive] = useState("");
  const filteredPosts = filter(active);
  const { t } = useTranslation("common");

  const tagsSet = new Set();
  allBlogs.forEach((blog) => {
    const tagsStringArr = blog.tags.split(", ");
    tagsStringArr.forEach((tagsString) => {
      tagsSet.add(tagsString);
    });
  });
  const topics: string[] = Array.from(tagsSet).sort() as string[];

  return (
    <motion.div className="w-full" initial="hidden" animate="visible">
      <Header head={t("blogHeader")} bio={t("blogBio")} variant={"mb-2"} />

      {/* <motion.div className="flex flex-row space-x-8 mt-3">
        <Link href="https://dev.to/benclem" passHref>
          <motion.a
            target="_blank"
            className="flex items-center text-xl group w-fit"
            variants={A.Fade}
          >
            dev.to
            <FiChevronRight className="group-hover:translate-x-1 transition-all ml-1 mt-1" />
          </motion.a>
        </Link>
        <Link href="https://benclem.medium.com/" passHref>
          <motion.a
            target="_blank"
            className="flex items-center text-xl group w-fit"
            variants={A.Fade}
          >
            Medium
            <FiChevronRight className="group-hover:translate-x-1 transition-all ml-1 mt-1" />
          </motion.a>
        </Link>
      </motion.div> */}

      <motion.h1 variants={Fade} className="mt-12 text-bold text-2xl">
        {t("filter")}
      </motion.h1>
      <motion.div
        variants={FastFadeContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-y-2 gap-x-3 mt-5"
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
        className="flex gap-10 mt-10"
      >
        {filteredPosts!.map((project, index) => (
          <Post {...project} key={index} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Blog;
