import React, {useState} from "react";
import { motion } from "framer-motion";
import OtherInfo from "./OtherInfo";
import { Github } from "lucide-react";
import { IoMdBookmark } from "react-icons/io";
import { Data, CurrentSlideData } from "../Portfolio";

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

function SlideInfo({ transitionData, currentSlideData }: Props) {

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
      <motion.span layout className=" mb-2 h-1 w-5 rounded-full bg-white" />
      <OtherInfo
        data={transitionData ? transitionData : currentSlideData.data}
      />
      <motion.div layout className=" mt-5 flex items-center gap-3">
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
      </motion.div>
    </>
  );
}

export default SlideInfo;
