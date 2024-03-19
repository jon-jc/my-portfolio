"use client";
import React from "react";
import { motion } from "framer-motion";

interface TemplateProps {
  children: React.ReactNode;
}

const Template: React.FC<TemplateProps> = ({ children }) => {
  return (
    <>
      <motion.main
        initial="hidden"
        animate="visible"
        transition={{
          type: "linear",
          delay: 0.2,
          duration: 0.5,
        }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        {children}
      </motion.main>
    </>
  );
};

export default Template;
