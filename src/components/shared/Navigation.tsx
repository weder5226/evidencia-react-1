import { NavLink } from "@/components/shared/NavLink";
import type { ReactNode } from "react";

type Props = {
  closeMenu: () => void;
  id?: string;
  className?: string;
  children?: ReactNode;
};

export const Navigation = ({ closeMenu, id, className, children, ...restOfProps }: Props) => {
  return (
    <nav id={id} className={className} {...restOfProps}>
      <NavLink closeMenu={closeMenu} className="font-semibold uppercase" href="/">
        Inicio
      </NavLink>
      <NavLink closeMenu={closeMenu} className="font-semibold uppercase" href="/catalogo/">
        Catálogo
      </NavLink>
      <NavLink closeMenu={closeMenu} className="font-semibold uppercase" href="/conocenos/">
        Conócenos
      </NavLink>
      {children}
    </nav>
  );
};
