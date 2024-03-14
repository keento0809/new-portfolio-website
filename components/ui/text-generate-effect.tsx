"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  delay,
}: {
  words: string;
  className?: string;
  delay?: number;
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  let wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(delay ? delay / 4.5 : 0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div
        ref={scope}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 2, repeat: 0, delay: delay ?? 0 }}
        viewport={{ once: true }}
      >
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
