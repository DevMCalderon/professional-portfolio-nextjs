import LanguageSelector from "./language-selector";
import MobileNavbar from "./mobile-navbar";
import Link from "next/link";
import GoTopButton from "../go-top-button";
import { Button } from "@base-ui/react";
import Image from "next/image";
import ThemeSelector from "./theme-selector";

export default function Navbar() {
  return (
    <header className="w-full">
      <nav
        className="fixed top-0 z-10 w-full py-2 transition-all duration-800 ease-in-out
    before:absolute before:inset-0 before:-z-10
    before:content-['']
    before:transition-opacity before:duration-500
      "
      >
        <div className="max-w-11/12 md:max-w-6xl flex items-center justify-between mx-auto">
          {/* left side: logo */}
          <div>
            <Link href={"/"}>
              <Image
                src={"/images/logo.png"}
                alt="Logo de Samuel Calderón"
                width={48}
                height={48}
              />
            </Link>
          </div>

          {/* central side: navigation links */}
          <ul className="hidden lg:flex items-center gap-8">
            <li>
              <Link href={"/"} className="nav-link">
                Inicio
              </Link>
            </li>
            <li>
              <Link href={"#skills"} className="nav-link">
                Habilidades
              </Link>
            </li>
            <li>
              <Link href={"#projects"} className="nav-link">
                Proyectos
              </Link>
            </li>
            <li>
              <Link href={"#about"} className="nav-link">
                Acerca de mí
              </Link>
            </li>
          </ul>

          {/* right side: language CTA */}
          <div className="flex items-center gap-8">
            <ThemeSelector />
            <LanguageSelector />
            <Button
              nativeButton={false}
              className=" group
              relative
              inline-flex
              items-center
              justify-center
              text-nowrap
              overflow-hidden
              border
              bg-transparent
              px-6
              py-3
              text-base
              font-bold
              border-white
              text-white
              transition-colors
              duration-300
              hover:text-neutral-900

              before:absolute
              before:inset-0
              before:w-0
               before:bg-white
              before:transition-all
              before:duration-300
              before:ease-in-out
              hover:before:w-full"
              render={
                <Link href="#contact">
                  <span className="relative z-10">
                    {"< "}Contáctame{" />"}
                  </span>
                </Link>
              }
            ></Button>
          </div>
        </div>
      </nav>
      <MobileNavbar />
      <GoTopButton />
    </header>
  );
}
