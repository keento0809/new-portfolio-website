import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import Head from "next/head";
import { FC } from "react";

type RootHandleProps = {
  children: React.ReactNode;
};

export const RootHandle: FC<RootHandleProps> = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="">{children}</div>
      <Footer />
    </>
  );
};
