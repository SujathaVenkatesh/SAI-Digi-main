// Home.jsx
import React, { useEffect } from 'react';
import Banner from './Banner';
import Ouerservices from './Ourservices';
import Aboutus from './Aboutus';
import LanguageToggle from './Language';
import Testimonial from './Testimonial';
import Slider from './Slider';
import ImageCarousel from './Slider';
import WhyUs from './WhyUs';
import Counter from './Counter';
// import Vission from './Vission';

function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [])
    return (
        <div>
      <ImageCarousel />
      {/* <Banner/> */}
      <Aboutus/>
      <WhyUs />
      <Counter/>
      <Ouerservices/>
      {/* <LanguageToggle/> */}
      {/* <Vission /> */}
      {/* <Testimonial/> */}
        </div>
    );
}

export default Home;
