"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { cn } from "@/lib/utils";

import { skills } from "@/lib/data";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const Skills = () => {
  const { ref } = useSectionInView("Skills");

  return (
    <motion.div
      ref={ref}
      id="skills"
      className="group mb-3 sm:mb-8 last:mb-0 flex flex-col justify-center max-w-[75rem]"
    >
      <div className="xl:h-[860px] pb-12 xl:py-24">
        <h1 className="font-semibold text-3xl flex justify-center pb-4">
          Skills
        </h1>
        <div>
          <HoverEffect className="rounded-lg" items={skills} />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
