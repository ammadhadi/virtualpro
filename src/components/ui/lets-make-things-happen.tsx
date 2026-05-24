import React from "react";

import Image from "next/image";
import Link from "next/link";

function LetsMakeThingsHappenSection() {
  return (
    <section className="my-10 md:py-20 md:mx-auto rounded-[45px] p-[50px] md:p-[60px] relative">
      <div className="md:pr-[22rem]">
        <p
          className="text-[35px] md:text-[45px] lg:text-[55px] text-white md:leading-[3rem] leading-[2rem] 
          capitalize mb-[1.5rem] font-Kanit font-semibold"
        >
          Get an Appointment Today
        </p>

        <p className="text-[14px] md:text-[18px] text-justify text-slate-200 font-Kanit w-[100%] font-light">
          Contact us today to learn more about how our digital services can help
          your business grow and succeed online.
        </p>
        <div className="flex justify-center mt-5">
          <Link
            href="/Meeting"
            className="h-[50px] w-[150px] hover:-translate-y-[15px] rounded-full transition-all duration-200 text-[14px] 
            sm:text-[18px] font-Kanit text-[--company-background-color] bg-slate-100 hover:bg-[--company-color] border-2 border-[--company-background-color] 
            hover:border-[--company-color] flex items-center justify-center"
          >
            Book a Call
          </Link>
        </div>
      </div>
      <div className="absolute -top-8 right-8 hidden md:block">
        <Image
          src="/images/appointment.png"
          alt="proposal illustration"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}

export default LetsMakeThingsHappenSection;
