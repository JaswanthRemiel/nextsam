"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectItem } from "./projectitem";
import { projects, writings, building } from "./details";

export function Sections() {
  return (
    <section className="show-horizontal-scroll overflow-x-auto pb-6 md:pb-0 md:overflow-x-visible">
      <div className="flex md:grid md:grid-cols-3 gap-10 w-[200%] md:w-full">
        <div className="w-full space-y-8">
          <h2 className="font-medium text-gray-300">projects</h2>
          <div className="space-y-6">
            {projects.map((p) => (
              <div key={p.href}>
                <Link
                  href={p.href}
                  className="group inline-flex items-center space-x-1 text-white hover:text-gray-300 transition-colors"
                >
                  <span>{p.title}</span>
                  <motion.span whileHover={{ x: 2 }}>
                    <span className="inline-block opacity-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 ml-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 19L19 5M5 5h14v14"
                        />
                      </svg>
                    </span>
                  </motion.span>
                </Link>
                <p className="text-sm font-mono text-gray-400 mt-1">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full space-y-8">
          <h2 className="font-medium text-gray-300">writing</h2>
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
        </div>
      </div>
    </section>
  );
}

export default Sections;
