import type { ReactNode } from "react";
import { Link, useLocation } from "react-router";

type Props = {
  href: string;
  closeMenu: () => void;
  className?: string;
  children?: ReactNode;
};

export const NavLink = ({ href, closeMenu, className, children, ...restOfProps }: Props) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isActive = currentPath === href;

  const activeStyle = isActive ? "border-font-str" : "border-transparent";

  return (
    <Link
      to={href}
      onClick={closeMenu}
      className={`${className} text-font-str border-b-2 transition duration-100 hover:scale-105 ${activeStyle}`}
      {...restOfProps}
    >
      {children}
    </Link>
  );
};
