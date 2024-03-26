import React from "react";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-foreground-muted">
      <small className="mb-2 block text-xs">&copy; Jonathan Cho.</small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js, TypeScript, Tailwind CSS, Framer Motion.
      </p>
      <div className="flex justify-center">
        <Socials />
      </div>
    </footer>
  );
}
