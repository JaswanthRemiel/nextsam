"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GitHubContributions } from "@/components/github-contributions";
import { Button } from "@/components/ui/3d-button"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export function Header() {
  return (
    <motion.div>
      <header className="space-y-3">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start">
            <div className="mr-4 rounded-xl w-[85px] h-[85px] md:w-[70px] md:h-[70px] overflow-hidden border border-white/10">
            <Image
              src="https://cdn.jsdelivr.net/gh/JaswanthRemiel/portfolio-assests@main/images/remieldp.png"
              alt="Jaswanth Remiel"
              width={82}
              height={82}
              className="w-full h-full object-cover scale-[1.3] translate-y-3 md:translate-y-2"
              suppressHydrationWarning
              unoptimized
            />
            </div>
          </div>
          <AnimatedThemeToggler />
        </div>

        <p className="font-sf-regular text-gray-100 text-justify">
          I'm <b className="text-orange-500">Jaswanth Remiel</b>, i build things for the web. full-stack
          development with a deep focus on ui/ux and design systems. currently
          diving into machine learning and computer vision, figuring out how to
          make interfaces smarter. i care a lot about performance,
          accessibility, and the tiny interaction details that make products
          feel truly polished.
        </p>

        {/* <p className="font-sf-regular text-gray-100 text-justify">
          you can explore my{" "}
          <Link
            href="/research"
            className="underline text-gray-100 decoration-gray-100 hover:text-white transition-colors"
          >
            research
          </Link>
          {" "}for papers and experiments, check out{" "}
          <Link
            href="/projects"
            className="underline text-gray-100 decoration-gray-100 hover:text-white transition-colors"
          >
            projects
          </Link>
          {" "}for things i've shipped, or read my{" "}
          <Link
            href="/blog"
            className="underline text-gray-100 decoration-gray-100 hover:text-white transition-colors"
          >
            blog
          </Link>
          . sometimes i make videos on{" "}
          <Link
            href="https://www.youtube.com/@remielgraphy"
            className="underline text-gray-100 decoration-gray-100 hover:text-white transition-colors"
          >
            youtube
          </Link>
          . i'm also a microsoft learn student ambassador and a young jury at
          awwwards, and i occasionally share what i learn along the way.
        </p> */}
      </header>
      {/* <div className="font-sf-regular justify-start flex gap-2 mt-6">
        <Button variant="default" size="xs" className="h-6 px-2 text-xs rounded-md font-sf-regular font-normal">
          <Link href="/resume" target="_blank">
            resume
          </Link>
        </Button>
        <Button variant="default" size="xs" className="h-6 px-2 text-xs rounded-md font-sf-regular font-normal">
          <Link href="/blog" target="_blank">
            blog
          </Link>
        </Button>
        <Button variant="default" size="xs" className="h-6 px-2 text-xs rounded-md font-sf-regular font-normal">
          <Link href="https://scholar.google.com/citations?user=UOhFyHIAAAAJ&hl=en&oi=ao" target="_blank">
            google scholar
          </Link>
        </Button>
        <Button variant="default" size="xs" className="h-6 px-2 text-xs rounded-md font-sf-regular font-normal" >
          <Link href="https://www.awwwards.com/jury-member/jaswanth-remiel" target="_blank">
            awwwards
          </Link>
        </Button>
      </div> */}
    </motion.div>
  );
}
