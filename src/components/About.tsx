import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { MdWorkspacePremium, MdStars, MdTrendingUp, MdVerified, MdBusinessCenter, MdSupportAgent } from "react-icons/md";
import Link from "next/link";

const About = () => {
  return (
    <div id="About" className="bg-[--company-background-color] pb-[6rem] pt-[4rem] md:pt-[4rem] ">
      <div className="max-w-screen-2xl grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="ml-3 md:mx-0 mt-[-1.5rem] md:mt-[-3rem] lg:w-[500px] lg:h-[500px] w-[300px] h-[300px] relative"
        >
          <Image
            priority
            src="/images/Development.png"
            alt="Development"
            width={500}
            height={500}
            className="relative z-[11] w-[100%] h-[100%] object-contain"
          />
        </div>
        <div>
          <h1 className="flex items-center font-Kanit text-[17px] md:text-[20px] text-[--company-color]">
            About Our Company{" "}
            {/* <span className="w-[30px] hidden md:block h-[2.5px] bg-[--company-color] rounded-sm ml-2.5 mt-1.5"></span> */}
          </h1>
          <h2 className="text-[35px] md:text-[45px] lg:text-[55px] text-white md:leading-[3rem] leading-[2rem] capitalize mb-[1.5rem] font-Kanit font-semibold">
            The Best Choice For Your Successful Business!
          </h2>
          <div className="mb-8">
            <p className="text-[14px] md:text-[18px] text-justify text-slate-200 font-Kanit w-[100%] font-light ">
              VirtualPro was built with one mission to help growing businesses access high-quality digital solutions without paying enterprise-level agency prices. 
              Since 2014, we have partnered with clients across 10+ countries to build websites, apps, brands, and digital systems designed not only to look professional but to deliver real business results.
              Behind VirtualPro is a team of developers, designers, and digital strategists focused on performance, scalability, and long term growth. We donot believe in launching projects and disappearing. 
              We stay, optimize, improve, and grow with our clients. Over the years, we have successfully delivered projects for businesses across industries helping them strengthen their digital presence, improve operations, and generate measurable growth.
              <br/>
              <br/>
              <b>Why Clients Choose VirtualPro</b>
              <br/>
              <br/>
            </p>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex gap-3 items-center">
                <MdWorkspacePremium
                  size={35}
                  className="text-white rounded-full p-2 shadow-md"
                />
                <p className="text-white font-Kanit text-sm font-medium">
                  10+ Years of Industry Experience
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <MdStars
                  size={35}
                  className="text-white rounded-full p-2 shadow-md"
                />
                <p className="text-white font-Kanit text-sm font-medium">
                  Clients Served Across 10+ Countries
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <MdTrendingUp
                  size={35}
                  className="text-white rounded-full p-2 shadow-md"
                />
                <p className="text-white font-Kanit text-sm font-medium">
                  Performance Driven Approach
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <MdVerified
                  size={35}
                  className="text-white rounded-full p-2 shadow-md"
                />
                <p className="text-white font-Kanit text-sm font-medium">
                  Affordable Solutions Without Compromising Quality
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <MdBusinessCenter
                  size={35}
                  className="text-white rounded-full p-2 shadow-md"
                />
                <p className="text-white font-Kanit text-sm font-medium">
                  Long Term Partnership Mindset
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <MdSupportAgent
                  size={35}
                  className="text-white rounded-full p-2 shadow-md"
                />
                <p className="text-white font-Kanit text-sm font-medium">
                  End-to-End Digital Support
                </p>
              </div>
            </div>
            {/* <div className="flex items-center justify-center gap-10 mx-10 my-10">
              <div className="flex items-center justify-center gap-3">
                <Image
                  priority
                  src="/images/coding-monitor.svg"
                  alt="Website Development"
                  width={50}
                  height={50}
                  className="relative z-[11] object-contain"
                />
                <h1 className="text-white font-Kanit text-[14px] md:text-[18px] ">
                  Website Designing and Development
                </h1>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Image
                  priority
                  src="/images/responsive-tablet.svg"
                  alt="Android and iOs"
                  width={50}
                  height={50}
                  className="relative z-[11] object-contain"
                />
                <h1 className="text-white font-Kanit text-[14px] md:text-[18px] ">
                  Android and iOs Apps Development
                </h1>
              </div>
            </div> */}
            <p className="text-[14px] md:text-[18px] text-justify text-slate-200 font-Kanit w-[100%] font-light ">
              <br/>
              Ready to Build Something That Actually Grows Your Business? 
              <br/>Let&apos;s turn your ideas into scalable digital solutions backed by global experience and measurable results
            </p>
          </div>
          <div className="flex justify-center">
            <button
              className="h-[50px] w-[300px] hover:-translate-y-[15px] rounded-full transition-all duration-200 text-[14px] 
            sm:text-[18px] font-Kanit text-[--company-background-color] bg-slate-100 hover:bg-[--company-color] border-2 border-[--company-background-color] 
            hover:border-[--company-color] flex items-center justify-center"
            >
              <Link href="/Meeting" target="_blank" rel="noopener noreferrer">
                Get a Free Consultation Now
              </Link>
              <ArrowUpRight className=" w-[1.5rem] h-[1.5rem] text-[--company-background-color]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
