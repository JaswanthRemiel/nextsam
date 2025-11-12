"use client";

import React, { useState } from "react";
import { Newsreader } from "next/font/google";
import { motion, HTMLMotionProps } from "framer-motion";

const newsreader = Newsreader({ subsets: ["latin"], weight: ["300"] });

type MotionSectionProps = React.ComponentProps<"section"> &
  HTMLMotionProps<"section">;

const MotionSection =
  motion.section as unknown as React.ComponentType<MotionSectionProps>;

export default function ContactSection() {
  const [visitorTime] = useState<Date | null>(() => new Date());

  const weekdayName = (date: Date | null) => {
    if (!date) return null;
    try {
      return date
        .toLocaleDateString(undefined, { weekday: "long" })
        .toLowerCase();
    } catch {
      return null;
    }
  };

  return (
    <MotionSection
      className="space-y-4"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <h2 className="font-medium">Contact</h2>
      <div
        className={`${newsreader.className} text-gray-100 flex text-l flex-wrap gap-2 sm:gap-6 mb-2`}
      >
        <a
          href="https://twitter.com/jaswanthremiel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          twitter / x
        </a>
        <a
          href="https://github.com/JaswanthRemiel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          github
        </a>
        <a
          href="https://linkedin.com/in/jaswanthremiel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          linkedin
        </a>
        <a
          href="mailto:work.remiel@remiel.work"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          say hello
        </a>
      </div>
      <a
        className={`text-l text-muted-foreground ${newsreader.className} text-gray-100 gap-y-2`}
      >
        {visitorTime ? (
          <>have a nice {weekdayName(visitorTime)} ahead.</>
        ) : (
          "have a nice day ahead."
        )}
      </a>
    </MotionSection>
  );
}
