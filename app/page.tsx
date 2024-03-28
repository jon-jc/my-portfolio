import Hero from "@/components/Hero";
import Image from "next/image";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Header from "@/components/Header";
import SectionDivider from "@/components/section-divider";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Contact />
      </div>
    </>
  );
}
