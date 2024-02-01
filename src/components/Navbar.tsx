import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-less">
      <div className="flex items-center justify-center">
        <Image src={"/assets/logo.webp"} height={100} width={200} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
