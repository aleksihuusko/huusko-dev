"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/contact-dialog";

export default function Hero() {
  return (
    <section id="hero" className="py-16 md:py-24 lg:py-28">
      <div className="container mx-auto px-[5%]">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Badge
                variant="secondary"
                className="mb-6 flex w-fit items-center gap-x-2 text-muted-foreground"
              >
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-destructive" />
                Available for work
              </Badge>
            </motion.div>
            <motion.h1
              className="scroll-m-20 text-balance text-4xl tracking-tight lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A creative web developer and designer
            </motion.h1>
            <motion.p
              className="prose prose-stone text-balance leading-7 dark:prose-invert [&:not(:first-child)]:mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Developer and UX/UI designer from Helsinki, Finland. Specializing
              in crafting dynamic, innovative digital products and evolving user
              experiences driven by data insights.
            </motion.p>
            <motion.div
              className="mt-10 flex gap-x-4 md:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ContactDialog>
                <Button size="lg" variant="default">
                  Contact
                </Button>
              </ContactDialog>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative overflow-hidden rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image
                priority
                src="/aleksi-huusko.webp"
                className="aspect-square w-full rounded-lg bg-accent object-cover"
                alt="Aleksi Huusko"
                width={2256}
                height={2256}
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-background/0 via-background/5 to-background/50 dark:from-background/0 dark:via-background/20 dark:to-background/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}