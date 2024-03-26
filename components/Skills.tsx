"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { cn } from "@/lib/utils";

import { skills } from "@/lib/data";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 flex flex-col justify-center max-w-[75rem]"
    >
      <div className="xl:h-[860px] pb-12 xl:py-24">
        <h1 className="font-bold text-2xl flex justify-center">Skills</h1>
        <div>
          <HoverEffect className="bg-foreground rounded-lg" items={skills} />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
