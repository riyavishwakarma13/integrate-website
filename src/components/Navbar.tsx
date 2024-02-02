import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-2 bg-primary shadow-less">
      <div className="flex items-center justify-center">
        <Image
          src={"/assets/logo.webp"}
          height={150}
          priority
          width={300}
          alt="logo"
        />
      </div>
    </nav>
  );
};

export default Navbar;
