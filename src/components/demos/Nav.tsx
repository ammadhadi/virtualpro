import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="fixed w-full top-0 z-[10000] bg-white/10 backdrop-blur-md border-b border-white/10 h-24">
      <div className="flex items-center justify-between w-[85%] mx-auto h-full">
        <Link
          href="/"
          className="flex-[0.7] cursor-pointer flex items-center"
        >
          <Image
            src="/logo/logo.png"
            width={400}
            height={400}
            alt="Icon"
            className="h-16 w-auto object-contain"
          />
        </Link>
        <Link href="/WhoWeAre" className="nav-link">
          ABOUT Us
        </Link>
        <Link href="/ServicePage" className="nav-link">
          SERVICES
        </Link>
        <Link href="#" className="nav-link">
          CASE STUDIES
        </Link>
        <Link href="#" className="nav-link">
          CAREERS
        </Link>
        <Link href="/ContactUs" className="nav-link">
          CONTACT US
        </Link>
        <div onClick={openNav}>
          <Menu className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-white hover:text-[--company-color]" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
