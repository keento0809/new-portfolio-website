import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/common/Button";
import { FC } from "react";

type MotionLinkButtonProps = {
  buttonText: string;
  link: string;
};

export const MotionLinkButton: FC<MotionLinkButtonProps> = ({
  buttonText,
  link,
}) => {
  return (
    <motion.div
      className="overflow-hidden pb-2 cursor-pointer"
      initial={{
        width: "0%",
      }}
      whileInView={{
        width: "fit-content",
      }}
      transition={{ duration: 1, ease: "linear", delay: 7 }}
      viewport={{ once: true }}
    >
      <Link href={link} className="h-14 w-28 inline-block cursor-pointer">
        <Button buttonText={buttonText} />
      </Link>
    </motion.div>
  );
};
