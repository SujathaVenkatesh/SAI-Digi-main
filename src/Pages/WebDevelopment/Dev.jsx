import React from 'react';
import dev from '../../assets/dev.png';

const Dev = () => {
  return (
    <div className="p-6 lg:p-10 m-5">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0 md:mr-5">
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-[#f7931e]">Web-App Development</span> in creating websites & digital marketing that fit your needs.
          </h2>
          <p className="text-justify">
            With years of experience in digital marketing, we offer tailored strategies to meet your unique goals. Our results-driven approach, coupled with creative solutions, ensures your brand stands out. We prioritize transparent communication and customer satisfaction, aiming to exceed expectations and take your digital marketing to new heights.
          </p>
        </div>
        <div className="md:w-1/2 xl:px-20">
          <img src={dev} alt="dev" className="w-full h-auto lg:h-[300px]  lg:ml-20" />
        </div>
      </div>
    </div>
  );
};

export default Dev;
