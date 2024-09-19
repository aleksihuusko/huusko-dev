import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  DownloadIcon,
  GitHubLogoIcon,
  HomeIcon,
  LinkedInLogoIcon,
  StackIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ContactDialog } from "@/components/contact-dialog";

export default function SectionHero() {
  return (
    <section id="hero" className="py-16 md:py-24 lg:py-28">
      <div className="container mx-auto px-[5%]">
        <div className="grid grid-cols-1 items-center gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2">
          <div>
            <Badge variant="secondary" className="mb-6">
              <span className="mr-2 flex h-3 w-3 items-center">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-primary opacity-80"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              <span className="font-mono text-xs font-semibold text-muted-foreground">
                Open for work
              </span>
            </Badge>
            <h1 className="mb-4 scroll-m-20 text-balance text-4xl font-bold lg:text-5xl">
              Full-stack developer and software engineer
            </h1>
            <p className="text-balance text-lg font-medium leading-7 text-muted-foreground">
              Full-stack developer passionate about building fast, scalable web
              applications – delivering solutions from concept to deployment.
            </p>
            <div className="mt-8 flex gap-4">
              <ContactDialog />
              <Button asChild variant="outline">
                <Link
                  target="_blank"
                  href="/cv.pdf"
                  className="flex items-center gap-2"
                >
                  Download CV
                  <DownloadIcon className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <Separator className="my-8" />
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <StackIcon className="h-4 w-4" />
                  <span className="font-mono text-xs">
                    M.Sc. Computer Science
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <HomeIcon className="h-4 w-4" />
                  <span className="font-mono text-xs">Turku, Finland</span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <Button variant="secondary" size="icon" asChild>
                  <Link
                    href="https://github.com/aleksihuusko"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubLogoIcon className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="secondary" size="icon" asChild>
                  <Link
                    href="https://linkedin.com/in/aleksihuusko"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInLogoIcon className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <Image
            priority
            src="/profile.webp"
            className="w-full rounded-lg object-cover"
            alt="Aleksi Huusko"
            height={3000}
            width={2400}
          />
        </div>
      </div>
    </section>
  );
}
