"use client";
import SectionHeading from "./Headings";
import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects");
  return (
    <section ref={ref} id="projects">
      <SectionHeading>Projects</SectionHeading>
      <div className="flex flex-col justify-center items-center">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
