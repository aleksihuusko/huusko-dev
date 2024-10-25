"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
        <motion.div
          className="flex h-12 items-center justify-between md:h-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href="/"
              className="flex flex-col transition-colors duration-300 hover:text-muted-foreground"
            >
              <span className="md:text-lg">
                Huusko<span className="text-muted-foreground">.dev</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop menu */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <NavigationMenu>
              <NavigationMenuList>
                {links.main.map(({ href, label }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
                  >
                    <NavigationMenuItem>
                      <Link href={href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          {label}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </motion.div>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </motion.div>

          <motion.div
            className="hidden items-center gap-x-2 md:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ThemeToggle />
            <ContactDialog>
              <Button variant="outline">Contact</Button>
            </ContactDialog>
          </motion.div>

          {/* Mobile menu */}
          <motion.div
            className="flex md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
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
                <SheetFooter className="mt-auto flex w-full flex-row items-center justify-between">
                  <ContactDialog>
                    <Button variant="outline">Contact</Button>
                  </ContactDialog>
                  <ThemeToggle />
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </motion.div>
        </motion.div>
      </div>
    </nav>
  );
}
