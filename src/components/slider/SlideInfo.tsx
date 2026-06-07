import React, {useState} from "react";
import { motion } from "framer-motion";
import OtherInfo from "./OtherInfo";
import { Github } from "lucide-react";
import { IoMdBookmark } from "react-icons/io";
import { Data, CurrentSlideData } from "../Portfolio";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
  onPrev: () => void;
  onNext: () => void;
  totalSlides: number;
};

function SlideInfo({ transitionData, currentSlideData, onPrev, onNext, totalSlides }: Props) {

  const openLiveDemoLinkInNewTab = () => {
    // 1. Get the link directly from your data sources
    const targetLink = transitionData ? transitionData?.view : currentSlideData.data?.view;

    // 2. Open it immediately if it exists
    if (targetLink) {
      window.open(targetLink, "_blank", "noopener,noreferrer");
    } else {
      console.warn("Live Demo URL is missing.");
    }
  };

  return (
    <>
      <motion.span layout className="mb-2 h-1 w-5 rounded-full bg-white" />
      <OtherInfo
        data={transitionData ? transitionData : currentSlideData.data}
      />
      {/* <motion.div layout className=" mt-5 flex items-center gap-3">
        <button
          className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-yellow-500 text-xs  transition 
            duration-300 ease-in-out hover:opacity-80 "
        >
          <Github className=" text-xl" />
        </button>
        <button
          onClick={openLiveDemoLinkInNewTab}
          className=" w-fit rounded-full border-[1px] border-[#ffffff8f] px-8 py-3 text-[16px] font-thin transition duration-300 
            ease-in-out hover:bg-white hover:text-black "
        >
            Live Demo
          </button>
      </motion.div> */}

      <motion.div layout className="mt-6 flex flex-wrap items-center gap-4" >
        <button
          onClick={openLiveDemoLinkInNewTab}
          className="rounded-full border border-[#ffffff8f] px-8 py-3 text-[16px] font-thin transition duration-300 hover:bg-white hover:text-black"
        >
          Live Demo
        </button>

        <div className="flex items-center gap-3 font-semibold">
          <button
            onClick={onPrev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ffffff5f] transition hover:bg-white hover:text-black"
          >
            <IoIosArrowBack />
          </button>

          <span className="min-w-[70px] text-center text-sm tracking-wider">
            {String(currentSlideData.index + 1).padStart(2, "0")} /{" "}
            {String(totalSlides).padStart(2, "0")}
          </span>

          <button
            onClick={onNext}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ffffff5f] transition hover:bg-white hover:text-black"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </motion.div>
    </>
  );
}

export default SlideInfo;
