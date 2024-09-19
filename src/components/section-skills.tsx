import React from "react";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiAmazonwebservices,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiContentful,
  SiStrapi,
  SiGithub,
  SiVisualstudiocode,
  SiMysql,
  SiWordpress,
  SiPrismic,
  SiKubernetes,
  SiSupabase,
  SiPhp,
  SiGithubactions,
  SiFigma,
  SiNotion,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "TypeScript", icon: SiTypescript, proficiency: 90 },
      { name: "React", icon: SiReact, proficiency: 85 },
      { name: "Tailwind CSS", icon: SiTailwindcss, proficiency: 85 },
      { name: "Next.js", icon: SiNextdotjs, proficiency: 80 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, proficiency: 60 },
      { name: "Express", icon: SiExpress, proficiency: 50 },
      { name: "Python", icon: SiPython, proficiency: 50 },
      { name: "PHP", icon: SiPhp, proficiency: 40 },
    ],
  },
  {
    category: "CI/CD",
    skills: [
      { name: "AWS", icon: SiAmazonwebservices, proficiency: 55 },
      { name: "Docker", icon: SiDocker, proficiency: 50 },
      { name: "GitHub Actions", icon: SiGithubactions, proficiency: 45 },
      { name: "Kubernetes", icon: SiKubernetes, proficiency: 35 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, proficiency: 80 },
      { name: "Supabase", icon: SiSupabase, proficiency: 75 },
      { name: "PostgreSQL", icon: SiPostgresql, proficiency: 65 },
      { name: "MySQL", icon: SiMysql, proficiency: 60 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Visual Studio Code", icon: SiVisualstudiocode, proficiency: 95 },
      { name: "Git / GitHub", icon: SiGithub, proficiency: 90 },
      { name: "Figma", icon: SiFigma, proficiency: 80 },
      { name: "Notion", icon: SiNotion, proficiency: 75 },
    ],
  },
  {
    category: "Headless CMS",
    skills: [
      { name: "WordPress", icon: SiWordpress, proficiency: 90 },
      { name: "Prismic", icon: SiPrismic, proficiency: 85 },
      { name: "Contentful", icon: SiContentful, proficiency: 70 },
      { name: "Strapi", icon: SiStrapi, proficiency: 65 },
    ],
  },
];

export default function SectionSkills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="w-full bg-background py-12 md:py-24">
      <div className="container mx-auto px-[5%]">
        <h2 className="mb-8 scroll-m-20 text-center text-3xl font-bold md:mb-12">
          Skills
        </h2>
        <div ref={ref} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillsData.map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <table className="w-full">
                  <tbody>
                    {category.skills.map((skill, skillIndex) => (
                      <tr key={skillIndex} className="border-t">
                        <td className="w-1/2 py-2">
                          <div className="flex items-center">
                            <skill.icon className="mr-2 h-5 w-5" />
                            <span>{skill.name}</span>
                          </div>
                        </td>
                        <td className="w-1/2 py-2 pl-4">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: "100%" } : { width: 0 }}
                            transition={{
                              duration: 1,
                              delay: skillIndex * 0.1,
                            }}
                          >
                            <Progress
                              value={skill.proficiency}
                              className="w-full"
                            />
                          </motion.div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
