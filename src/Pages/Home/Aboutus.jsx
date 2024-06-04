import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import About from '../../assets/Abou-logo.png';
import Abougif from '../../assets/Aboutusgi.gif';

function Aboutus() {
    return (
        <section className="container md:mt-20 bg-[#fafafa] mx-auto py-10">
            <div className="flex flex-col lg:flex-row items-center">
                {/* Right Side: Image */}
                <div className="w-full lg:w-1/2 p-4 md:p-8 relative">
                    <img
                        src={About}
                        alt="About Us"
                        className="w-full h-full md:w-[430px]  md:h-[400px] object-cover rounded-md"
                    />
                    <img
                        src={Abougif}
                        alt=""
                        className="absolute top-0 left-0 w-full h-full md:w-[500px] md:h-[500px] object-cover rounded-md"
                    />
                </div>
                
                {/* Left Side: Digital Marketing Content */}
                <div className="w-full lg:w-1/2 p-4 md:p-8">
                    <h2 className="text-3xl font-bold text-center md:text-left mb-4">
                       <span className='text-[#f7931e]'> We specialize</span> in creating websites & digital Marketing that fit your budget perfectly.
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg text-justify leading-relaxed">
                        With years of experience in digital marketing, we offer tailored strategies to meet your unique goals. Our results-driven approach, coupled with creative solutions, ensures your brand stands out. We prioritize transparent communication and customer satisfaction, aiming to exceed expectations and take your digital marketing to new heights. Our expertise allows us to deliver measurable results, and our commitment to innovation sets us apart. Partner with us to unleash the full potential of your brand in the digital landscape.
                    </p>
                    <Link to="/about" className="text-[#f7931e] text-sm font-semibold mt-2 hover:underline focus:outline-none">
                        Know More
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Aboutus;
