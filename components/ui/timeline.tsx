"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 40%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans relative isolate" ref={containerRef} style={{ position: "relative" }}>
      <div className="mx-auto py-2 px-0">
        <h2 className="text-sm font-medium text-[#86868b] uppercase tracking-wide mb-6">experience</h2>
        <p className="text-[#f5f5f7] text-base leading-relaxed tracking-tight">
          always curious and ready for a challenge, i&apos;ve ventured through
          design, development, and ai, collecting unusual skills along the way.
          my journey connects creative storytelling with hands-on engineering,
          all powered by an unstoppable urge to learn. from building cool
          digital products to moderating wild content, every project has
          sharpened my problem-solving superpowers.
        </p>
      </div>

      <div ref={ref} className="relative mx-auto pb-8 overflow-hidden pt-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-8 md:pt-12 md:gap-1 relative z-10"
          >
            <div className="sticky flex flex-col md:flex-row z-20 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-8 absolute left-0 md:left-0 w-8 rounded-full bg-black flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-[#424245] border border-[#636366]" />
              </div>
              <h3 className="hidden md:block text-base md:pl-16 md:text-lg font-semibold text-[#f5f5f7] tracking-tight">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-16 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-lg mb-4 text-left font-semibold text-[#86868b]">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-4 left-4 top-0 overflow-hidden w-[2px] z-0 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[#424245] to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#86868b] via-[#a1a1a6] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
