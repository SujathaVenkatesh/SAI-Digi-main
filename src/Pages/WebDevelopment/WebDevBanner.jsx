import React from "react";
import webBanner from "../../assets/webBanner.png";

const WebDevBanner = () => {
  return (
    <div
      className="overlay-container flex flex-col justify-center items-center w-full h-[200px] md:h-[300px]"
      style={{
        backgroundImage: `url(${webBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="overlay-content text-white">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x infinite font-extrabold">
          WEB-APP Development
        </h1>
        <p className="text-[18px] md:text-[24px] text-center p-10">
          Get free ideas for your business growth and learn why a website is
          important for your business
        </p>
      </div>
    </div>
  );
};

export default WebDevBanner;
