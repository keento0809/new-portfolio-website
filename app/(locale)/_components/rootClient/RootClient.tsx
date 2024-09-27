import { FC } from "react";
import { RootHandle } from "./_components/rootHandle/RootHandle";

type RootClientProps = {
  children: React.ReactNode;
};

export const RootClient: FC<RootClientProps> = ({ children }) => {
  return (
    <div>
      <RootHandle>{children}</RootHandle>
    </div>
  );
};
