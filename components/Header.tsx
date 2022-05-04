import { FC } from "react";
import { motion } from "framer-motion";
import { FadeContainer, Fade } from "@anims/index";

const Header: FC<{ head: string; bio: string; variant?: string }> = ({
  head,
  bio,
  variant = "",
}) => {
  return (
    <motion.div variants={FadeContainer} initial="hidden" animate="visible">
      <motion.h1 className="mt-12 text-5xl" variants={Fade}>
        {head}
      </motion.h1>
      {variant == "mb-2" ? (
        <motion.p className="text-xl mt-5 mb-2" variants={Fade}>
          {bio}
        </motion.p>
      ) : (
        <motion.p className="text-xl mt-5 mb-12" variants={Fade}>
          {bio}
        </motion.p>
      )}
    </motion.div>
  );
};

export default Header;
