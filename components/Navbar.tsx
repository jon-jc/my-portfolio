"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/about",
    name: "About Me",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

const Navbar = () => {
  const path = usePathname();
  return (
    <div className="flex items-center gap-x-6">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className="relative hover:text-primary transition-all"
        >
          {link.path === path && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className="absolute left-0 top-full h-[3px] bg-primary w-full"
            />
          )}
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
