import { ScrollHeader } from "@/components/layout/ScrollHeader";
import { FC } from "react";

type RootHandleProps = {
  children: React.ReactNode;
};

export const RootHandle: FC<RootHandleProps> = ({ children }) => {
  return (
    <>
      <ScrollHeader />
      <div className="">{children}</div>
    </>
  );
};
