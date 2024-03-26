import Hero from "@/components/Hero";
import Image from "next/image";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Hero />

        <About />

        <Projects />

        <Skills />
      </div>
    </>
  );
}
