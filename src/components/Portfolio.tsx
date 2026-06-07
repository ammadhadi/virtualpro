import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React from "react";
import BackgroundImage from "./slider/BackgroundImage";
import Slides from "./slider/Slides";
import SlideInfo from "./slider/SlideInfo";
import Controls from "./slider/Controls";
import { Github } from "lucide-react";

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
  view: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

const sliderData = [
  {
    img: "/works/GreenScan.png",
    title: "Green Scan",
    description:
      "GreenScan is a leading building performance consulting firm and independent assessment platform. The organization specializes in evaluating residential and commercial structures against complex regulatory standards to ensure they are environmentally responsible and structurally optimized.",
    location: "Python, Nextjs, Reactjs, NodeJs, API Development, PostgreSQL, Tailwind CSS, ",
    view: "https://greenscan.co.uk/",
  },
  {
    img: "/works/Fourd.jpeg",
    title: "Fourtify Defence",
    description:
      "Fourtify Defence, located at fourd.com.au, is an Australian-owned software platform designed to automate compliance for the Defence Industry Security Program (DISP) and enhance operational efficiency for SMEs. The platform manages governance, cyber compliance, and personnel vetting to streamline complex regulatory requirements.",
    location: "Dot Net Core, Nextjs, Reactjs, NodeJs, API Development, Supabase, PostgreSql, Tailwind CSS",
    view: "https://fourd.com.au/",
  },
  {
    img: "/works/BinSadiq-Web.jpeg",
    title: "Bin Sadiq",
    description:
      "It is a premier, full-service real estate company with over a decade of industry expertise. The company specializes in end-to-end property development, lifetime project management, investment consultancy, asset management, and marketing.",
    location: "Word Press, Elementor, Slider Revolution, PHP",
    view: "https://binsadiqgroup.com.pk/",
  },
  {
    img: "/works/KassandraElements.jpg",
    title: "Kassandra Elements",
    description:
      "It is a free, interactive health prediction tool launched. Closely tied to the Kassandra Wellness Group, it functions as a digital portal for holistic health self-assessment.",
    location: "Word Press, Elementor, Customization, Data Analytics, CSS, JQuery, PHP",
    view: "https://kassandraelements.com/",
  },
  {
    img: "/works/LifeCareServiceAustralia.png",
    title: "Life Care Service Australia",
    description:
      "Life Care Services is a Blacktown-based, accredited NDIS provider delivering personalized supported independent living, community nursing, and social participation programs designed to foster independence. The organization offers comprehensive services, including 24-hour care and support coordination, to assist individuals in achieving their NDIS goals.",
    location: "Word Press, Elementor, Customization, CSS, JQuery, PHP",
    view: "https://www.lifecareservicesaustralia.com.au/",
  },
  {
    img: "/works/NobleCareSupportServices.png",
    title: "Noble Care Support Services",
    description:
      "Noble Care Support Services is a Blacktown-based provider offering tailored home care, aged care, and disability support services across Australia. Specializing in NDIS support coordination, community nursing, and 24/7 personalized care, the organization focuses on maximizing participant funding and fostering independent living.",
    location: "Word Press, Elementor, Customization, CSS, JQuery, PHP",
    view: "https://noblecaresupportservices.com.au/",
  },
  {
    img: "/works/KeysOperation.png",
    title: "Keys Operation",
    description:
      "Keys Operation is a digital coaching and business consulting platform. The business is designed to help entrepreneurs, startups, and small business owners build their online presence and scale in the digital landscape.",
    location: "Word Press, Elementor, Customization, Speed Optimization, Content Creation, SEO Opitmization, CSS, JQuery, PHP",
    view: "https://keysoperation.com/",
  },
  {
    img: "/works/Alasary.JPG",
    title: "Alasary",
    description:
      "Al Asary Carpentry is a premier, family-owned woodworking and custom carpentry workshop. With over 30 years of industry experience, the company specializes in combining traditional woodworking techniques with modern innovation to create durable, high-quality wooden structures and fixtures.",
    location: "Word Press, Elementor, Customization, Speed Optimization, Content Creation, SEO Opitmization, CSS, JQuery, PHP",
    view: "https://alasary.com/",
  },
  {
    img: "/works/PeoplesPhone.jpg",
    title: "Peoples Phone",
    description:
      "Peoples Phone is an established independent telecom price comparison website active since 2008. The platform serves as a digital broker, aggregating market data to help consumers find competitive rates on mobile hardware and monthly connectivity packages.",
    location: "Word Press, Elementor, Customization, API Integration, CSS, JQuery, PHP",
    view: "https://peoplesphone.co.uk/compare/",
  },
  {
    img: "/works/ForsterTareeCranes.png",
    title: "Forster Taree Cranes",
    description:
      "Forster Taree Cranes and Great Lakes Cranes is an established, reliable, and affordable heavy-lifting and crane hire company. The business specializes in supplying mobile equipment and machinery to handle heavy residential, commercial, and industrial rigging projects.",
    location: "Word Press, Elementor, Customization, Speed Optimization, CSS, JQuery, PHP",
    view: "https://forstertareecranes.com/",
  },
  {
    img: "/works/HopeChemicals.png",
    title: "Hope Chemicals",
    description:
      "Hope Chemicals is an established consumer goods company with over 20 years of industry experience, specializing in advanced, household-grade cleaning solutions. The online platform operates as a direct-to-consumer digital store, providing individuals and businesses with dedicated chemical cleaning agents designed for residential upkeep.",
    location: "Word Press, Elementor, Customization, Speed Optimization, CSS, JQuery, PHP",
    view: "https://hopechemicals.com.pk/",
  },
  {
    img: "/works/DingDong.jpg",
    title: "Ding Dong",
    description:
      "It is a specialized, white-label live video streaming platform powered by Online-Webcam.net and managed by SoftService. It acts as a testing and deployment hub for interactive, low-latency webcam site configurations, supporting monetization features like token-based billing and private chats.",
    location: "Java, MySql, HTML, CSS, Javascript, JQuery",
    view: "https://dindo.eu1.online-webcam.net/",
  },
  {
    img: "/works/mstechnical-1.jpeg",
    title: "MS Technical",
    description:
      "MS Technical Services is a certified home appliance repair and commercial plumbing company. With a team of highly trained technicians, the company provides multi-brand diagnostic, repair, and installation services with transparent, upfront pricing.",
    location: "Word Press, Elementor, Customization, CSS, JQuery, PHP",
    view: "https://mstechnicalservice.com/",
  },
  {
    img: "/works/FloRide.jpg",
    title: "FloRide",
    description:
      "In urban planning and transit development, frequently refers to localized micromobility and smart transit programs mapping e-bike sharing, electric scooter networks, and dockless commuter alternatives",
    location: "Laravel, ReactJs, MySql, API Development, HTML, CSS, JavaScript, PHP",
    view: "#",
  },
  // {
  //   img: "/works/dynamatics-1.jpeg",
  //   title: "Dynamatics",
  //   description:
  //     "The earth's geological history opens before your eyes in a mile-deep chasm",
  //   location: "HTML, CSS, JavaScript",
  //   view: "#",
  // },
  // {
  //   img: "/works/portfolio-1.jpeg",
  //   title: "Portfolio",
  //   description:
  //     "Tropical beaches, volcano hikes, ancient temples, and friendly people",
  //   location: "React.js, Next.js, TypeScript, Tailwind CSS",
  //   view: "www",
  // },
  // {
  //   img: "/works/dynamic-1.jpeg",
  //   title: "Dynamic",
  //   description:
  //     "Tropical beaches, volcano hikes, ancient temples, and friendly people",
  //   location: "Word Press",
  //   view: "#",
  // },
];

