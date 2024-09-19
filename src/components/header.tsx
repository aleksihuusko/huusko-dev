"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { CodeIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { ContactDialog } from "@/components/contact-dialog";

const navLinks = [
  { href: "#hero", text: "About" },
  { href: "#stats", text: "Stats" },
  { href: "#skills", text: "Skills" },
  { href: "#projects", text: "Projects" },
  { href: "#services", text: "Services" },
];

const NavLink = ({
  href,
  text,
  onClick,
}: {
  href: string;
  text: string | React.ReactNode;
  onClick?: () => void;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = -64;
      const y =
        targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    if (onClick) onClick();
  };

  return (
    <Link
      href={href}
      className="text-sm font-medium transition-colors hover:text-foreground"
      onClick={handleClick}
    >
      {text}
    </Link>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => setIsOpen(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetElement = document.getElementById(hash.substring(1));
        if (targetElement) {
          const yOffset = -96; // 6rem in pixels
          const y =
            targetElement.getBoundingClientRect().top +
            window.scrollY +
            yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <header className="sticky top-0 z-10 h-16 bg-background/60 backdrop-blur-xl">
      <div className="container mx-auto flex h-full items-center justify-between px-[5%]">
        <NavLink
          href="#hero"
          text={
            <span className="flex items-center gap-2">
              <CodeIcon className="h-6 w-6" />
              <span className="font-mono text-sm font-semibold">
                Huusko.dev
              </span>
            </span>
          }
        />
        <nav className="hidden md:flex md:items-center md:gap-5 lg:gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.text} {...link} />
          ))}
        </nav>
        <div className="hidden md:flex md:items-center md:gap-4">
          <ThemeToggle />
          <ContactDialog buttonVariant="outline" />
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <HamburgerMenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <NavLink
                  href="#hero"
                  text={
                    <span className="flex items-center gap-2">
                      <CodeIcon className="h-6 w-6" />
                      <span className="font-mono text-sm font-semibold">
                        Huusko.dev
                      </span>
                    </span>
                  }
                  onClick={closeSheet}
                />
                {navLinks.map((link) => (
                  <NavLink key={link.text} {...link} onClick={closeSheet} />
                ))}

                <ContactDialog />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
