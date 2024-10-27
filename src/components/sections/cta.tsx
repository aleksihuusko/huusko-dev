"use client";

import React from "react";
import Image from "next/image";

import ContactDialog from "@/components/contact-dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Cta() {
  return (
    <section id="cta" className="relative py-16 md:py-24 lg:py-28">
      <div className="container mx-auto px-[5%]">
        <div className="w-full max-w-lg">
          <Badge variant="secondary" className="mb-5">
            Project in mind?
          </Badge>
          <h2 className="mb-5 scroll-m-20 text-balance text-4xl tracking-tight lg:text-5xl">
            Take your digital presence to the next level
          </h2>
          <article className="prose prose-stone text-balance dark:prose-invert">
            <p>
              Whether it&apos;s web development, design or digital marketing,
              I&apos;m here to help create solutions that deliver real results.
            </p>
          </article>
          <div className="mt-6 flex gap-x-4 md:mt-8">
            <ContactDialog>
              <Button variant="default">Contact</Button>
            </ContactDialog>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 overflow-hidden bg-accent">
        <Image
          src="/cta-background.webp"
          className="object-cover invert filter dark:invert-0"
          alt="cta background"
          fill
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>
    </section>
  );
}
