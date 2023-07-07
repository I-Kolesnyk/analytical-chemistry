import { FC } from "react";

import NavLink from "../NavLink";
import { GroupHeaderProps } from "@/types";

const GroupHeader: FC<GroupHeaderProps> = ({ path1, path2, path3 }) => {
  return (
    <header className="pt-7 pb-7 bg-emerald-600">
      <nav className="flex gap-6">
        <NavLink path={path1}>
          <p>Загальна інформація</p>
        </NavLink>
        <NavLink path={path2}>
          <p>Групові реагенти</p>
        </NavLink>
        <NavLink path={path3}>
          <p>Хід аналізу</p>
        </NavLink>
      </nav>
    </header>
  );
};

export default GroupHeader;
