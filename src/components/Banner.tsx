import { ArrowUpRight, PhoneCall } from "lucide-react";
import React from "react";

const Banner = () => {
  return (
    <div className=" w-[100%] pb-[4rem] pt-[4rem] md:pt-[4rem] bg-fixed bg-parallax bg-no-repeat bg-cover bg-center opacity-00">
      <div className="max-w-screen-2xl w-[80%] md:px-0 mx-6 md:mx-auto">
        <h1 className="flex items-center font-Kanit text-[17px] md:text-[20px] font-bold capitalize text-[--company-color]">
          Innovating Beyond Boundaries
          <span className="w-[30px] hidden md:block h-[2.8px] bg-[--company-color] rounded-sm ml-3 mt-1"></span>
        </h1>
        <h2 className="font-Kanit text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize font-bold text-white ">
          Creative Solutions
        </h2>
        <p className="text-[14px] md:text-[18px] text-justify text-white font-Kanit w-[100%] font-light pt-5 ">
          At Virtual Pro, we specialize in crafting creative solutions that go
          beyond conventional approaches. By blending cutting-edge technology
          with innovative design, we transform your ideas into powerful digital
          experiences. Our team thrives on pushing the limits, delivering unique
          and customized solutions that drive growth, engagement, and long-term
          success for your business.
          <br />
        </p>
        <div className="flex justify-center mt-5">
          <button
            className="h-[150px] w-[150px] hover:-translate-y-[15px] rounded-full transition-all duration-200 text-[14px] 
            sm:text-[18px] font-Kanit text-[--company-background-color] bg-transparent hover:bg-[--company-color] border-2 border-[--company-background-color] 
            hover:border-[--company-color] flex items-center justify-center"
          >
            <a href="/" target="_blank" rel="noopener noreferrer">
              Call To Action
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
