import { FC } from "react";

import HeaderNavLink from "../HeaderNavLink/HeaderNavLink";
import { GroupHeaderProps } from "@/types";

const GroupHeader: FC<GroupHeaderProps> = ({ path1, path2, path3 }) => {
  return (
    <header className=" pt-7 pb-7 bg-emerald-600">
      <nav className="flex gap-8 pl-14">
        <HeaderNavLink path={path1}>
          <p>Загальна інформація</p>
        </HeaderNavLink>
        <HeaderNavLink path={path2}>
          <p>Групові реагенти</p>
        </HeaderNavLink>
        <HeaderNavLink path={path3}>
          <p>Хід аналізу</p>
        </HeaderNavLink>
      </nav>
    </header>
  );
};

export default GroupHeader;
