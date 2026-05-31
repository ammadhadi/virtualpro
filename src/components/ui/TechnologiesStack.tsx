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
      autoPlaySpeed={10000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      <TechnolodiesImages image="/icons/html-icon.svg" alt ="HTML" title = "HTML" />
      <TechnolodiesImages image="/icons/materialui.svg" alt ="MaterialUI" title = "MaterialUI" />
      <TechnolodiesImages image="/icons/css-icon.svg" alt ="CSS3" title = "CSS3" />
      <TechnolodiesImages image="/icons/tailwind-css-icon.svg" alt ="Tailwind" title = "Tailwind" />
      <TechnolodiesImages image="/icons/javascript.svg" alt ="Javascript" title = "Javascript" />
      <TechnolodiesImages image="/icons/jquery.svg" alt ="Jquery" title = "Jquery" />
      <TechnolodiesImages image="/icons/typescript.svg" alt ="Typescript" title = "Typescript" />
      <TechnolodiesImages image="/icons/angular-icon.svg" alt ="Angular" title = "Angular" />
      <TechnolodiesImages image="/icons/vue-js-icon.svg" alt ="Vue" title = "Vue" />
      <TechnolodiesImages image="/icons/nextjs.svg" alt ="Nextjs" title = "Nextjs" />
      <TechnolodiesImages image="/icons/nestjs.svg" alt ="Nestjs" title = "Nestjs" />
      <TechnolodiesImages image="/icons/react-js-icon.svg" alt ="ReactJs" title = "ReactJs" />
      <TechnolodiesImages image="/icons/nodejs.svg" alt ="Nodejs" title = "Nodejs" />
      <TechnolodiesImages image="/icons/python.svg" alt ="Python" title = "Python" />
      <TechnolodiesImages image="/icons/dotnet.svg" alt ="DotNet" title = "DotNet" />
      <TechnolodiesImages image="/icons/php.svg" alt ="PHP" title = "PHP" />
      <TechnolodiesImages image="/icons/codeigniter.svg" alt ="Codeigniter" title = "Codeigniter" />
      <TechnolodiesImages image="/icons/laravel.svg" alt ="Laravel" title = "Laravel" />
      <TechnolodiesImages image="/icons/wordpress-icon.svg" alt ="Wordpress" title = "Wordpress" />
      <TechnolodiesImages image="/icons/graphql.svg" alt ="Graphql" title = "Graphql" />
      <TechnolodiesImages image="/icons/mongodb.svg" alt ="Mongodb" title = "Mongodb" />
      <TechnolodiesImages image="/icons/postgresql.svg" alt ="PostgreSQL" title = "PostgreSQL" />
      <TechnolodiesImages image="/icons/microsoft-sql-server.svg" alt ="SQLServer" title = "SQLServer" />
      <TechnolodiesImages image="/icons/mysql.svg" alt ="MySql" title = "MySql" />
      <TechnolodiesImages image="/icons/power-bi.svg" alt ="PowerBI" title = "PowerBI" />
      <TechnolodiesImages image="/icons/android.svg" alt ="Android" title = "Android" />
      <TechnolodiesImages image="/icons/apple.svg" alt ="iOS" title = "iOS" />
      <TechnolodiesImages image="/icons/reactnative.svg" alt ="ReactNative" title = "ReactNative" />
      <TechnolodiesImages image="/icons/flutter-dart.svg" alt ="Flutter - Dart" title = "Flutter - Dart" />
    </Carousel>
  );
};

export default TechnologiesStack;
