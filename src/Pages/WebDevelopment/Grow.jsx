import React from "react";
import grow from '../../assets/grow.png';

const Grow = () => {
  return (
    <div className="p-6 lg:p-15 bg-[#f4f4f4]">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0 xl:px-20 ">
          <img src={grow} alt="Grow" className="w-full h-auto lg:h-[300px]  lg:mr-20 " />
        </div>
        <div className="md:w-1/2 md:pl-6">
          <h2 className="text-2xl font-bold mb-4 text-[#f7931e]">
            We Grow Your Business's Online Presence
          </h2>
          <p className="text-justify">
            With two years of experience in digital marketing, we offer tailored
            strategies to meet your unique goals. Our results-driven approach,
            coupled with creative solutions, ensures your brand stands out. We
            prioritize transparent communication and customer satisfaction, aiming
            to exceed expectations and take your digital marketing to new heights.
            Our expertise allows us to deliver measurable results, and our commitment
            ensures long-term growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Grow;
