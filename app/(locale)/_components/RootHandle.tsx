import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollHeader } from "@/components/layout/ScrollHeader";
import { FC } from "react";

type RootHandleProps = {
  children: React.ReactNode;
};

export const RootHandle: FC<RootHandleProps> = ({ children }) => {
  return (
    <>
      <Header />
      <ScrollHeader />
      <div className="">{children}</div>
      <Footer />
    </>
  );
};
