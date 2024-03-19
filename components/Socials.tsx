import Link from "next/link";
import React from "react";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";

const Socials = () => {
  return (
    <div
      className="flex flex-row gap-x-6 mx-auto xl:mx-0 text-foreground text-[35px]
      text-center
    text-2xl
    pt-12
    transition-all"
    >
      <Link
        className="hover:text-muted-foreground dark:text-zinc-400 dark:hover:text-zinc-100"
        href="/"
      >
        <RiGithubFill />
      </Link>
      <Link
        className="hover:text-muted-foreground dark:text-zinc-400 dark:hover:text-zinc-100"
        href="/"
      >
        <RiLinkedinBoxFill />
      </Link>
    </div>
  );
};

export default Socials;
