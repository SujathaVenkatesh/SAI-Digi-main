import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import os1 from '../../assets/os1.gif';
import os2 from '../../assets/os2.gif';
import os3 from '../../assets/os3.gif';
import os4 from '../../assets/os4.gif';
import os5 from '../../assets/os5.gif';
import os6 from '../../assets/os6.gif';

function Ouerservices() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className='bg-[#fbfaf8] pt-10'>
            <h1 className='md:text-3xl text-xl text-[#f7931e] text-center font-semibold pt-5'>Our Services</h1>
            <div className="p-8 mt-8 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:p-20">
                <ServiceBox
                    title="WEB-APP Development"
                    description="Increase your website's visibility in search engine results pages through paid advertising campaigns."
                    link="/"
                    image={os1}
                />
                <ServiceBox
                    title="Video Editing"
                    description="Create visually appealing graphics for your brand, including logos, banners, and marketing materials."
                    link="/"
                    image={os2}
                />
                <ServiceBox
                    title="SEO"
                    description="Improve your website's visibility on search engines and drive organic traffic with our SEO services"
                    link="/seo"
                    image={os3}
                />
                <ServiceBox
                    title="SMM"
                    description="Enhance your brand's presence and engage with your audience on social media platforms."
                    link="/smm"
                    image={os4}
                />
                <ServiceBox
                    title="SMO"
                    description="Drive traffic and increase brand awareness through strategic search engine marketing and social media optimization."
                    link="/smo"
                    image={os5}
                />
                <ServiceBox
                    title="SEM"
                    description="Increase your website's visibility in search engine results pages through paid advertising campaigns."
                    link="/sem"
                    image={os6}
                />
            </div>
        </div>
    );
}

function ServiceBox({ title, description, link, image }) {
    return (
        <div className='pb-10' data-aos="fade-up">
            <div className="m-4 p-6 rounded-lg shadow-lg md:h-[460px] hover:border-[#f7931e] border transition-colors duration-300">
                <div data-aos="fade-right">
                    <img src={image} alt={title} className="mb-4 rounded-lg h-40 w-full object-cover" />
                </div>
                <div >
                    <h3 className="text-lg text-[#f7931e] font-bold mb-2">{title}</h3>
                    <p className='text-gray-700 text-justify h-[130px]'>{description}</p>
                </div>
                <div className="flex" >
                    <Link to={link} className="mt-4 bg-white text-[#f7931e] font-semibold px-6 py-2 rounded-lg hover:bg-[#f7931e] hover:text-white transition-colors duration-300 flex items-center">
                        More Details <svg xmlns="http://www.w3.org/5000/svg" className="h-5 w-5 ml-2 transform -rotate-90" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 2a1 1 0 0 1 1 1v3.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L9 7.586V4a1 1 0 0 1 1-1z" clipRule="evenodd" /></svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Ouerservices;
