import { cn } from "@/utils/cn";

export const Divider = ({ className }: { className?: string }) => {
  return <div className={cn("h-[14px] w-[1px] bg-white", className)} />;
};
