import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import About from '../../assets/Aboutus.jpg';

function WeDo() {
    return (
        <section className="container mx-auto py-10">
            <div className="flex flex-col md:flex-row items-center">
                {/* Right Side: Image */}
               
                {/* Left Side: Digital Marketing Content */}
                <div className="w-full md:w-3/5 p-4 md:p-8">
                    <h2 className='text-[#f7931e] text-center md:text-left text-xl md:text-2xl font-semibold mb-2'>Why Choose Us</h2>
                    <h2 className='text-3xl font-bold text-center md:text-left mb-4'>Your Partner for Exceptional Digital Marketing</h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        With years of experience in digital marketing, we offer tailored strategies to meet your unique goals. Our results-driven approach, coupled with creative solutions, ensures your brand stands out. We prioritize transparent communication and customer satisfaction, aiming to exceed expectations and take your digital marketing to new heights. Our expertise allows us to deliver measurable results, and our commitment to innovation sets us apart. Partner with us to unleash the full potential of your brand in the digital landscape. Let's work together to create a successful digital marketing strategy that drives growth and maximizes ROI. Your success is our success, and we're dedicated to helping you achieve it.
                    </p>
                    <Link to="/about" className="text-[#f7931e] text-sm font-semibold mt-2 hover:underline focus:outline-none">Know More</Link>
                </div>
                <div className="w-full md:w-2/5 p-4 md:p-8">
                    <img src={About} alt="About Us" className="w-full h-auto md:h-[400px] rounded-md" />
                </div>
            </div>
        </section>
    );
}

export default WeDo;

