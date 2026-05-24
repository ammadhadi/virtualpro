import React from "react";
import TeamCard from "./demos/team-card";

const Team = () => {
  return (
    <div
      className="bg-[--company-background-color] pb-[4rem] pt-[4rem] md:pt-[4rem]"
      // style={{ backgroundImage: `url(${"/images/textured-transparent.png"})` }}
    >
      <div className="flex items-center gap-10 md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto ">
        <div className="w-[200%]">
          <h1 className="flex items-center font-Kanit text-[17px] md:text-[20px] text-[--company-color]">
            Meet the Experts Behind Your Success
            <span className="w-[30px] hidden md:block h-[2.5px] bg-[--company-color] rounded-sm ml-2.5 mt-1"></span>
          </h1>
          <h2 className="text-[35px] md:text-[45px] lg:text-[55px] text-white md:leading-[3rem] leading-[2rem] capitalize mb-[1.5rem] font-Kanit font-semibold">
            Our Creative Team
          </h2>
        </div>
        <div className="">
          <p className="text-[14px] md:text-[18px] text-justify text-slate-200 font-Kanit w-[100%] font-light ">
            Our team at Virtual Pro is a group of passionate professionals, each
            bringing unique expertise in web development, mobile app creation,
            graphic design, and digital marketing. Committed to excellence, they
            collaborate to deliver innovative solutions that drive your business
            forward, ensuring quality and creativity in every project.
          </p>
        </div>
      </div>
      <TeamCard />
    </div>
  );
};

export default Team;
