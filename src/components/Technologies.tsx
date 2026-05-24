import React from "react";
import TechnologiesStack from "./ui/TechnologiesStack";

const Technologies = () => {
  return (
    <div className=" bg-[--company-background-color] ">
      <span className="w-[80%] hidden md:block h-[1.5px] bg-[#e4e3e3] mx-auto "></span>
      <div className="pb-[3rem] pt-[4rem] md:pt-[4rem]">
        <div className="max-w-screen-2xl w-[80%] md:px-0 mx-6 md:mx-auto">
          <h1 className="text-[35px] md:text-[45px] lg:text-[55px] text-white capitalize mb-[1.5rem] font-Kanit font-semibold">
            Technologies We Work On
          </h1>
          <div className="pt-[2rem] pb-[2rem]">
            <TechnologiesStack />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
