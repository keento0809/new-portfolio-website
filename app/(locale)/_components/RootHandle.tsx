import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FC } from "react";

type RootHandleProps = {
  children: React.ReactNode;
};

export const RootHandle: FC<RootHandleProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="">{children}</div>
      <Footer />
    </>
  );
};
