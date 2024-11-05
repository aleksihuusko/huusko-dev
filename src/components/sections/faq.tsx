"use client";

import React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ContactDialog from "@/components/contact-dialog";
import FadeIn from "@/components/fade-in";

const questions = [
  {
    question: "What services do you specialize in?",
    answer:
      "I specialize in developing modern, responsive websites and web applications, crafting intuitive user experiences, and designing visually compelling digital products. My expertise also includes digital marketing, where I deliver data-driven strategies that align with business goals for measurable growth.",
  },
  {
    question: "What is your technical background?",
    answer:
      "I hold a Master of Science in Technology, specializing in Software Engineering. My thesis focused on comparing the efficiency and scalability of JAMstack and LAMP-based WordPress architectures. I have extensive knowledge of software engineering, interaction design, and digital business strategies, allowing me to create solutions that are both functional and visually appealing.",
  },
  {
    question: "How do you design and develop websites?",
    answer:
      "My approach blends clean, efficient code with elegant design, ensuring that each solution is optimized for all devices and platforms. I prioritize delivering seamless user experiences that not only look great but also perform exceptionally well under the hood.",
  },
  {
    question: "What is your approach to digital marketing?",
    answer:
      "In addition to web development, I leverage my expertise in digital marketing to optimize websites and applications for performance and engagement. I design data-driven strategies that help businesses increase visibility, drive conversions, and foster long-term growth.",
  },
  {
    question: "What types of clients have you worked with?",
    answer:
      "I have worked with a wide range of clients, from innovative startups to large corporations, delivering tailored digital solutions that meet their unique needs. Whether it's custom software, mobile applications, or full-scale brand design, I ensure each project is strategically aligned with the client's business objectives.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-16 md:py-24 lg:py-28">
      <div className="container mx-auto grid grid-cols-1 items-start justify-between gap-x-12 gap-y-12 px-[5%] md:grid-cols-2 md:gap-x-12 md:gap-y-16 lg:gap-x-20">
        <div>
          <FadeIn delay={0.2} direction="none">
            <h2 className="mb-5 scroll-m-20 border-b pb-2 text-3xl tracking-tight transition-colors first:mt-0">
              Frequently asked questions
            </h2>
            <article className="prose prose-stone text-balance dark:prose-invert">
              <p className="text-balance">
                These are the questions I get asked the most. Get in touch with
                me if you need more answers.
              </p>
            </article>

            <ContactDialog>
              <Button
                variant="outline"
                className="mt-6 flex w-fit items-center justify-start gap-x-2 md:mt-8"
              >
                Contact
              </Button>
            </ContactDialog>
          </FadeIn>
        </div>

        <div>
          <Accordion type="single" collapsible>
            {questions.map((question, index) => (
              <FadeIn key={index} delay={0.3 + index * 0.1} direction="up">
                <AccordionItem
                  value={`item-${index}`}
                  className={cn(
                    "border-b",
                    index === questions.length - 1 && "border-b-0",
                  )}
                >
                  <AccordionTrigger>{question.question}</AccordionTrigger>
                  <AccordionContent>{question.answer}</AccordionContent>
                </AccordionItem>
              </FadeIn>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
