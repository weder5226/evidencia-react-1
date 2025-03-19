import { Navigation } from "@/components/shared/Navigation";
import { CloseIcon } from "@/icons/CloseIcon";
import { MenuIcon } from "@/icons/MenuIcon";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { LogoIcon } from "@/icons/LogoIcon";
import { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (isOpen: boolean) => {
    setMenuOpen(isOpen);
  };

  return (
    <>
      <Navigation
        closeMenu={() => toggleMenu(false)}
        id="header-menu"
        className={`fixed inset-0 z-20 flex h-dvh w-full flex-col items-center justify-center gap-10 bg-gray-500/90 text-lg backdrop-blur-md transition-transform duration-300 ${menuOpen ? "translate-y-0" : "-translate-y-full"} md:hidden`}
      >
        <button
          onClick={() => toggleMenu(false)}
          className="absolute top-6 right-6"
          aria-label="Cerrar Menu"
        >
          <CloseIcon className="size-6 stroke-2 transition duration-75 hover:scale-75" />
        </button>
      </Navigation>

      <header id="header-nav" className="bg-header sticky top-0 z-10 w-full backdrop-blur-sm">
        <div className="container mx-auto grid h-16 max-w-[1200px] grid-cols-3 items-center justify-items-center px-5 md:h-20 md:grid-cols-5">
          <button
            onClick={() => toggleMenu(true)}
            className="justify-self-start md:hidden"
            aria-label="Abrir menú"
          >
            <MenuIcon className="size-9" />
          </button>
          <span className="md:justify-self-start">
            <LogoIcon className="text-logo h-11" aria-label="Logo de la empresa" />
          </span>
          <Navigation
            closeMenu={() => toggleMenu(false)}
            className="hidden justify-self-center text-base md:col-span-3 md:flex md:h-[initial] md:translate-y-[initial] md:flex-row md:items-center md:justify-center md:gap-10 md:text-lg"
          />
          <ThemeToggle className="justify-self-end" />
        </div>
        <div id="progress-bar" className="bg-secondary mx-auto h-[4px] w-full"></div>
      </header>
    </>
  );
};
