"use client";

import { motion } from "framer-motion";
import { ProjectItem } from "./projectitem";
import { writings } from "./details";

export default function Writing() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <section className="space-y-8">
        <h2 className="font-medium text-gray-300 mb-6">writing</h2>
        <div className="space-y-6">
          {writings.map((w) => (
            <ProjectItem
              key={w.href}
              href={w.href}
              title={w.title}
              description={w.description}
            />
          ))}
        </div>
      </section>
    </motion.div>
  );
}
