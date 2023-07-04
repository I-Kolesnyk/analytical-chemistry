import { FC } from "react";
import Link from "next/link";

import { LinkTypes } from "@/types";

const NavLink: FC<LinkTypes> = ({ path, children }) => {
  return <Link href={path}>{children}</Link>;
};

export default NavLink;
