import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import LanguageSelector from "./language-selector";
import MobileNavbar from "./mobile-navbar";
import Link from "next/link";
import GoTopButton from "../go-top-button";

export default function Navbar() {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          {/* start of navigation links */}
          {/* left side - imagen logo */}
          <NavigationMenuItem>
            <NavigationMenuLink render={<Link href="/" />}>
              ImagenLogo
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* central navigation links */}
          {/* Home */}
          <NavigationMenuItem>
            <NavigationMenuLink render={<Link href="/" />}>
              Inicio
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Skills */}
          <NavigationMenuItem>
            <NavigationMenuLink render={<Link href="#skills" />}>
              Habilidades
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Projects */}
          <NavigationMenuItem>
            <NavigationMenuLink render={<Link href="#projects" />}>
              Proyectos
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* About me */}
          <NavigationMenuItem>
            <NavigationMenuLink render={<Link href="#about" />}>
              Acerca de mí
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* right side */}
          {/* language selector */}
          <NavigationMenuItem>
            <LanguageSelector />
          </NavigationMenuItem>

          {/* contact me button */}
          <NavigationMenuItem>
            <NavigationMenuLink render={<Link href="#contact" />}>
              Contáctame
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* end of navigation links */}
        </NavigationMenuList>
      </NavigationMenu>

      <MobileNavbar />
      <GoTopButton />
    </>
  );
}
