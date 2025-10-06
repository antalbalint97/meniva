"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import * as React from "react";

export type AnimatedCredoProps = {
  text?: string;
  className?: string;
  stagger?: number;
  resetOnLeave?: boolean; // <- re-run when you scroll back
  underline?: boolean;
  underlineWidth?: number;
};

export default function AnimatedCredo({
  text = "We drive real impact through innovative, human-centered systems—taking you from data to deployment with integrated thinking that fits your people, tech, and strategy.",
  className = "max-w-4xl text-center text-2xl md:text-3xl leading-snug text-gray-900",
  stagger = 0.035,
  resetOnLeave = true,
  underline = true,
  underlineWidth = 160,
}: AnimatedCredoProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    // Trigger when ~55% visible; tweak as you like
    amount: 0.55,
    // Use rootMargin if you want earlier/later triggers
    // rootMargin: "-10% 0% -10% 0%",
  });

  const controls = useAnimation();
  const lineControls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("show");
      lineControls.start("lineShow");
    } else if (resetOnLeave) {
      controls.set("hidden");
      lineControls.set("lineHidden");
    }
  }, [inView, controls, lineControls, resetOnLeave]);

  const words = React.useMemo(() => text.split(" "), [text]);

  // Parent variants (just controls timing)
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: stagger, when: "beforeChildren" },
    },
  };

  const word = {
    hidden: { y: 8, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
  };

  const line = {
    lineHidden: { width: 0, opacity: 0 },
    lineShow: {
      width: underlineWidth,
      opacity: 1,
      transition: { duration: 0.55, ease: "easeOut", delay: 0.1 },
    },
  };

  return (
    <div ref={ref} className="flex flex-col items-center">
      <motion.p
        variants={container}
        initial="hidden"
        animate={controls}
        className={className}
      >
        {words.map((w, i) => (
          <motion.span key={`${w}-${i}`} variants={word} className="inline-block mr-2">
            {w}
          </motion.span>
        ))}
      </motion.p>

      {underline && (
        <motion.div
          variants={line}
          initial="lineHidden"
          animate={lineControls}
          className="mt-6 h-[3px] rounded-full bg-gradient-to-r from-black/90 to-black/30"
          style={{ width: underlineWidth }}
        />
      )}
    </div>
  );
}
