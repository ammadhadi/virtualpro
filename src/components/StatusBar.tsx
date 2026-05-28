import React from "react";
import { MdWork, MdPeople, MdPublic, MdInsights } from "react-icons/md";

const stats = [
  {
    id: 1,
    icon: <MdWork size={28} />,
    value: "45+",
    label: "Projects Delivered",
  },
  {
    id: 2,
    icon: <MdPeople size={28} />,
    value: "30+",
    label: "Happy Clients",
  },
  {
    id: 3,
    icon: <MdInsights size={28} />,
    value: "12+",
    label: "Years of Experience",
  },
  {
    id: 4,
    icon: <MdPublic size={28} />,
    value: "10+",
    label: "Countries Served",
  },
];

const StatsBar = () => {
  return (
    <section className="w-full bg-[--company-background-color] py-16">
      <span className="w-[80%] hidden md:block h-[1.5px] bg-[--company-color] mx-auto "></span>
      <div className="max-w-screen-2xl mx-auto pb-[4rem] pt-[4rem] md:pt-[4rem]">
        <h1 className="text-[35px] md:text-[45px] lg:text-[55px] text-white capitalize mb-[1.5rem] font-Kanit font-semibold">
            Our Key Facts
        </h1>
        <p className="text-white text-lg mb-10 mx-auto">
          From startups to growing businesses, companies worldwide trust VirtualPro to build scalable digital solutions that perform
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              <div className="text-[--company-color] mb-3">{item.icon}</div>
              <h3 className="text-2xl font-bold text-white">
                {item.value}
              </h3>
              <p className="text-white text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <span className="w-[80%] hidden md:block h-[1.5px] bg-[--company-color] mx-auto "></span>
    </section>
  );
};

export default StatsBar;