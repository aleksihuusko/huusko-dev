import React from "react";

import { ContactDialog } from "@/components/contact-dialog";
import Image from "next/image";

export default function SectionCta() {
  return (
    <section id="cta" className="relative py-16 md:py-20">
      <div className="container mx-auto px-[5%]">
        <div className="w-full max-w-lg">
          <h2 className="mb-4 scroll-m-20 text-4xl font-bold text-primary-foreground">
            Let&apos;s work together!
          </h2>
          <p className="text-balance text-lg font-medium text-primary-foreground">
            Currently seeking new opportunities in tech. Let’s connect if you’d
            like to collaborate!
          </p>
          <div className="mt-6 flex gap-x-4 md:mt-8">
            <ContactDialog buttonVariant="outline" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background.webp"
          className="size-full object-cover"
          alt="Aleksi Huusko"
          fill
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
    </section>
  );
}
