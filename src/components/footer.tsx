"use client";

import React from "react";
import Link from "next/link";

import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="w-full bg-accent py-6">
      <div className="container mx-auto px-[5%]">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm font-medium leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Aleksi Huusko. All rights reserved.
            </p>
          </div>

          <div className="flex gap-2">
            <Button asChild variant="outline" size="icon">
              <Link href="https://github.com/aleksihuusko" target="_blank">
                <GitHubLogoIcon />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon">
              <Link href="https://linkedin.com/in/aleksihuusko" target="_blank">
                <LinkedInLogoIcon className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon">
              <Link href="https://x.com/aleksihuusko" target="_blank">
                <TwitterLogoIcon className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon">
              <Link
                href="https://www.instagram.com/aleksihuusko/"
                target="_blank"
              >
                <InstagramLogoIcon className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
