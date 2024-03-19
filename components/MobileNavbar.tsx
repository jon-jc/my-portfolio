import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { AlignJustify } from "lucide-react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Socials from "./Socials";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <Logo />

        <Navbar />

        <Socials />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
