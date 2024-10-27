"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { EyeNoneIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon">
        <Skeleton className="size-5 rounded-full" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="bg-transparent"
    >
      <EyeOpenIcon className="!size-3.5 dark:hidden" />
      <EyeNoneIcon className="hidden !size-3.5 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
