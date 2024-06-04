// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import Campaign1 from '../../../assets/campaign.jpg';

function FBanner() {
    return (
       <>
        <section className="container mx-auto py-10">
            <div className="flex flex-col lg:flex-row items-center">
                {/* Right Side: Image */}
                <div className="w-full lg:w-2/5 p-4 md:p-8">
                    <img src={Campaign1} alt="About Us" className="w-full h-auto md:h-[450px] rounded-md" />
                </div>
                {/* Left Side: Digital Marketing Content */}
                <div className="w-full lg:w-3/5 p-4 md:p-8">
                <h2 className='text-3xl font-bold text-center md:text-left mb-4'> The Essentials of Social Media Optimization (SMO)</h2>
                    {/* <h2 className='text-[#f7931e] text-center md:text-left text-xl md:text-2xl font-semibold mb-2'>Components of a successful SEM campaign</h2> */}
                   
                    <p className="text-gray-700 text-base md:text-lg mb-3 leading-relaxed">
                    
                     Social Media Optimization (SMO) is the process of optimizing your brand's presence on social media platforms to increase awareness, engagement, and traffic. Unlike Search Engine Optimization (SEO), which focuses on optimizing your website for search engines, SMO focuses on optimizing your social media profiles and content to make them more visible and shareable.
                    </p>
                    <p className="text-gray-700 text-base md:text-lg mb-3 leading-relaxed">
                    One of the key components of SMO is creating high-quality, engaging content that resonates with your target audience. This can include posts, images, videos, and other types of content that are relevant and valuable to your followers. By creating compelling content, you can increase engagement on your social media profiles, leading to more likes, shares, and comments.
                    </p>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    Another important aspect of SMO is building a strong social media presence across multiple platforms. This involves creating and maintaining active profiles on popular social media sites such as Facebook, Twitter, Instagram, LinkedIn, and others. By being active on these platforms and regularly sharing valuable content, you can increase your brand's visibility and reach a larger audience.
                    </p>
                    <Link to="/about" className="text-[#f7931e] text-sm font-semibold mt-2 hover:underline focus:outline-none">Know More</Link>
                </div>
            </div>
        </section>
       </>
    );
}

export default FBanner;
