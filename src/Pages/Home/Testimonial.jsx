import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {
  const [numToShow, setNumToShow] = useState(4); // Number of testimonials to show
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CEO, ABC Inc.',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'CMO, XYZ Corp.',
      quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      position: 'Founder, PQR Ltd.',
      quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      id: 4,
      name: 'Bob Brown',
      position: 'CTO, QWE Company',
      quote: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 5,
      name: 'Emma White',
      position: 'COO, ZYX Corp.',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 6,
      name: 'Michael Green',
      position: 'CFO, RST Ltd.',
      quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
    setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', () => setIsMobile(window.innerWidth <= 768));
  }, []);

  const handlePrev = () => {
    setNumToShow(numToShow === 4 ? 6 : 4);
  };

  const handleNext = () => {
    setNumToShow(numToShow === 4 ? 6 : 4);
  };

  return (
    <div className="bg-gray-100 py-8 md:py-12 lg:py-14 relative">
      <h1 className="text-gray-800 text-center font-bold text-[24px] md:text-4xl pl-4 md:pl-20 mb-7 md:mb-4">
       Our Testimonials
      </h1>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${isMobile ? '1' : '4'} gap-6 md:gap-8 lg:gap-10 px-4 md:px-20`}>
        {testimonials.slice(0, numToShow).map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
            <p className="text-lg mb-4">{testimonial.quote}</p>
            <cite className="block font-semibold">{testimonial.name}</cite>
            <span className="block">{testimonial.position}</span>
          </div>
        ))}
      </div>
      {!isMobile && (
        <div className="flex justify-center mt-4">
          <button className="prev bg-[#f7931e] text-white p-2 rounded-full mr-2" onClick={handlePrev}>&#10094;</button>
          <button className="next bg-[#f7931e] text-white p-2 rounded-full" onClick={handleNext}>&#10095;</button>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
