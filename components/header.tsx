"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Newsreader } from "next/font/google";
import ListeningSection from "./listening";

const newsreader = Newsreader({ subsets: ["latin"], weight: ["300"] });

export function Header() {
  return (
    <motion.div>
      <header className="space-y-3">
        <div className="flex items-start">
          <Image
            src="/images/logo.webp"
            alt="Jaswanth Remiel Logo"
            width={40}
            height={40}
            className="mr-4 "
          />
        </div>
        <br></br>
        <h1>
          <span>Jaswanth Remiel</span>
        </h1>
        <p className={`${newsreader.className} text-gray-100`}>
          where art meets code, I create digital experiences that captivate and
          empower, merging aesthetic brilliance with cutting-edge technology.
          Every pixel and line of code is a deliberate stroke, shaping intuitive
          solutions that resonate with users.
        </p>
        <p className={`${newsreader.className} text-gray-100`}>
          as a Microsoft Learn Student Ambassador, I share my passion for
          technology and innovation through engaging content, inspiring a global
          community of creators on my channel,{" "}
          <Link
            href={"https://www.youtube.com/@remielgraphy"}
            className="underline text-gray-100 decoration-gray-100"
          >
            remielgraphy
          </Link>
          .
        </p>
      </header>
      <p className={`${newsreader.className} text-gray-100 mt-4`}>
        now listening to
      </p>
      <ListeningSection />
    </motion.div>
  );
}
