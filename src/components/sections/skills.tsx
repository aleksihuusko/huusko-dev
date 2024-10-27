"use client";

import React from "react";
import {
  BiLogoAws,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoPostgresql,
  BiLogoPython,
  BiLogoReact,
  BiLogoTypescript,
  BiLogoWordpress,
} from "react-icons/bi";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAirtable,
  SiAnthropic,
  SiCloudflare,
  SiContentful,
  SiDatocms,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFramer,
  SiGit,
  SiGithub,
  SiGnubash,
  SiGoogleads,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiHono,
  SiHubspot,
  SiInvision,
  SiMeta,
  SiNodedotjs,
  SiOpenai,
  SiPerplexity,
  SiPostman,
  SiPrismic,
  SiSanity,
  SiSemrush,
  SiShopify,
  SiSquarespace,
  SiStoryblok,
  SiStrapi,
  SiSupabase,
  SiTailwindcss,
  SiVite,
  SiWebflow,
  SiWix,
  SiZapier,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import FadeIn from "@/components/fade-in";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactDialog from "@/components/contact-dialog";

export default function Skills() {
  const SkillCard = ({
    category,
    skills,
    delay,
  }: {
    category: string;
    skills: { icon: React.ReactNode; name: string }[];
    delay: number;
  }) => {
    return (
      <FadeIn delay={delay} direction="up">
        <Card>
          <CardHeader>
            <CardTitle>{category}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 gap-4 py-2">
              {skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="inline-flex items-center gap-2 self-start"
                >
                  {skill.icon}
                  <span className="text-sm">{skill.name}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </FadeIn>
    );
  };

  return (
    <section id="skills" className="py-16 md:py-24 lg:py-28">
      <div className="container mx-auto px-[5%]">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div className="static md:sticky md:top-[30%]">
            <FadeIn delay={0.1} direction="none">
              <h2 className="mb-5 scroll-m-20 border-b pb-2 text-3xl tracking-tight transition-colors first:mt-0">
                Skills
              </h2>
              <article className="prose prose-stone text-balance dark:prose-invert">
                <p>
                  As a full-stack developer and software engineer, I blend
                  functionality with visually compelling design for a seamless
                  user experience while maximizing digital marketing potential
                  to drive business results.
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
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                title: "Languages",
                skills: [
                  { icon: <BiLogoHtml5 className="size-4" />, name: "HTML" },
                  { icon: <BiLogoCss3 className="size-4" />, name: "CSS" },
                  {
                    icon: <BiLogoJavascript className="size-4" />,
                    name: "Javascript",
                  },
                  {
                    icon: <BiLogoTypescript className="size-4" />,
                    name: "Typescript",
                  },
                  { icon: <BiLogoJava className="size-4" />, name: "Java" },
                  { icon: <BiLogoPython className="size-4" />, name: "Python" },
                  {
                    icon: <BiLogoPostgresql className="size-4" />,
                    name: "PostgreSQL",
                  },
                  { icon: <GrMysql className="size-4" />, name: "MySQL" },
                ],
              },
              {
                title: "Frameworks",
                skills: [
                  { icon: <BiLogoReact className="size-4" />, name: "React" },
                  { icon: <SiVite className="size-4" />, name: "Vite" },
                  {
                    icon: <RiNextjsFill className="size-4" />,
                    name: "Next.js",
                  },
                  {
                    icon: <SiTailwindcss className="size-4" />,
                    name: "TailwindCSS",
                  },
                  {
                    icon: <SiFramer className="size-4" />,
                    name: "Framer Motion",
                  },
                  { icon: <SiNodedotjs className="size-4" />, name: "Node.js" },
                  { icon: <SiExpress className="size-4" />, name: "Express" },
                  { icon: <SiHono className="size-4" />, name: "Hono" },
                ],
              },
              {
                title: "Headless CMS",
                skills: [
                  { icon: <SiStrapi className="size-4" />, name: "Strapi" },
                  {
                    icon: <BiLogoWordpress className="size-4" />,
                    name: "Wordpress",
                  },
                  { icon: <SiSanity className="size-4" />, name: "Sanity" },
                  {
                    icon: <SiContentful className="size-4" />,
                    name: "Contentful",
                  },
                  { icon: <SiShopify className="size-4" />, name: "Shopify" },
                  { icon: <SiPrismic className="size-4" />, name: "Prismic" },
                  { icon: <SiDatocms className="size-4" />, name: "DatoCMS" },
                  {
                    icon: <SiStoryblok className="size-4" />,
                    name: "Storyblok",
                  },
                ],
              },
              {
                title: "Tools",
                skills: [
                  { icon: <SiGnubash className="size-4" />, name: "Bash" },
                  { icon: <SiGit className="size-4" />, name: "Git" },
                  { icon: <SiGithub className="size-4" />, name: "Github" },
                  { icon: <SiDocker className="size-4" />, name: "Docker" },
                  { icon: <SiPostman className="size-4" />, name: "Postman" },
                  { icon: <BiLogoAws className="size-4" />, name: "AWS" },
                  {
                    icon: <SiCloudflare className="size-4" />,
                    name: "Cloudflare",
                  },
                  { icon: <SiSupabase className="size-4" />, name: "Supabase" },
                ],
              },
              {
                title: "Design",
                skills: [
                  { icon: <SiFigma className="size-4" />, name: "Figma" },
                  {
                    icon: <SiAdobeillustrator className="size-4" />,
                    name: "Illustrator",
                  },
                  {
                    icon: <SiAdobephotoshop className="size-4" />,
                    name: "Photoshop",
                  },
                  { icon: <SiInvision className="size-4" />, name: "InVision" },
                ],
              },
              {
                title: "No/Low-code",
                skills: [
                  { icon: <SiWebflow className="size-4" />, name: "Webflow" },
                  { icon: <SiFramer className="size-4" />, name: "Framer" },
                  { icon: <SiWix className="size-4" />, name: "Wix" },
                  {
                    icon: <SiSquarespace className="size-4" />,
                    name: "Squarespace",
                  },
                  { icon: <SiZapier className="size-4" />, name: "Zapier" },
                  { icon: <SiAirtable className="size-4" />, name: "Airtable" },
                ],
              },
              {
                title: "Artificial Intelligence",
                skills: [
                  { icon: <SiOpenai className="size-4" />, name: "OpenAI" },
                  {
                    icon: <SiAnthropic className="size-4" />,
                    name: "Anthropic",
                  },
                  {
                    icon: <SiPerplexity className="size-4" />,
                    name: "Perplexity",
                  },
                ],
              },
              {
                title: "Digital Marketing",
                skills: [
                  {
                    icon: <SiGoogleanalytics className="size-4" />,
                    name: "Google Analytics",
                  },
                  {
                    icon: <SiGoogleads className="size-4" />,
                    name: "Google Ads",
                  },
                  {
                    icon: <SiGooglesearchconsole className="size-4" />,
                    name: "Search Console",
                  },
                  { icon: <SiSemrush className="size-4" />, name: "Semrush" },
                  { icon: <SiMeta className="size-4" />, name: "Meta Ads" },
                  { icon: <SiHubspot className="size-4" />, name: "Hubspot" },
                ],
              },
            ].map((category, index) => (
              <SkillCard
                key={index}
                category={category.title}
                skills={category.skills}
                delay={0.2 + index * 0.05} // Staggered delay for each card
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
