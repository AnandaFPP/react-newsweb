import React from "react";
import { ReactTyped } from "react-typed";
import NewsBoard from "../NewsBoard/NewsBoard";

const Hero = () => {
  return (
    <>
      <div className="container w-full mx-auto flex flex-col items-center gap-6 py-6 px-6">
        <h1 className="text-6xl font-bold">
          Welcome to the <span className="text-[#ADC4CE]"> Newsweb</span>
        </h1>
        <div className="flex justify-center items-center">
          <p className="text-xl font-medium">
            Stay informed with our latest news updates on
          </p>
          <ReactTyped
            strings={[
              "Business",
              "Entertainment",
              "General",
              "Health",
              "Science",
              "Sports",
              "Technology",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
            className="pl-2 md:text-4xl sm:text-3xl text-xl font-bold text-[#ADC4CE]"
          />
        </div>
        <NewsBoard />
      </div>
    </>
  );
};

export default Hero;
