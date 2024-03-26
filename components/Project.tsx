"use client";
import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        className="group rounded-lg bg-foreground/90 max-w-[58rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:mb-8 even:pl-8 hover:bg-foreground
    transition"
      >
        <div className="pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] sm:h-[20rem] flex flex-col h-full last:mb-0 group-even:ml-[25rem] text-secondary">
          <h3 className="text-2xl font-bold text-secondary">{title}</h3>
          <p className="mt-2 leading-relaxed text-secondary/80">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-secondary/[0.3] px-3 py-2 tracking-wider uppercase rounded-full text-[0.7rem]"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Projects I worked on"
          className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        group-even:-right-[initial] group-even:-left-40
        group-hover:scale-105
        group-even:right-[initial]

        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2
        transition
        "
        />
      </section>
    </motion.div>
  );
};

export default Project;
