"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { EyeNoneIcon, EyeOpenIcon } from "@radix-ui/react-icons";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <EyeOpenIcon className="h-4 w-4 dark:hidden" />
      <EyeNoneIcon className="hidden h-4 w-4 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
