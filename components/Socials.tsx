import Link from "next/link";
import React from "react";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";

const Socials = () => {
  return (
    <div
      className="flex flex-row gap-x-8 mx-auto xl:mx-0 text-foreground text-[48px]
      text-center
    pt-12
    transition-all"
    >
      <Link
        className="hover:text-muted-foreground dark:text-zinc-400 dark:hover:text-zinc-100
        focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
        href="https://github.com/jon-jc"
      >
        <RiGithubFill />
      </Link>
      <Link
        className="hover:text-muted-foreground dark:text-zinc-400 dark:hover:text-zinc-100
        focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
        href="https://www.linkedin.com/in/jon-jc/"
      >
        <RiLinkedinBoxFill />
      </Link>
    </div>
  );
};

export default Socials;
