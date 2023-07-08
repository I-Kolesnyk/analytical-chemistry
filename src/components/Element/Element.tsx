import { FC, ReactNode } from "react";

const Element: FC<{ children: ReactNode }> = ({ children }) => {
  return <span className="font-sans text-xl font-semibold text-emerald-700">{children}</span>;
};

export default Element;
