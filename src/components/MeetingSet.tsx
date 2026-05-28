import Image from "next/image";
import Link from "next/link";
import React from "react";

const MeetingSet = () => {
  return (
    <div id="Appointment" className="bg-[--company-background-color]  ">
      <span className="w-[80%] hidden md:block h-[1.5px] bg-[--company-color] mx-auto "></span>
      <div className="pt-[4rem] md:pt-[3rem]">
        <div className="max-w-screen-2xl grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
          <div>
            <h1 className="flex items-center font-Kanit text-[17px] md:text-[20px] text-[--company-color]">
              Contact Us
              {/* <span className="w-[30px] hidden md:block h-[2.5px] bg-[--company-color] rounded-sm ml-2.5 mt-1.5"></span> */}
            </h1>
            <h2 className="text-[35px] md:text-[45px] lg:text-[55px] text-white md:leading-[3rem] leading-[2rem] capitalize mb-[1.5rem] font-Kanit font-semibold">
              Let&apos;s make things happen!
            </h2>
            <div className="mb-8">
              <p className="text-[14px] md:text-[18px] text-justify text-slate-200 font-Kanit w-[100%] font-light ">
                Contact us today to learn more about how our services can help your business grow and succeed online.
              </p>
            </div>
            <div className="flex justify-center">
              <button
                className="h-[50px] w-[150px] hover:-translate-y-[15px] rounded-full transition-all duration-200 text-[14px] 
            sm:text-[18px] font-Kanit text-[--company-background-color] bg-slate-100 hover:bg-[--company-color] border-2 border-[--company-background-color] 
            hover:border-[--company-color] flex items-center justify-center"
              >
                <Link href="/Meeting" rel="noopener noreferrer">
                  Book a Call
                </Link>
              </button>
            </div>
          </div>
          <div
            // data-aos="zoom-in"
            // data-aos-delay="100"
            className="ml-3 md:mx-0 mt-[-1.5rem] md:mt-[-3rem] lg:w-[500px] lg:h-[500px] w-[300px] h-[300px] relative"
          >
            <Image
              priority
              src="/images/appointment.png"
              alt="Development"
              width={600}
              height={600}
              className="relative z-[11] w-[100%] h-[100%] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingSet;
