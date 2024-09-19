"use client";

import { useEffect, useState } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  CubeIcon,
  HeartIcon,
  StarIcon,
  TimerIcon,
} from "@radix-ui/react-icons";

const stats = [
  {
    icon: <StarIcon className="h-4 w-4" />,
    value: 5,
    label: "Years experience",
    prefix: "+",
  },
  {
    icon: <CubeIcon className="h-4 w-4" />,
    value: 47,
    label: "Projects done",
    prefix: "+",
  },
  {
    icon: <HeartIcon className="h-4 w-4" />,
    value: 4329,
    label: "Commits made",
    prefix: "+",
  },
  {
    icon: <TimerIcon className="h-4 w-4" />,
    value: 2598,
    label: "Hours of coding",
    prefix: "+",
  },
];

const AnimatedCounter = ({
  value,
  duration = 1,
}: {
  value: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMilSecDur = duration;
    const incrementTime = (totalMilSecDur / end) * 1000;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => {
      clearInterval(timer);
    };
  }, [value, duration]);

  return <span>{count.toLocaleString()}</span>;
};

export default function SectionStats() {
  return (
    <section
      id="stats"
      className="border-y border-border bg-primary-foreground py-12 md:py-16"
    >
      <div className="container mx-auto px-[5%]">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="transition-shadow duration-300 hover:shadow-xl"
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div className="mt-1 text-2xl font-bold">
                  {stat.prefix}
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  {stat.icon}
                </div>
              </CardHeader>
              <CardContent>
                <div className="font-medium text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
