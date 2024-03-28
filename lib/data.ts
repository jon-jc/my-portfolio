import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import chatImg from "@/public/chat.png";
import socialImg from "@/public/social.png";
import ecomImg from "@/public/clothes.png";
import vectoImg from "@/public/vecto.png";

export const projectsData = [
  {
    title: "HE4RTS",
    description:
      "Developed Twitter-inspired social media platform, applying Agile methodologies to enhance user-centric design.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Prisma",
      "MongoDB",
      "NextAuth",
    ],
    imageUrl: socialImg,
    projectUrl: "https://socialmedia-clone-sable.vercel.app/",
  },
  {
    title: "VectoAI",
    description:
      "AI Icon generator, leveraging OpenAI's DALL-E model to generate unique, custom icons for users, enabling creative, personalized branding for diverse applications.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Prisma",
      "MongoDB",
      "NextAuth",
    ],
    imageUrl: vectoImg,
    projectUrl: "https://dall-e-one-puce.vercel.app/",
  },
  {
    title: "EchoTalk",
    description:
      "Developed a comprehensive full-stack chat application leveraging Next.js and React for the frontend, enabling dynamic, interactive user interfaces with optimized performance, setting the groundwork for community building.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "MySQL"],
    imageUrl: chatImg,
    projectUrl: "https://chat-app-production-1a3a.up.railway.app/sign-up",
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "Developed a multi-vendor e-commerce platform enabling seamless operation and management of diverse online stores, including secure authentication and Stripe for payment processing, emphasizing security and efficiency.",
    tags: ["React", "Next.js", "TypeScript", "Stripe", "MySQL", "Prisma"],
    imageUrl: ecomImg,
    projectUrl: "https://e-commerce-store-sandy.vercel.app/",
  },
];

export const skills = [
  {
    title: "React",
    description:
      "A JavaScript library for building user interfaces, allowing the creation of dynamic, interactive web applications.",
    link: "https://reactjs.org",
  },
  {
    title: "Next.js",
    description:
      "A React framework for production, enabling features like server-side rendering and generating static websites for React-based web applications.",
    link: "https://nextjs.org",
  },
  {
    title: "MySQL",
    description:
      "An open-source relational database management system, known for its reliability, scalability, and the strong community support it offers.",
    link: "https://www.mysql.com",
  },
  {
    title: "MongoDB",
    description:
      "A document-based database program, categorized as a NoSQL database, which uses JSON-like documents with optional schemas.",
    link: "https://mongodb.com",
  },
  {
    title: "Prisma",
    description:
      "A next-generation ORM for Node.js and TypeScript, making database access easy with an auto-generated query builder for TypeScript & Node.js.",
    link: "https://www.prisma.io",
  },
  {
    title: "TypeScript",
    description:
      "A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    link: "https://typescriptlang.org",
  },
];

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
