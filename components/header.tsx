"use client";

import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-medium">Paco Coursey</h1>
      <p className="text-gray-400">
        <span className="italic">Crafting interfaces.</span> Building polished
        software and web experiences. Experimenting with magical details in user
        interfaces. Webmaster at Linear.
      </p>
      <p className="text-gray-400">
        In the past I&apos;ve developed the Vercel design system, website, and
        dashboard.
      </p>
    </motion.header>
  );
}
