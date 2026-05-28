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

  return (
    <div className="" id="CaseStudies">
      <main
        className={`
       ${inter.className}
        relative min-h-screen  select-none overflow-hidden text-white antialiased`}
      >
        <AnimatePresence>
          <BackgroundImage
            transitionData={transitionData}
            currentSlideData={currentSlideData}
          />
          <div className="  absolute z-20 h-full w-full">
            <div className="absolute mt-3 w-full px-5 opacity-90 px-auto md:px-20 lg:px-40 pt-[8rem]">
              <h1 className="flex items-center font-Kanit text-[17px] md:text-[20px] text-[--company-color]">
                Our Work
                {/* <span className="w-[30px] hidden md:block h-[2.8px] bg-[--company-color] rounded-sm ml-2.5 mt-1.5"></span> */}
              </h1>
              <h2 className="text-[35px] md:text-[45px] lg:text-[55px] text-white md:leading-[3rem] leading-[2rem] capitalize mb-[1.5rem] font-Kanit font-semibold">
                Featured Project!
              </h2>
            </div>
            <div className="mt-32 flex h-full w-full grid-cols-10 flex-col md:grid">
              <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
                <SlideInfo
                  transitionData={transitionData}
                  currentSlideData={currentSlideData}
                />
              </div>

              <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
                <Slides data={data} />
                <Controls
                  currentSlideData={currentSlideData}
                  data={data}
                  transitionData={transitionData}
                  initData={initData}
                  handleData={setData}
                  handleTransitionData={setTransitionData}
                  handleCurrentSlideData={setCurrentSlideData}
                  sliderData={sliderData}
                />
              </div>
            </div>
          </div>
        </AnimatePresence>
      </main>
    </div>
  );
}

const sliderData = [

  {
    img: "/works/BinSadiq-Web.jpeg",
    title: "BinSadiq",
    description:
      "The journey to Machu Picchu typically starts in the mountain city of Cusco, which was the capital city of the Inca Empire",
    location: "Word Press, Elementor, Slider Revolution",
    view: "https://binsadiqgroup.com.pk/",
  },
  {
    img: "/works/dynamatics-1.jpeg",
    title: "Dynamatics",
    description:
      "The earth's geological history opens before your eyes in a mile-deep chasm",
    location: "HTML, CSS, JavaScript",
    view: "www.dynamatics.co",
  },
  {
    img: "/works/portfolio-1.jpeg",
    title: "Portfolio",
    description:
      "Tropical beaches, volcano hikes, ancient temples, and friendly people",
    location: "React.js, Next.js, TypeScript, Tailwind CSS",
    view: "www",
  },
  {
    img: "/works/KassandraElements.jpg",
    title: "Kassandra Elements",
    description:
      "Wild animals in their natural environment, luxury safari lodges",
    location: "HTML, CSS, JavaScript",
    view: "www",
  },
  {
    img: "/works/DingDong.jpg",
    title: "Ding Dong",
    description:
      "A stunning ancient jungle city with hundreds of intricately constructed temples",
    location: "Word Press",
    view: "www",
  },
  {
    img: "/works/dynamic-1.jpeg",
    title: "Dynamic",
    description:
      "Tropical beaches, volcano hikes, ancient temples, and friendly people",
    location: "Word Press",
    view: "www",
  },
  {
    img: "/works/FloRide.jpg",
    title: "FloRide",
    description:
      "Tropical beaches, volcano hikes, ancient temples, and friendly people",
    location: "HTML, CSS, JavaScript",
    view: "www",
  },
  {
    img: "/works/mstechnical-1.jpeg",
    title: "MS Technical",
    description:
      "Tropical beaches, volcano hikes, ancient temples, and friendly people",
    location: "Word Press",
    view: "www",
  },
  {
    img: "/works/PeoplesPhone.jpg",
    title: "PeoplesPhone",
    description:
      "Tropical beaches, volcano hikes, ancient temples, and friendly people",
    location: "HTML, CSS, JavaScript",
    view: "www",
  },
];

const initData = sliderData[0];
