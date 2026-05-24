import React from "react";
import Image from "next/image";

const service = [
  {
    sequence: 1,
    icon: "/images/s_9.png",
    title: "Web Design & Development",
    description:
      "Take your business to the next level with our web design and development services",
  },
  {
    sequence: 2,
    icon: "/images/s_7.png",
    title: "Mobile App Design & Development",
    description:
      "We develop meaningful interactions between a brand and its audience",
  },
  {
    sequence: 3,
    icon: "/images/s_8.png",
    title: "Graphic Design & Branding",
    description:
      "Our impactful and customer-focused designs enhance your brand presence",
  },
  {
    sequence: 4,
    icon: "/images/s_3.png",
    title: "Social Media Marketing",
    description:
      "Boost your brand's online presence with our social media marketing services",
  },
  {
    sequence: 5,
    icon: "/images/s_1.png",
    title: "Search Engine Optimization",
    description:
      "Get your website to the top of search engine results with our SEO services",
  },
  {
    sequence: 6,
    icon: "/images/s_4.png",
    title: "E-Mail Design & Marketing",
    description:
      "Interact with your customers and increase sales with our email marketing services",
  },
  {
    sequence: 7,
    icon: "/images/s_6.png",
    title: "Data Analytic & Dashboard",
    description:
      "We excel at decoding customer insights and use analytics dashboards to strengthen your online presence",
  },
  {
    sequence: 8,
    icon: "/images/s_5.png",
    title: "Content Creation",
    description:
      "With our content creation services, we help businesses drive results",
  },
  {
    sequence: 9,
    icon: "/images/s_2.png",
    title: "Pay-Per-Click Advertising",
    description:
      "Don't waste money on ineffective advertising. Our PPC services help you reach your target audience",
  },
];

const Service = () => {
  return (
    <div className="  bg-[--company-background-color]">
      <span className="w-[80%] hidden md:block h-[1.5px] bg-[#e4e3e3] mx-auto "></span>
      <div className="pb-[4rem] pt-[4rem] md:pt-[4rem]">
        <div className="max-w-screen-2xl w-[80%] md:px-0 mx-6 md:mx-auto ">
          <h1 className="flex items-center font-Kanit text-[17px] md:text-[20px] text-[--company-color]">
          Premium Digital Services
            <span className="w-[30px] hidden md:block h-[2.5px] bg-[--company-color] rounded-sm ml-2.5 mt-1"></span>
          </h1>
          <h2 className="text-[35px] md:text-[45px] lg:text-[55px] text-white md:leading-[3rem] leading-[2rem] capitalize mb-[1.5rem] font-Kanit font-semibold">
            Solutions We Provide
          </h2>
          <p className="text-[14px] md:text-[18px] text-justify text-slate-200 font-Kanit w-[100%] font-light">
            Elevate your online presence with our comprehensive technology
            solutions, spanning strategic brand development, cutting-edge web
            development, seamless business automation, and targeted branding
            services.
            <br /><br />
            We craft immersive experiences, drive digital growth, and enhance
            your business impact in the digital landscape. Partner with us to
            transform your vision into a compelling online reality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-10">
            {service.map((service) => (
              <div
                key={service.sequence}
                className="font-Kanit flex flex-col justify-between h-full w-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-3xl"
              >
                <Image
                  src={service.icon}
                  width={500}
                  height={500}
                  className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                  alt={service.title}
                />
                <h1 className="font-Kanit text-xl font-medium">
                  {service.title}
                </h1>
                <p className="font-Kanit text-gray-500">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
