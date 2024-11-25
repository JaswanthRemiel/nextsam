"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Sections() {
  return (
    <motion.section
      className="overflow-x-auto pb-6 md:pb-0 md:overflow-x-visible"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex md:grid md:grid-cols-3 gap-16 w-[300%] md:w-full">
        <div className="w-full space-y-8">
          <h2 className="font-medium">Building</h2>
          <div className="space-y-6">
            <div>
              <Link
                href="#"
                className="group inline-flex items-center space-x-1 text-white hover:text-gray-300 transition-colors"
              >
                <span>Craft</span>
                <motion.span className="inline-block" whileHover={{ x: 2 }}>
                  →
                </motion.span>
              </Link>
              <p className="text-sm text-gray-400 mt-1">
                Implementing interfaces and interactions.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full space-y-8">
          <h2 className="font-medium">Projects</h2>
          <div className="space-y-6">
            <div>
              <Link
                href="#"
                className="group inline-flex items-center space-x-1 text-white hover:text-gray-300 transition-colors"
              >
                <span>⌘K</span>
                <motion.span className="inline-block" whileHover={{ x: 2 }}>
                  →
                </motion.span>
              </Link>
              <p className="text-sm text-gray-400 mt-1">
                Composable command menu React component.
              </p>
            </div>
            <div>
              <Link
                href="#"
                className="group inline-flex items-center space-x-1 text-white hover:text-gray-300 transition-colors"
              >
                <span>Writer</span>
                <motion.span className="inline-block" whileHover={{ x: 2 }}>
                  →
                </motion.span>
              </Link>
              <p className="text-sm text-gray-400 mt-1">
                Plain text editor with a focus on performance.
              </p>
            </div>
            <div>
              <Link
                href="#"
                className="group inline-flex items-center space-x-1 text-white hover:text-gray-300 transition-colors"
              >
                <span>Next Themes</span>
                <motion.span className="inline-block" whileHover={{ x: 2 }}>
                  →
                </motion.span>
              </Link>
              <p className="text-sm text-gray-400 mt-1">
                Perfect dark mode in Next.js apps.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full space-y-8">
          <h2 className="font-medium">Writing</h2>
          <div className="space-y-6">
            <div>
              <Link
                href="#"
                className="group inline-flex items-center space-x-1 text-white hover:text-gray-300 transition-colors"
              >
                <span>React Hook Getter Pattern</span>
                <motion.span className="inline-block" whileHover={{ x: 2 }}>
                  →
                </motion.span>
              </Link>
              <p className="text-sm text-gray-400 mt-1">
                Simple, efficient React state hook in 50 lines.
              </p>
            </div>
            <div>
              <Link
                href="#"
                className="group inline-flex items-center space-x-1 text-white hover:text-gray-300 transition-colors"
              >
                <span>Redesign 2021</span>
                <motion.span className="inline-block" whileHover={{ x: 2 }}>
                  →
                </motion.span>
              </Link>
              <p className="text-sm text-gray-400 mt-1">
                Return to simplicity.
              </p>
            </div>
            <div>
              <Link
                href="#"
                className="group inline-flex items-center space-x-1 text-white hover:text-gray-300 transition-colors"
              >
                <span>All writing</span>
                <motion.span className="inline-block" whileHover={{ x: 2 }}>
                  →
                </motion.span>
              </Link>
              <p className="text-sm text-gray-400 mt-1">
                Infrequent thoughts on design and code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
