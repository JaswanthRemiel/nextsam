"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Markdown from "react-markdown";

import { useEffect, useState } from "react";
import { getDetails } from "@/lib/data";

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
        <span
          className="text-sm underline underline-offset-4"
        >
          {title}
        </span>
      </Link>
      <div className="text-sm md:text-justify font-mono text-gray-400 mt-1">
        <Markdown>{description}</Markdown>
      </div>
    </div>
  );
}

export default function Writing() {
  const [writings, setWritings] = useState<any[]>([]);

  useEffect(() => {
    getDetails().then((data) => {
      setWritings(data.writings || []);
    });
  }, []);

  return (
    <motion.div>
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
