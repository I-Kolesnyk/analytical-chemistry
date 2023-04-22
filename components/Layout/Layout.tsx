import { FC } from "react";

import GroupHeader from "../Header/GroupHeader";
import Aside from "../Aside/Aside";

import { layoutProps } from "@/types";

const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <>
      <GroupHeader />
      <main>
        <Aside />
        {children}
      </main>
    </>
  );
};

export default Layout;
