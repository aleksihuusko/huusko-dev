"use client";

import {
  ChevronRightIcon,
  CodeIcon,
  CodeSandboxLogoIcon,
  FrameIcon,
  Share1Icon,
} from "@radix-ui/react-icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Web Development",
    icon: <CodeIcon className="h-4 w-4" />,
    items: [
      "Website development",
      "Custom web development",
      "Headless CMS",
      "Migrations",
      "Localization",
      "Website hosting",
      "Accessibility (WCAG)",
      "Google Core Web Vitals",
    ],
  },
  {
    title: "Design",
    icon: <FrameIcon className="h-4 w-4" />,
    items: [
      "UI/UX design",
      "Web design",
      "Graphic design",
      "Brand design",
      "App design",
      "Illustrations",
    ],
  },
  {
    title: "Custom Development",
    icon: <CodeSandboxLogoIcon className="h-4 w-4" />,
    items: [
      "Custom software",
      "Web app development",
      "Mobile app development",
      "Enterprise applications",
      "System architecture",
      "Testing and audits",
      "Quality assurance",
      "Maintenance and support",
    ],
  },
  {
    title: "Marketing",
    icon: <Share1Icon className="h-4 w-4" />,
    items: [
      "Google Analytics",
      "Search engine optimization",
      "Google Ads",
      "Meta Ads",
      "LinkedIn Ads",
      "Content writing",
      "Email marketing",
      "TikTok Ads",
    ],
  },
];

export default function SectionServices() {
  return (
    <section id="services" className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-[5%]">
        <h2 className="mb-8 scroll-m-20 text-center text-3xl font-bold md:mb-12">
          Services
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className="transition-shadow duration-300 hover:shadow-xl"
            >
              <CardHeader>
                <div className="flex items-center">
                  <div className="mr-3 rounded-full bg-primary p-2 text-primary-foreground">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <ChevronRightIcon className="mr-2 h-4 w-4" />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
