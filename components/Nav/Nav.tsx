import NextLink from "next/link";
import { NextRouter, useRouter } from "next/router";
import { TFunction, useTranslation } from "next-i18next";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { FiGlobe } from "react-icons/fi";
import { useSpring, animated } from "react-spring";
import { AnimatePresence, motion } from "framer-motion";
import * as A from "@anims/index";
import { useDetectClickOutside } from "react-detect-click-outside";
import { useTheme } from "next-themes";
import Link from "next/link";
import { meta } from "../Wrapper";

const NavItem: FC<{ href: string; text: string; router: NextRouter }> = ({
  href,
  text,
  router,
}) => {
  const isActive = router.asPath === (href === "/home" ? "/" : href);

  return (
    <NextLink href={href === "/home" ? "/" : href} passHref>
      <a
        className={`${
          isActive
            ? "font-semibold text-gray-800 dark:text-gray-200"
            : "font-normal text-gray-600 dark:text-gray-400"
        } sm:inline-block rounded-lg hover:text-gray-900 dark:hover:text-gray-50 transition-all text-lg mr-8 hidden`}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
};

const Toggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const properties = {
    sun: {
      r: 9,
      transform: "rotate(40deg)",
      cx: 12,
      cy: 4,
      opacity: 0,
    },
    moon: {
      r: 5,
      transform: "rotate(90deg)",
      cx: 30,
      cy: 0,
      opacity: 1,
    },
    springConfig: { mass: 4, tension: 250, friction: 35 },
  };
  const { r, transform, cx, cy, opacity } =
    theme === "dark" ? properties["moon"] : properties["sun"];
  const svgContainerProps = useSpring({
    transform,
    config: properties.springConfig,
  });
  const centerCircleProps: any = useSpring({
    r,
    config: properties.springConfig,
  });
  const maskedCircleProps: any = useSpring({
    cx,
    cy,
    config: properties.springConfig,
  });
  const linesProps = useSpring({ opacity, config: properties.springConfig });

  return (
    <motion.div
      className="h-6 text-gray-500 dark:hover:text-white"
      variants={A.Image}
    >
      <animated.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ ...svgContainerProps, cursor: "pointer" }}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <mask id="mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <animated.circle
            style={maskedCircleProps}
            cx="12"
            cy="4"
            r="9"
            fill="black"
          />
        </mask>
        <animated.circle
          style={centerCircleProps}
          fill="currentColor"
          cx="12"
          cy="12"
          r="9"
          mask="url(#mask)"
        />

        <animated.g style={linesProps} fill="currentColor">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </animated.g>
      </animated.svg>
    </motion.div>
  );
};

const LanguageMenu: FC<{
  show: boolean;
  // @ts-ignore
  t: TFunction<"common", undefined>;
  router: NextRouter;
}> = ({ show, t, router }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="absolute mt-10 text-lg bg-gray-200 dark:bg-gray-800 px-3 py-5 rounded flex flex-col border-solid border-2 border-gray-300 dark:border-gray-500 select-none z-10"
          variants={A.LanguageMenu}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Link
            href={`${meta.root}/en/${router.asPath}`}
            passHref
            locale={false}
          >
            <motion.a variants={A.Fade}>English</motion.a>
          </Link>
          <Link
            href={`${meta.root}/fr/${router.asPath}`}
            passHref
            locale={false}
          >
            <motion.a variants={A.Fade}>Français</motion.a>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar: FC<{
  navOpen: boolean;
  setNavOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ navOpen, setNavOpen }) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [open, setOpen] = useState(false);
  /* const links = ["home", "projects", "blog", "about"]; */
  const links = ["home", "projects", "blog"];
  const boundary = useDetectClickOutside({ onTriggered: () => setOpen(false) });

  return (
    <nav className="flex justify-between items-center w-full">
      <div className="z-20">
        <Hamburger open={navOpen} setOpen={setNavOpen} />
        {links.map((link, index) => (
          <NavItem
            href={`/${link}`}
            text={t(link)}
            router={router}
            key={index}
          />
        ))}
      </div>
      <div className="flex items-center z-20">
        <div
          className="bg-none border-none flex flex-col items-center"
          ref={boundary}
        >
          <FiGlobe
            className="text-gray-500 dark:hover:text-white transition-colors hover:cursor-pointer mx-3"
            size={24}
            onClick={() => setOpen((o) => !o)}
          />
          <LanguageMenu show={open} t={t} router={router} />
        </div>
        <Toggle />
      </div>
      <AnimatePresence>
        {navOpen && <MobileMenu links={links} t={t} />}
      </AnimatePresence>
    </nav>
  );
};

const MobileMenu: FC<{ links: string[]; t: TFunction }> = ({ links, t }) => {
  console.log(links);
  return (
    <motion.div
      className="absolute bg-gray-100 dark:bg-gray-900 w-screen h-screen top-0 left-0 z-10"
      variants={A.FastFadeContainer}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div className="mt-32 ml-8 flex flex-col">
        {links.map((link, index) => (
          <Link
            href={
              link.toLowerCase() === "home" ? "/" : "/" + link.toLowerCase()
            }
            key={index}
            passHref
          >
            <motion.a
              className="list-none text-xl my-3 w-fit"
              variants={A.FadeSideways}
            >
              {t(link)}
            </motion.a>
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
};

const Hamburger: FC<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ open, setOpen }) => {
  return (
    <svg
      className={`${open && "active"} ham hamRotate ham8 visible sm:hidden`}
      viewBox="0 0 100 100"
      width="50"
      onClick={() => setOpen((open) => !open)}
    >
      <path
        className="line top"
        d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
      />
      <path className="line middle" d="m 30,50 h 40" />
      <path
        className="line bottom"
        d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
      />
    </svg>
  );
};

export default Navbar;
