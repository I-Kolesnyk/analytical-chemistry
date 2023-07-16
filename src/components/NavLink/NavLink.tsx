import { FC } from "react";
import Link from "next/link";

import { LinkProps } from "@/types";

const NavLink: FC<LinkProps> = ({ path, children }) => {
  return (
    <Link
      href={path}
      className="flex justify-between w-[186px]"
    >
      {children}
    </Link>
  );
};

export default NavLink;
