"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import ContactDialog from "@/components/contact-dialog";

const links = {
  main: [
    { href: "#about", label: "About" },
    { href: "#solutions", label: "Solutions" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
  ],
};

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background/50 backdrop-blur-2xl">
      <div className="container mx-auto px-[5%]">
        <div className="flex h-12 items-center justify-between md:h-16">
          <div>
            <Link
              href="/"
              className="flex flex-col transition-colors duration-300 hover:text-muted-foreground"
            >
              <span className="md:text-lg">
                Huusko<span className="text-muted-foreground">.dev</span>
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {links.main.map(({ href, label }) => (
                  <NavigationMenuItem key={label}>
                    <Link href={href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden items-center gap-x-2 md:flex">
            <ThemeToggle />
            <ContactDialog>
              <Button variant="outline">Contact</Button>
            </ContactDialog>
          </div>

          {/* Mobile menu */}
          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger>
                <div className="flex flex-col gap-y-1 py-4 pl-4">
                  <div className="h-[0.1rem] w-4 bg-foreground" />
                  <div className="h-[0.1rem] w-4 bg-foreground" />
                </div>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="flex flex-col items-start justify-start"
              >
                <SheetHeader>
                  <SheetTitle className="flex items-center text-base">
                    Huusko<span className="text-muted-foreground">.dev</span>
                  </SheetTitle>
                  <SheetDescription className="!mb-2 text-sm">
                    A creative web developer and designer based in Helsinki,
                    Finland.
                  </SheetDescription>
                  <Badge
                    variant="secondary"
                    className="flex w-fit items-center gap-x-2 text-xs text-muted-foreground"
                  >
                    <div className="size-1.5 animate-pulse rounded-full bg-destructive" />
                    Available for work
                  </Badge>
                </SheetHeader>
                <Separator className="my-2" />
                <div className="flex flex-col items-start justify-start gap-1.5">
                  {links.main.map(({ href, label }) => (
                    <Button
                      key={label}
                      asChild
                      size="lg"
                      variant="link"
                      className="px-0 py-2"
                    >
                      <SheetClose asChild>
                        <Link href={href}>{label}</Link>
                      </SheetClose>
                    </Button>
                  ))}
                </div>
                <SheetFooter className="mt-auto flex w-full flex-row items-center justify-between pb-6">
                  <SheetClose asChild>
                    <ContactDialog>
                      <Button variant="outline">Contact</Button>
                    </ContactDialog>
                  </SheetClose>
                  <ThemeToggle />
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
