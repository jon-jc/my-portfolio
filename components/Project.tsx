"use client";
import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number] & {
  projectUrl: string;
};
const Project = ({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
}: ProjectProps) => {
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
      className="group mb-3 sm:mb-8"
    >
      <Link href={projectUrl} passHref>
        <section
          className="group rounded-lg bg-foreground/90 max-w-[58rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:mb-8 hover:bg-foreground
    transition"
        >
          <div className="pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] sm:h-[20rem] flex flex-col h-full  text-secondary">
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
            className="w-full max-w-xs mx-auto rounded-t-lg shadow-2xl transition
            group-hover:scale-110 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2
    sm:max-w-md
    md:absolute md:top-8 md:-right-40 md:w-[28.25rem] md:group-hover:scale-110 md:group-hover:-translate-x-3 md:group-hover:translate-y-3 md:group-hover:-rotate-2
        "
          />
        </section>
      </Link>
    </motion.div>
  );
};

export default Project;
