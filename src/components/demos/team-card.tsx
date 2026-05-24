import React from "react";
import Image from "next/image";

const teamcard = [
  {
    sequence: 1,
    img: "",
    name: "Ammad Hadi",
    title: "CEO & COO",
    description: "",
    social: "Instagram",
  },
  {
    sequence: 2,
    img: "",
    name: "Tahir Usman",
    title: "CTO",
    description: "",
    social: "Face Book",
  },
  {
    sequence: 3,
    img: "",
    name: "Nawaz Malik",
    title: "Digital Marketer ",
    description: "",
    social: "Linkdin",
  },
  {
    sequence: 4,
    img: "",
    name: "Noman Anwar",
    title: "Developer",
    description: "",
    social: "Linkdin",
  },
];

const TeamCard = () => {
  return (
    <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto ">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-10">
        {teamcard.map((teamcard) => (
          <div
            key={teamcard.sequence}
            className=" font-Kanit flex flex-col justify-between h-full w-[40vh] space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-110 transition-transform rounded-md"
          >
            {/* <Image
                src={teamcard.img}
                width={10000}
                height={10000}
                className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                alt="image"
              /> */}
            <h1 className="font-Kanit text-xl font-medium">{teamcard.name}</h1>
            <h2>{teamcard.title}</h2>
            <p className="font-Kanit text-gray-500">{teamcard.description}</p>
            <div className="bg-slate-400 mx-auto px-4">{teamcard.social}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
