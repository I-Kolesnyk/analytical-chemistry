import { FC } from "react";
import { MainProps } from "@/types";

const MainScreen: FC<MainProps> = ({ children, header }) => {
  return (
    <>
      <main className="float-right w-4/5 h-screen bg-emerald-100">
        <div className="flex flex-col">{children}</div>
      </main>
    </>
  );
};

export default MainScreen;
