"use client";

import { useState, useEffect } from "react";

import { ClockIcon, ReloadIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Clock() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    setCurrentTime(new Date());
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute instead of every second

    return () => clearInterval(timer);
  }, []);

  const formatTimeFinland = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      timeZone: "Europe/Helsinki",
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };

    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date,
    );
    const finlandTime = new Date(formattedDate);
    const utcOffset = finlandTime.getTimezoneOffset() / -60;
    const isDST = utcOffset === 3;

    return `${formattedDate} (UTC+${isDST ? "3" : "2"})`;
  };

  if (currentTime === null) {
    return (
      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground/60">
        <ReloadIcon className="!size-3 animate-spin" /> Loading my current local
        time...
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground/60">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="flex items-center gap-1">
            Local time
            <ClockIcon className="!size-3" />
          </TooltipTrigger>
          <TooltipContent>
            <p>This is my local time in Helsinki, Finland.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {formatTimeFinland(currentTime)}
    </span>
  );
}
