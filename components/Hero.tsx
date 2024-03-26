import React from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import Socials from "./Socials";
import profilePic from "../public/icon2.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="py-12 xl:py-24 h-[70vh] xl:pt-28 bg-primary-light
    "
    >
      <div className="container mx-auto">
        <div className="flex flex-row justify-between gap-x-8">
          {/* Hero Content */}
          <div className="max-w-[700px] justify-center mx-auto xl:mx-0">
            <div
              className="text-sm uppercase mb-4 font-semibold text-primary tracking-[4px]
            text-center xl:text-left"
            >
              Software Engineer
            </div>

            <h1 className="text-6xl xl:text-[72px] xl:leading-[80px] tracking-[-2px] font-bold">
              Hello! My name is Jonathan Cho
            </h1>
            <p className="pt-8 pb-8 max-w-[650px] text-muted-foreground font-light text-lg mb-8 mx-auto xl:mx-0">
              I am a dedicated{" "}
              <span className="font-bold">Software Engineer</span> with a
              comprehensive background from the{" "}
              <span className="font-bold">
                University of Washington Tacoma,
              </span>{" "}
              specializing in Computer Science & Systems. With a solid
              foundation in data structures, algorithm design, and system
              architecture, I enjoy building{" "}
              <span className="italic">sites & apps</span>. My focus is{" "}
              <span className="font-bold underline">React (Next.js)</span>.
            </p>

            {/* Buttons */}
            <div className="flex flex-row gap-y-3 md:flex-row gap-x-4 mx-auto xl:mx-0">
              <Link href="/contact">
                <Button className="gap-x-2 h-[56px]">
                  Contact Me
                  <Send size={20} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant={"secondary"} className="gap-x-2 h-[56px]">
                  Download CV
                  <Download size={20} />
                </Button>
              </Link>
            </div>
            <Socials />
          </div>
          <div className="hidden md:flex relative justify-end">
            {/* Hero Image */}
            <div>
              <Image
                className="rounded-full"
                width={400}
                height={400}
                src={profilePic}
                alt="Jonathan Cho"
              />
            </div>
          </div>
        </div>

        {/* Icon */}
        <div className="hidden md:flex justify-center animate-bounce">
          <RiArrowDownSFill className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
