import React from "react";
import Image from "next/image";
import { AnimatedBeamMultipleOutputDemo } from "./animated-beam-demo";
import BoxRevealDemo from "./box-reveal-demo";

const Process = () => {
  return (
    <div className="md:px-0 mx-6 md:mx-auto">
      <h1 className=" text-[25px] md:text-[35px] lg:text-[45px] text-[--company-background-color] font-Kanit font-semibold  md:text-center flex items-center gap-x-2 mx-auto justify-center">
        Our{" "}
        <span className="text-[--company-color] flex gap-x-1 items-center">
          {" "}
          <Image
            src={"/icons/squiggle.svg"}
            width={10000}
            height={10000}
            className="w-6"
            alt="image"
          />
          Creative
          <Image
            src={"/icons/star.svg"}
            width={10000}
            height={10000}
            className=" w-6 mb-8"
            alt="image"
          />
        </span>{" "}
        Process
      </h1>

      <p className="font-Kanit text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
        All of our services are designed to help your business to get noticed.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <AnimatedBeamMultipleOutputDemo />
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
          <BoxRevealDemo />
        </div>
      </div>
    </div>
  );
};

export default Process;
