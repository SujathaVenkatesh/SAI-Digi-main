import React from 'react';
import { AiOutlineSearch, AiOutlineRocket } from 'react-icons/ai';
import { BsFillStarFill } from 'react-icons/bs';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Vision = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className="flex  md:justify-between sm:text-center mt-10 mb-10 px-4">
            <div className="flex flex-col justify-between rounded-2xl shadow-lg bg-white text-black p-8 items-center mb-6 h-[400px] w-[300px] md:mr-4">
                <div className="text-5xl mb-4 text-orange-500" data-aos="fade-up">
                    <AiOutlineSearch />
                </div>
                <h2 className="text-2xl font-bold mb-4" data-aos="fade-up">Our Vision</h2>
                <p className="text-justify" data-aos="fade-up">
                    At the heart of our business development vision lies the belief in bridging B2B and B2C domains to foster growth and build enduring connections. We prioritize seamless integration and customer satisfaction, aiming to set new standards in a dynamic marketplace. With a steadfast commitment to excellence, we envision a future where businesses and consumers alike prosper, driven by our dedication to innovation and collaboration.
                </p>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl shadow-lg bg-white text-black p-8 items-center mb-6 h-[400px] w-[300px] md:mx-4">
                <div className="text-5xl mb-4 text-orange-500" data-aos="fade-up">
                    <AiOutlineRocket />
                </div>
                <h2 className="text-2xl font-bold mb-4" data-aos="fade-up">Our Services</h2>
                <p className="text-justify" data-aos="fade-up">
                     Empowering businesses to thrive through strategic business development and impactful branding solutions.
                </p>
            </div>
            <div className="flex flex-col rounded-2xl shadow-lg bg-white text-black p-8 items-center mb-6 h-[400px] w-[300px] md:ml-4">
                <div className="text-5xl mb-4 text-orange-500" data-aos="fade-up">
                    <BsFillStarFill />
                </div>
                <h2 className="text-2xl font-bold mb-4" data-aos="fade-up">Our Mission</h2>
                <p className="text-justify" data-aos="fade-up">
                    Empowering synergy, igniting success our mission in Business Development and Branding
                </p>
            </div>
        </div>
    );
};

export default Vision;
