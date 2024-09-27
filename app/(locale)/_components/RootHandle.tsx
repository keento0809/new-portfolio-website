import { Footer } from "@/components/layout/footer/Footer";
import { Header } from "@/components/layout/header/Header";
import { FC } from "react";

type RootHandleProps = {
  children: React.ReactNode;
};

export const RootHandle: FC<RootHandleProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};
