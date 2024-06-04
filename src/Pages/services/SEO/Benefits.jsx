import React from 'react';
import { IoAnalyticsSharp, IoBarChartOutline, IoChatbubblesOutline, IoCashOutline, IoGlobeOutline } from "react-icons/io5";

const Benefits = () => {
  const benefitsData = [
    { title: "Increase Website Traffic", icon: <IoAnalyticsSharp style={{ height: '60px', width: '60px' }} /> },
    { title: "Better Conversion Rate", icon: <IoBarChartOutline style={{ height: '60px', width: '60px' }} /> },
    { title: "More User friendly website", icon: <IoChatbubblesOutline style={{ height: '60px', width: '60px' }} /> },
    { title: "Cost Efficient", icon: <IoCashOutline style={{ height: '60px', width: '60px' }} /> },
    { title: "Increase Brand Awareness", icon: <IoGlobeOutline style={{ height: '60px', width: '60px' }} /> }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center md:text-left mb-4">Benefits of SEO</h2>
      <p className="mb-6 text-base md:text-lg leading-relaxed">SEO stands for “search engine optimization” and it is the process of getting traffic from search engines through the “free,” “organic,” or “natural listing” on the search engines.</p>

      <div className="grid w-full place-items-center grid-cols-1 sm:grid-cols-2  md:grid-cols-1 lg:grid-cols-3  gap-6">
        {/* Map through the benefitsData array to render each benefit */}
        {benefitsData.map((benefit, index) => (
          <div key={index} className="grid place-items-center p-5 hover:bg-orange-400  hover:scale-110 hover:rounded-xl h-[320px] w-[380px] shadow-2xl transition-all duration-300">
          {benefit.icon}
          <h3 className="text-xl mb-3 leading-relaxed relative">
            {benefit.title}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-400  transform  transition-all duration-300 origin-left"></div>
          </h3>
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default Benefits;
