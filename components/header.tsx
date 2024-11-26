"use client";

import { motion } from "framer-motion";
import HyperText from "@/components/ui/hyper-text";
import Link from "next/link";
import * as links from "./details";

export function Header() {
  return (
    <motion.header
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-medium">Remiel</h1>
      <p className="text-gray-400">
        tech enthusiast, gamer, and content creator who loves building sleek,
        user-friendly interfaces and exploring the magic of technology. As a
        Microsoft Learn Student Ambassador (Beta), I’m actively contributing to
        the tech community while experimenting with AI, web development, and
        innovative solutions that push boundaries.
      </p>
      <p className="text-gray-400">
        When I’m not geeking out over code, you’ll find me gaming, crafting
        content for{" "}
        <span className="font-light">
          <Link href={links.youtube}>remielgraphy.</Link>
        </span>
      </p>
    </motion.header>
  );
}
