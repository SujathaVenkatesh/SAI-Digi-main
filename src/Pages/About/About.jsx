// Home.jsx
import React, { useEffect } from 'react';
// import Banner from './Banner';
import Mission from './Mission';
import WeDo from './WeDo';
import WhyUs from './WhyUs';
import Testimonial from './Testimonial';

function About() {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, [])
    return (
       <>
        <div className='w-full h-[230px] grid place-items-center relative' style={{ backgroundImage: `url(${require('../../assets/baner.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h2 className="text-xl lg:text-3xl font-bold uppercase">About Us</h2>
        <div className="flex items-center mt-2">
            {/* <p className="text-sm"><a href="/">Home</a></p>
            <p className="text-sm mx-2">/</p> */}
            <p className="text-sm"><a href="/">Home</a></p>
            <p className="text-sm mx-2">/</p>
            <p className="text-sm" >About Us</p>
        </div>
    </div>
</div>
       <div>
    {/* <Banner/> */}
    <Mission />
    <WeDo />
    <Testimonial/>
    <WhyUs />
       </div>
       </>
    );
}

export default About;
