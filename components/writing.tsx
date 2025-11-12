"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { writings } from "./details";

interface WritingItemProps {
  href: string;
  title: string;
  description: string;
}

function WritingItem({ href, title, description }: WritingItemProps) {
  return (
    <div>
      <Link
        href={href}
        target="_blank"
        className="group inline-flex items-center space-x-1 text-white hover:text-gray-300 transition-colors"
      >
        <span className="underline">{title}</span>
      </Link>
      <p className="text-sm text-justify font-mono text-gray-400 mt-1">
        {description}
      </p>
    </div>
  );
}

export default function Writing() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <section className="space-y-8">
        <h2 className="font-medium text-gray-300">writing</h2>
        <div className="space-y-6">
          {writings.map((w) => (
            <WritingItem
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
