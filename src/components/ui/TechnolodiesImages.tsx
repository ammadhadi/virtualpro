import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  alt: string;
  title: string;
}

const TechnolodiesImages = ({ image, alt, title }: Props) => {
  return (
    <div className="flex flex-col text-center items-center justify-between h-full">
      <div className="flex items-center justify-center h-40 w-full mb-8">
        <Image
          src={image}
          alt={alt}
          width={150}
          height={150}
          className="max-h-full w-auto object-contain mx-auto"
        />
      </div>
      <h1 className="text-[15px] text-white uppercase font-Kanit font-semibold mt-auto">
        {title} 
      </h1>
    </div>
  );
};

export default TechnolodiesImages;
