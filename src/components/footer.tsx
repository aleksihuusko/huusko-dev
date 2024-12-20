"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/contact-dialog";
import { Badge } from "@/components/ui/badge";
import { Clock } from "@/components/clock";
import FadeIn from "@/components/fade-in";

const links: {
  main: Array<{ href: string; label: string }>;
  projects: Array<{ href: string; label: string }>;
  socials: Array<{
    href: string;
    label: string;
    icon: React.ForwardRefExoticComponent<
      IconProps & React.RefAttributes<SVGSVGElement>
    >;
  }>;
  navigation: Array<{ href: string; label: string }>;
} = {
  main: [
    { href: "#about", label: "About" },
    { href: "#solutions", label: "Solutions" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
  ],
  projects: [
    { href: "https://markit-resources.vercel.app/", label: "Markit" },
    { href: "https://beamsoft.vercel.app/", label: "Beamsoft" },
  ],
  socials: [
    {
      href: "https://www.linkedin.com/in/aleksihuusko/",
      label: "LinkedIn",
      icon: LinkedInLogoIcon,
    },
    {
      href: "https://github.com/aleksihuusko",
      label: "GitHub",
      icon: GitHubLogoIcon,
    },
    {
      href: "https://x.com/aleksihuusko",
      label: "Twitter (X)",
      icon: TwitterLogoIcon,
    },
    {
      href: "https://www.instagram.com/aleksihuusko/",
      label: "Instagram",
      icon: InstagramLogoIcon,
    },
  ],
  navigation: [
    { href: "#about", label: "About" },
    { href: "#solutions", label: "Solutions" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
  ],
};

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-[5%]">
        <FadeIn delay={0.1} className="relative mb-6 w-full">
          <div className="grid w-full grid-cols-1 items-center justify-between gap-6 rounded-lg border border-border p-8 text-center shadow-xl md:mb-8 md:grid-cols-[1fr_max-content] md:gap-x-12 md:gap-y-8 md:p-12 md:text-left lg:mb-10 lg:gap-x-20">
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <Image
                src="/footer-cta.webp"
                className="size-full bg-muted object-cover invert filter dark:invert-0"
                alt="footer cta"
                fill
                placeholder="blur"
                blurDataURL="/footer-cta.webp"
              />
              <div className="absolute inset-0 h-full w-full bg-background/80" />
            </div>
            <div className="md:mr-12 lg:mr-0">
              <div className="w-full max-w-lg">
                <h2 className="mb-3 scroll-m-20 text-3xl tracking-tight transition-colors first:mt-0">
                  Let&apos;s work together
                </h2>
                <p className="prose prose-stone dark:prose-invert">
                  I&apos;m always open to new opportunities and collaborations.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <ContactDialog>
                <Button size="lg" variant="default">
                  Contact
                </Button>
              </ContactDialog>
            </div>
          </div>
        </FadeIn>

        <FadeIn amount={0.2} delay={0.1} className="mb-6">
          <div className="grid grid-cols-1 gap-x-[8vw] gap-y-12 rounded-lg border border-border p-8 md:gap-y-16 md:p-12 lg:grid-cols-[0.75fr,1fr] lg:gap-y-4">
            <div className="flex flex-col">
              <Link
                href="#top"
                className="!mb-3 flex flex-col transition-colors duration-300 hover:text-muted-foreground md:mb-6"
              >
                <span className="md:text-lg">
                  Huusko<span className="text-muted-foreground">.dev</span>
                </span>
              </Link>
              <article className="prose prose-sm prose-stone mb-4 dark:prose-invert">
                <p className="text-balance text-muted-foreground">
                  A creative web developer and designer based in Helsinki,
                  Finland.
                </p>
              </article>
              <Badge
                variant="outline"
                className="flex w-fit items-center gap-x-2 text-xs text-muted-foreground"
              >
                <div className="size-1.5 animate-pulse rounded-full bg-green-600 dark:bg-green-500" />
                Available for work
              </Badge>
            </div>
            <div className="grid grid-cols-1 items-start gap-y-10 sm:grid-cols-3 sm:gap-x-6 md:gap-x-8 md:gap-y-4">
              {["Navigation", "Projects", "Socials"].map((category, index) => (
                <FadeIn
                  key={index}
                  delay={0.1 + index * 0.1}
                  className="flex flex-col items-start justify-start"
                >
                  <span className="mb-3 text-sm md:mb-4">{category}</span>
                  <ul className="flex flex-col items-start justify-start">
                    {links[category.toLowerCase() as keyof typeof links].map(
                      (link) => (
                        <li key={link.label} className="py-2 text-sm">
                          <Link
                            href={link.href}
                            target={
                              category !== "Navigation" ? "_blank" : undefined
                            }
                            rel={
                              category !== "Navigation"
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-muted-foreground transition-colors duration-300 hover:text-foreground"
                          >
                            {"icon" in link && (
                              <link.icon className="mr-2 inline-block" />
                            )}
                            {link.label}
                          </Link>
                        </li>
                      ),
                    )}
                  </ul>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-col-reverse items-center justify-between gap-y-4 pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
            <p className="mt-6 text-xs text-muted-foreground/60 md:mt-0">
              © {new Date().getFullYear()} Aleksi Huusko – All rights reserved
            </p>
            <Clock />
            <ul className="grid grid-flow-row grid-cols-2 justify-center gap-x-0 gap-y-4 text-sm md:grid-flow-col md:grid-cols-[max-content] md:gap-x-6 md:gap-y-0">
              <li className="text-xs">
                <Link
                  href="/"
                  className="text-muted-foreground/60 transition-colors duration-300 hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="text-xs">
                <Link
                  href="/"
                  className="text-muted-foreground/60 transition-colors duration-300 hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
