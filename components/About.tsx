"use client";

import React from "react";
import SectionHeading from "./Headings";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      className="mb-28 max-w-[80rem] text-center leading-8 sm:mb-40 mx-auto"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <div className="text-3xl font-bold pb-4">About me</div>
      <Card className="bg-background dark:bg-black border border-transparent dark:hover:bg-zinc-900 dark:hover:border-slate-900 hover:border/ transition dark:border-white/[0.2 rounded-lg px-10 py-10">
        <CardContent className="text-primary">
          <p className="mb-3">
            Recent graduate with a Bachelor of Arts in Computer Science &
            Systems from the University of Washington Tacoma. My educational
            journey was enriched by courses like Data Structures, Operating
            Systems, and Database Systems Design, where I discovered my{" "}
            <span className="italic">passion for software engineering</span>. I
            particularly enjoy the{" "}
            <span className="underline">problem-solving</span> aspect of
            programming and the thrill of crafting innovative solutions.
          </p>
          <p className="mb-3">
            My technical toolkit includes{" "}
            <span className="font-medium">
              TypeScript, React, Next.js, Java, Python, Prisma,
            </span>{" "}
            and <span className="font-medium">MongoDB</span>, complemented by a
            growing proficiency in <span className="font-medium"></span> and{" "}
            <span className="font-medium">MySQL</span>.
          </p>
          <p className="font-medium">
            Seeking a <span className="font-bold">full-time position</span> as a
            software developer where I can contribute, learn, and grow.
          </p>
        </CardContent>
      </Card>
    </motion.section>
  );
}
