import { FC } from "react";

import Aside from "../Aside/Aside";

import { layoutProps } from "@/types";

const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <>
      <Aside />
      {children}
    </>
  );
};

export default Layout;
