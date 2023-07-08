import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { LinkProps } from "@/types";

const HeaderNavLink: FC<LinkProps> = ({ path, children }) => {
  const currentRoute = usePathname();
  console.log(currentRoute, path);
  const linkStyles =
    "text-emerald-200 w-60 p-3 border-solid border-2 border-emerald-200 shadow-lg rounded-md text-xl text-center hover:bg-emerald-700 focus:bg-emerald-700";
  const isActive = currentRoute === path;
  const activeStyle = isActive ? "bg-emerald-700" : "";

  return (
    <Link href={path} legacyBehavior>
      <a className={`${linkStyles} ${activeStyle}`}>{children}</a>
    </Link>
  );
};

export default HeaderNavLink;
