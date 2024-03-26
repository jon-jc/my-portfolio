import Image from "next/image";
import React from "react";

type Props = {};

const Projects = () => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
  max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-primary text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x 
      snap-mandatory z-20"
      >
        {/* Projects */}
        {projects.map((project, index) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col
          space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            key={index}
          >
            <Image
              src="/icon2.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <div className="space-y-8 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl text-center tracking-[8px]">
                <span className="">
                  Project {index + 1} of {projects.length}
                </span>
              </h4>

              <p className="text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates architecto dolore nam incidunt asperiores nihil!
                Ducimus magni repudiandae eius, nobis aperiam ullam impedit
                repellendus temporibus qui doloribus atque dicta minus.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#000000]/10 left-0 h-[500px] -skew-y-12 "></div>
    </div>
  );
};

export default Projects;
