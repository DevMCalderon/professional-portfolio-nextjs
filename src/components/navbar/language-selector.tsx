"use client";

import { Check, Languages } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

import { setLocale } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const locales = [
  { value: "es", label: "Español" },
  { value: "en", label: "English" },
] as const;

type Locale = (typeof locales)[number]["value"];

export default function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();

  async function handleLocaleChange(newLocale: Locale) {
    if (newLocale === locale) return;

    await setLocale(newLocale);
    router.refresh();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label="Seleccionar idioma"
            className={"text-foreground hover:text-primary"}
          >
            <Languages />
          </Button>
        }
      />

      <DropdownMenuContent align="end">
        {locales.map((item) => (
          <DropdownMenuItem
            key={item.value}
            onClick={() => handleLocaleChange(item.value)}
          >
            {item.label}

            {locale === item.value && <Check className="ml-auto" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
