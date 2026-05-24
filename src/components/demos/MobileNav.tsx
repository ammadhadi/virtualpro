import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}
const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center space-y-10">
        <Link onClick={closeNav} href="#" className="nav-link-mobile">
          Home
        </Link>
        <Link onClick={closeNav} href="#About" className="nav-link-mobile">
          About
        </Link>
        <Link onClick={closeNav} href="#Tech" className="nav-link-mobile">
          Tech
        </Link>
        <Link onClick={closeNav} href="#Skills" className="nav-link-mobile">
          Skills
        </Link>
        <Link onClick={closeNav} href="#Project" className="nav-link-mobile">
          Projects
        </Link>
        <Link onClick={closeNav} href="#Contact" className="nav-link-mobile">
          Contact
        </Link>
      </div>
      <div
        onClick={closeNav}
        className="absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-[--company-color]"
      >
        <X className="w-[2rem] h-[2rem] top-10 text-white hover:text-[--company-color]"/>
      </div>
    </div>
  );
};

export default MobileNav;
