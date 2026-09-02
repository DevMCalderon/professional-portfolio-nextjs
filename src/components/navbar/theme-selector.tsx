"use client";

import { useTheme } from "@wrksz/themes/client";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeSelector() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <Button
      variant="ghost"
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Cambiar tema"
    >
      {resolvedTheme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}
