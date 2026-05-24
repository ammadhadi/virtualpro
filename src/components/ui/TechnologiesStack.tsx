import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TechnolodiesImages from "./TechnolodiesImages";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const TechnologiesStack = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={2000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      <TechnolodiesImages image="/icons/wordpress-icon.svg" alt ="Wordpress" title = "Wordpress" />
      <TechnolodiesImages image="/icons/html-icon.svg" alt ="HTML" title = "HTML" />
      <TechnolodiesImages image="/icons/css-icon.svg" alt ="CSS3" title = "CSS3" />
      <TechnolodiesImages image="/icons/javascript.svg" alt ="Javascript" title = "Javascript" />
      <TechnolodiesImages image="/icons/typescript.svg" alt ="Typescript" title = "Typescript" />
      <TechnolodiesImages image="/icons/angular-icon.svg" alt ="Angular" title = "Angular" />
      <TechnolodiesImages image="/icons/vue-js-icon.svg" alt ="Vue" title = "Vue" />
      <TechnolodiesImages image="/icons/nextjs.svg" alt ="Nextjs" title = "Nextjs" />
      <TechnolodiesImages image="/icons/react-js-icon.svg" alt ="ReactJs" title = "ReactJs" />
      <TechnolodiesImages image="/icons/nodejs.svg" alt ="Nodejs" title = "Nodejs" />
      <TechnolodiesImages image="/icons/tailwind-css-icon.svg" alt ="Tailwind" title = "Tailwind" />
      <TechnolodiesImages image="/icons/graphql.svg" alt ="Graphql" title = "Graphql" />
      <TechnolodiesImages image="/icons/mongodb.svg" alt ="Mongodb" title = "Mongodb" />
    </Carousel>
  );
};

export default TechnologiesStack;
