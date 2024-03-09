import { FC } from "react";
import { RootHandle } from "./RootHandle";

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
