import { FC } from "react";

import GroupHeader from "../Header/GroupHeader";
import Aside from "../Aside/Aside";

import { layoutProps } from "@/types";

const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <>
      <Aside />
      <GroupHeader />
      <main className="clear-right w-4/5">{children}</main>
    </>
  );
};

export default Layout;
