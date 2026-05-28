import React from "react";
import {
  MdPublic,
  MdAccessTime,
  MdAllInclusive,
  MdAnalytics,
} from "react-icons/md";

const stats = [
  {
    value: "10+",
    label: "Years delivering digital excellence",
  },
  {
    value: "10+",
    label: "Countries served worldwide",
  },
  {
    value: "2014",
    label: "Battle tested, globally proven",
  },
];

const features = [
  {
    icon: <MdPublic size={26} />,
    title: "We work across borders seamlessly",
    desc: "From Dubai to Sydney, Toronto to Cairo, we’ve served clients across 10+ countries with a remote-first workflow built for global collaboration.",
  },
  {
    icon: <MdAccessTime size={26} />,
    title: "10 years of staying ahead of what’s next",
    desc: "We’ve evolved through every major shift in web, mobile, SEO, and marketing since 2014, adapting faster than trend-based agencies.",
  },
  {
    icon: <MdAllInclusive size={26} />,
    title: "One agency. Every digital service.",
    desc: "Design, development, SEO, ads, content, and branding under one roof for faster execution and zero handoff chaos.",
  },
  {
    icon: <MdAnalytics size={26} />,
    title: "We measure everything. Hide nothing.",
    desc: "Transparent reporting, performance tracking, and clear insights so you always know what’s working and why.",
  },
];

const WhyChoose = () => {
  return (
    <section className="w-full bg-[--company-background-color] py-16">
      <span className="w-[80%] hidden md:block h-[1.5px] bg-[--company-color] mx-auto "></span>
      <div className="max-w-screen-2xl mx-auto pt-[4rem] md:pt-[4rem]">

        {/* Header */}
        <div className="mb-14">
          <h1 className="text-[35px] md:text-[45px] lg:text-[55px] text-white capitalize mb-[1.5rem] font-Kanit font-semibold">
            Why Virtual Pro
          </h1>
          <p className="text-white mt-4 mx-auto">
            Trusted by businesses across 10+ countries for over a decade. From the Gulf to Southeast Asia, North America to Europe — we deliver digital solutions that perform anywhere in the world.
          </p>
        </div>

        {/* Regions */}
        <div className="text-sm text-white mb-10">
          UAE, Qatar, Saudi Arabia, Malaysia, Taiwan, Canada, Egypt, Germany, Australia + more
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-center">
          {stats.map((item, i) => (
            <div
              key={i}
              className="p-6 border border-white rounded-xl shadow-sm"
            >
              <h3 className="text-3xl font-bold text-[--company-color]">
                {item.value}
              </h3>
              <p className="text-white mt-2">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 p-6 rounded-xl border border-white hover:shadow-md transition"
            >
              <div className="text-[--company-color] mt-1">{item.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  {item.title}
                </h4>
                <p className="text-white text-sm mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="text-center mt-16">
          <p className="text-white mb-6">
            Join businesses from the Gulf, Southeast Asia, Europe, and beyond
            who trust Virtual Pro to handle their digital growth.
          </p>

          <button className="px-6 py-8 h-3xl w-2xl hover:-translate-y-[15px] rounded-full transition-all duration-200 text-[14px] 
            sm:text-[18px] font-Kanit text-[--company-background-color] bg-slate-100 hover:bg-[--company-color] border-2 border-[--company-background-color] 
            hover:border-[--company-color]">
            Book a free strategy call →
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;