"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "./details";

export default function Projects() {
  const statusClass = (s: string | undefined) => {
    switch (s) {
      case "in-progress":
        return "btn btn-xs btn-warning normal-case";
      case "live":
        return "btn btn-xs btn-success normal-case";
      case "archived":
        return "btn btn-xs btn-outline normal-case";
      default:
        return "btn btn-xs btn-ghost normal-case";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <section className="space-y-8">
        <h2 className="font-medium text-gray-300 mb-4">projects</h2>
        <div className="space-y-6">
          {projects.map((p) => (
            <div key={p.href}>
              <div className="flex items-center space-x-3">
                <Link
                  href={p.href}
                  className="group inline-flex items-center space-x-1 text-white hover:text-gray-300 transition-colors"
                >
                  <span>{p.title}</span>
                  <motion.span whileHover={{ x: 2 }}>
                    <span className="inline-block opacity-50 ml-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3"
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

                <span className=" text-gray-300 ml-2 inline-flex items-center space-x-2">
                  {(
                    ((p as { badges?: string[]; status?: string }).badges as
                      | string[]
                      | undefined) ||
                    ((p as { badges?: string[]; status?: string }).status
                      ? [
                          (p as { badges?: string[]; status?: string })
                            .status as string,
                        ]
                      : [])
                  ).map((b, idx) => (
                    <button
                      key={idx}
                      className={
                        "text-orange-100 btn btn-xs px-2 text-xs normal-case"
                      }
                      aria-label={`badge-${b}`}
                    >
                      {b.replace("-", " ")}
                    </button>
                  ))}
                </span>
              </div>

              <p className="text-sm font-mono justify-end text-gray-400 mt-1">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
