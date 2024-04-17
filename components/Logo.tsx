import React from "react";
import Image from "next/image";
import LogoImage from "@/public/logo.png";

const Logo = () => {
  return (
    <div className="hidden sm:block">
      <Image src={LogoImage} alt="Logo" height={100} width={100} />
    </div>
  );
};

export default Logo;
