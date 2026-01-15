"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Newsreader } from "next/font/google";
import { GitHubContributions } from "@/components/github-contributions";

const newsreader = Newsreader({ subsets: ["latin"], weight: ["300"] });

export function Header() {
  return (
    <motion.div>
      <header className="space-y-3">
        <div className="flex items-start">
          <Image
            src="https://cdn.jsdelivr.net/gh/JaswanthRemiel/portfolio-assests@main/images/logo.webp"
            alt="Jaswanth Remiel"
            width={60}
            height={60}
            className="mr-4 "
          />
        </div>

        <p className={`${newsreader.className} text-gray-100 text-justify`}>
          i'm jaswanth remiel, i build things for the web. full-stack
          development with a deep focus on ui/ux and design systems. currently
          diving into machine learning and computer vision, figuring out how to
          make interfaces smarter. as a microsoft learn student ambassador, i
          occasionally share what i learn along the way.
        </p>
        <p className={`${newsreader.className} text-gray-100 text-justify`}>
          you can explore my{" "}
          <Link
            href="/research"
            className="underline text-gray-100 decoration-gray-100 hover:text-white transition-colors"
          >
            research
          </Link>
          {" "}for papers and experiments, or check out{" "}
          <Link
            href="/projects"
            className="underline text-gray-100 decoration-gray-100 hover:text-white transition-colors"
          >
            projects
          </Link>
          {" "}for things i've shipped. sometimes i make videos on{" "}
          <Link
            href="https://www.youtube.com/@remielgraphy"
            className="underline text-gray-100 decoration-gray-100 hover:text-white transition-colors"
          >
            youtube
          </Link>
          .
        </p>
      </header>
      <div className="mt-4">
        <GitHubContributions />
      </div>
      {/* <p className={`${newsreader.className} text-gray-100 mt-4`}>
        now listening to
      </p>
      <ListeningSection /> */}
    </motion.div>
  );
}
