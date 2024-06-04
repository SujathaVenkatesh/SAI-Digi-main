import { useState, useEffect } from "react";
import img1 from "../../assets/bg-1.png";
import img2 from "../../assets/bg-2.png";
import img3 from "../../assets/bg-3.png"; 

export default function ImageCarousel() {
  const slides = [img1, img2, img3];

  return (
    <div className="relative">
      <div className="w-full">
        <Carousel slides={slides} autoSlide={true} autoSlideInterval={3000} />
      </div>
    </div>
  );
}

function Carousel({ slides, autoSlide = false, autoSlideInterval = 3000 }) {
  const [curr, setCurr] = useState(0);

  // const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="overflow-hidden relative md:h-auto"> {/* Adjust the height as needed */}
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <img key={index} src={slide} alt={`Slide ${index}`} className="w-full h-full object-cover flex-shrink-0" />
        ))}
      </div>
   
     

      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`
              transition-all w-3 h-3 bg-white rounded-full mx-1
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
