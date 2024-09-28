import Link from "next/link";
import { cn } from "@/utils/cn";

export const LinkButton = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <Link
      href="/projects"
      className={cn(
        "block mt-2 bg-neutral-950 px-4 py-2 lg:px-6 lg:py-3 border-neutral-500 border rounded-full w-fit text-primary-color text-sm 2xl:text-base cursor-pointer z-50 hover:scale-105 transition-all",
        className
      )}
    >
      {title}
    </Link>
  );
};
