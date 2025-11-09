"use client";

import React, { useEffect, useState } from "react";
import { Newsreader } from "next/font/google";
import { motion } from "framer-motion";

const newsreader = Newsreader({ subsets: ["latin"], weight: ["300"] });

const MotionSection = motion.section as unknown as React.ComponentType<any>;

export default function ContactSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visitorTime, setVisitorTime] = useState<Date | null>(null);

  useEffect(() => {
    setVisitorTime(new Date());
    setIsLoaded(true);
  }, []);

  const formatTime = (date: Date | null) => {
    if (!date) return "";
    try {
      return date.toLocaleString(undefined, {
        dateStyle: "medium",
        timeStyle: "short",
      });
    } catch (e) {
      return date.toString();
    }
  };

  const weekdayName = (date: Date | null) => {
    if (!date) return null;
    try {
      return date
        .toLocaleDateString(undefined, { weekday: "long" })
        .toLowerCase();
    } catch (e) {
      return null;
    }
  };

  return (
    <MotionSection
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className="font-medium">Contact</h2>
      {/* <div className=" text-gray-100 flex space-x-4">
        <button className="btn btn-xs px-3 py-1 text-xs">
          <a href="#">resume</a>
        </button>
      </div> */}
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
