import { Fade, FastFadeContainer } from "@anims/index";
import useWindowDimensions from "@hooks/useWindowDimensions";
import { Project } from "@layer/generated";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { FC, useEffect, useRef } from "react";
import { FiClock, FiEdit2 } from "react-icons/fi";

const Topic: FC<{
  text: string;
}> = ({ text }) => {
  return (
    <motion.button
      className={
        "text-md py-0 px-2 rounded-lg flex justify-center align-center transition-opacity bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
      }
      variants={Fade}
    >
      {text}
    </motion.button>
  );
};

const Post: FC<{ project: Project }> = ({ project }) => {
  const { height, width } = useWindowDimensions();
  const Bar = useRef<HTMLDivElement>(null);

  const listener = () => {
    let dh = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      ),
      wh = height,
      pos =
        pageYOffset ||
        (document.documentElement.clientHeight
          ? document.documentElement.scrollTop
          : document.body.scrollTop),
      bw = (pos / (dh - wh!)) * 100;

    try {
      Bar.current!.style.width = `${bw}%`;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [height, width]);

  return (
    <div className="mt-16">
      <div
        className="fixed top-0 left-0 w-0 h-1 overflow-hidden z-10"
        ref={Bar}
      >
        <div className="w-full h-full absolute bg-teal-600 dark:bg-teal-600" />
      </div>
      <h1 className="text-4xl xl:text-6xl">{project.title}</h1>
      <div className="flex justify-between mt-4">
        <p className="text-lg sm:text-xl flex justify-center items-center text-gray-400">
          {format(Date.parse(project.published), "MMMM yyyy")}
        </p>
        <div className="flex">
          <div className="text-lg sm:text-xl flex justify-center text-gray-400 items-center">
            <FiClock className="mr-2 text-lg sm:text-xl" />
            {Math.trunc(project.readingTime.minutes)}
            {Math.trunc(project.readingTime.minutes) === 1
              ? " minute"
              : " minutes"}
          </div>
          <div className="text-lg sm:text-xl flex items-center text-gray-400 justify-center ml-5">
            <FiEdit2 className="mr-2 text-lg sm:text-xl" />
            {project.wordCount} words
          </div>
        </div>
      </div>
      <motion.div
        variants={FastFadeContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-y-2 gap-x-3 my-2"
      >
        {project.tags.split(", ").map((topic, index) => (
          <Topic text={topic} key={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default Post;
