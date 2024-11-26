"use client";

import { motion } from "framer-motion";
import HyperText from "@/components/ui/hyper-text";
import Link from "next/link";
import * as links from "./details";
import { FlipWords } from "./ui/flip-words";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({ subsets: ["latin"], weight: ["300"] });

const words = [
  "fullstack developer.",
  "content creator.",
  "graphic designer.",
  "gamer.",
];

export function Header() {
  return (
    <motion.header
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>
        <span>
          Remiel,
          <FlipWords words={words} /> <br />
        </span>
      </h1>

      <p className={`${newsreader.className} text-gray-100`}>
        I'm passionate about designing digital experiences that make people say
        "wow" and building web applications more stable than a server after a
        reboot.
      </p>
      <p className={`${newsreader.className} text-gray-100`}>
        When I’m not geeking out over code, you’ll find me gaming, crafting
        content for{" "}
        <span className="font-light text-gray-300">
          <Link href={links.youtube}>remielgraphy.</Link>
        </span>
      </p>
    </motion.header>
  );
}
