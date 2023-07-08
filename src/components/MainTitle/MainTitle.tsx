import { FC } from "react";

import { MainTitleProps } from "@/types";

const MainTitle: FC<MainTitleProps> = ({ text }) => {
  return <h1 className="font-sans text-4xl font-semibold text-zinc-700">{text}</h1>;
};

export default MainTitle;