const initData = sliderData[0];

export default function Home() {
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));

  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  );

  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });

  const handlePrev = () => {
    setData((prevData) => [
      transitionData || initData,
      ...prevData.slice(0, prevData.length - 1),
    ]);

    setCurrentSlideData({
      data: transitionData || sliderData[0],
      index: sliderData.findIndex(
        (ele) => ele.img === data[data.length - 1].img
      ),
    });

    setTransitionData(data[data.length - 1]);
  };

  const handleNext = () => {
    setData((prev) => prev.slice(1));

    setCurrentSlideData({
      data: transitionData || initData,
      index: sliderData.findIndex(
        (ele) => ele.img === data[0].img
      ),
    });

    setTransitionData(data[0]);

    setTimeout(() => {
      setData((newData) => [
        ...newData,
        transitionData || initData,
      ]);
    }, 500);
  };

  return (
    <section id="CaseStudies">
      <main
        className={`${inter.className} relative min-h-screen overflow-hidden text-white antialiased`}
      >
        <AnimatePresence mode="wait">
          <BackgroundImage
            transitionData={transitionData}
            currentSlideData={currentSlideData}
          />

          {/* Content Layer */}
          <div className="relative z-20">
            {/* Heading */}
            <div className="px-5 pt-24 md:px-20 lg:px-40 md:pt-32">
              <h1 className="font-Kanit text-[17px] text-[--company-color] md:text-[20px]">
                Our Work
              </h1>

              <h2 className="mb-8 font-Kanit text-[35px] font-semibold text-white md:text-[45px] lg:text-[55px]">
                Featured Project!
              </h2>
            </div>

            {/* Content Grid */}
            <div className="flex flex-col gap-10 px-5 pb-10 md:grid md:min-h-[60vh] md:grid-cols-10 md:gap-0 md:px-10">
              {/* Left Side */}
              <div className="col-span-6 flex flex-col justify-center">
                <SlideInfo
                  transitionData={transitionData}
                  currentSlideData={currentSlideData}
                  onPrev={handlePrev}
                  onNext={handleNext}
                  totalSlides={sliderData.length}
                />
              </div>

              {/* Right Side */}
              <div className="col-span-6 flex flex-col justify-end">
                <div className="relative z-10">
                  <Slides data={data} />
                </div>
              </div>
            </div>
          </div>
        </AnimatePresence>
      </main>
    </section>
  );
}
