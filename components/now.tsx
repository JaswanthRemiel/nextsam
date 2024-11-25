"use client";

import { motion } from "framer-motion";

export function Now() {
  return (
    <motion.section
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className="font-medium">Now</h2>
      <div className="space-y-6 text-gray-400">
        <p>
          Developing skill through doing, guiltlessly exploring passion and
          interests, imbuing quality. Mindful that{" "}
          <em>everything around me is someone&apos;s life work</em>.
        </p>
        <p>
          All I want to do is build websites. Typography, motion design,
          copywriting, performance— the web is an endless medium of opportunity
          and creativity of which I&apos;ve only scratched the surface.
        </p>
        <p>
          Enjoying deep, dark, boring dance music: songs that set the pace in
          the first ten seconds and maintain it for the next ten minutes. Deep
          is a curation of my favorites. Soothed by the predictability of it
          all.
        </p>
      </div>
    </motion.section>
  );
}
