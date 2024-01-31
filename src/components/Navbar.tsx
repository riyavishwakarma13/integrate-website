import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0">
      <Image src={"/assets/logo.webp"} height={50} width={50} alt="" />
    </nav>
  );
};

export default Navbar;
