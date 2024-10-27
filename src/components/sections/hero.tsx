"use client";

import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/contact-dialog";
import FadeIn from "@/components/fade-in";

export default function Hero() {
  return (
    <section id="hero" className="py-16 md:py-24 lg:py-28">
      <div className="container mx-auto px-[5%]">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <FadeIn delay={0.1}>
              <div>
                <Badge
                  variant="secondary"
                  className="mb-6 flex w-fit items-center gap-x-2 text-muted-foreground"
                >
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-destructive" />
                  Available for work
                </Badge>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="scroll-m-20 text-balance text-4xl tracking-tight lg:text-5xl">
                A creative web developer and designer
              </h1>
            </FadeIn>

            <FadeIn delay={0.3} className="mt-6">
              <p className="prose prose-stone text-balance leading-7 dark:prose-invert">
                Developer and UX/UI designer from Helsinki, Finland.
                Specializing in crafting dynamic, innovative digital products
                and evolving user experiences driven by data insights.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className="mt-10 flex gap-x-4 md:mt-8">
              <ContactDialog>
                <Button size="lg" variant="default">
                  Contact
                </Button>
              </ContactDialog>
            </FadeIn>
          </div>

          <FadeIn delay={0.5}>
            <div className="relative overflow-hidden rounded-lg">
              <Image
                priority
                src="/aleksi-huusko.webp"
                className="aspect-square w-full rounded-lg bg-muted object-cover"
                alt="Aleksi Huusko"
                width={2256}
                height={2256}
                placeholder="blur"
                blurDataURL="/aleksi-huusko.webp"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-background/0 via-background/5 to-background/50 dark:from-background/0 dark:via-background/20 dark:to-background/80" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
