"use client";
import * as links from "./details";
import { motion } from "framer-motion";
import Link from "next/link";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({ subsets: ["latin"], weight: ["300"] });

type MotionSectionProps = import("framer-motion").HTMLMotionProps<"section"> &
  React.HTMLAttributes<HTMLElement>;

const MotionSection =
  motion.section as unknown as React.ComponentType<MotionSectionProps>;

export function Now() {
  return (
    <MotionSection
      className="space-y-8"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <h2 className="font-medium text-gray-300">now</h2>
      <div className={`${newsreader.className} space-y-6 text-gray-100`}>
        <p>
          currently piloting a spaceship powered by caffeine, algorithms, and a
          dash of design magic, i am deep in the matrix as an sde-1 at ncompass.
          debugging code feels more like slaying pixelated dragons than fixing
          bugs. from mixing pixels as a design jury at awwwards to whipping up
          machine learning magic at samsung r&d india and microsoft, my career
          path is starting to look like a marvel multiverse, minus the cape, but
          i am open to suggestions. when not wrestling with frontend frameworks
          or whispering sweet nothings to cloud servers, I share my epic tech
          quests and cringe-worthy memes on{" "}
          <Link
            href={links.youtube}
            target="_blank"
            className="space-y-6 text-gray-100 underline decoration-gray-100"
          >
            Youtube
          </Link>{" "}
          and{" "}
          <Link
            href={links.twitter}
            target="_blank"
            className="space-y-6 text-gray-100 underline decoration-gray-100"
          >
            Twitter
          </Link>
          , if you&apos;re curious.
        </p>
        <p>
          whether i am shipping ai tools, hosting impromptu design battles, or
          plotting the next viral thread, my mission is to build, break, and
          boldly broadcast every win and legendary fail to my growing tribe of
          creators, coders, and occasional late-night gamers. why just wear many
          hats when you can architect your own ecosystem? storytelling, building
          communities, and scaling design and dev mountains are all part of the
          daily grind. join me if you want hacks, laughs, and a
          behind-the-scenes pass into the wild world of tech, design, and a
          little bit of healthy chaos.
        </p>
      </div>
    </MotionSection>
  );
}
