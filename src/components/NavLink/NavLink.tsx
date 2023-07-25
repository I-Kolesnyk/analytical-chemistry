import { FC } from "react";
import Link from "next/link";

import { LinkProps } from "@/types";

const NavLink: FC<LinkProps> = ({ path, children }) => {
  return <Link href={path}>{children}</Link>;
};

export default NavLink;
