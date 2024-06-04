import React, { useEffect } from 'react';
import smmImg from '../../../assets/smo.jpg';
import { FaFacebook, FaYoutube, FaPinterest, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom'; 
const OnPageSEO = () => {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, [])
    return (
        <>
        <div className='w-full h-[230px] grid place-items-center relative' style={{ backgroundImage: `url(${require('../../../assets/baner.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h2 className="text-xl lg:text-3xl font-bold uppercase">Social Media Marketing</h2>
        <div className="flex items-center mt-2">
            <p className="text-sm"><a href="/">Home</a></p>
            <p className="text-sm mx-2">/</p>
            <p className="text-sm"><a href="/services">Services</a></p>
            <p className="text-sm mx-2">/</p>
            <p className="text-sm" >Social Media Marketing</p>
        </div>
    </div>
</div>

            <div>
            <section className="container  mx-auto py-10">
            <div className="flex flex-col md:flex-row items-center">
                {/* Right Side: Image */}
                <div className="w-full md:w-2/5 p-4 md:p-8">
                    <img src={smmImg} alt="About Us" className="w-full h-auto md:h-[450px] rounded-md" />
                </div>
                {/* Left Side: Digital Marketing Content */}
                <div className="w-full md:w-3/5 p-4 md:p-8">
                <h2 className='text-3xl font-bold text-justify md:text-left mb-4'>What Are Social Media Marketing Services?</h2>
                    {/* <h2 className='text-[#f7931e] text-center md:text-left text-xl md:text-2xl font-semibold mb-2'>Components of a successful SEM campaign</h2> */}
                   
                    <p className="text-gray-700 text-base md:text-lg mb-3 leading-relaxed"> 
                   Social media marketing services encompass a range of strategies and techniques designed to promote businesses and brands on social media platforms. These services typically include creating and managing social media profiles, developing content calendars, crafting engaging posts, and interacting with followers. They also involve utilizing paid advertising on platforms like Facebook, Instagram, Twitter, LinkedIn, and others to reach a wider audience and achieve specific marketing goals.
                    </p>
                    <p className="text-gray-700 text-base md:text-lg mb-3 leading-relaxed">
                    One key aspect of social media marketing is audience engagement, which involves responding to comments and messages, conducting polls and surveys, and fostering conversations around the brand. Another important component is social media analytics, where data is collected and analyzed to measure the effectiveness of campaigns, track user engagement, and identify areas for improvement. Additionally, social media marketing services often include influencer partnerships, where brands collaborate with popular social media personalities to promote their products or services to their followers.
                    </p>
                    {/* <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    Furthermore, Google Ads decides which ads will appear next on the results page of a search engine. In order for your ad to be added to the top results, you must have a Google Ads campaign. Your campaign we must define specific keywords that you would like Google to associate with your product or service.
                    </p> */}
                    <Link to="/about" className="text-[#f7931e] text-sm font-semibold mt-2 hover:underline focus:outline-none">Know More</Link>
                </div>
            </div>
        </section>
            </div>
            
            <div className='shadow-xl rounded-xl'>
                <h2 className='font-bold text-2xl text-center mt-8'>Our Social Media Services Include Promotion On Following Platforms</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-auto max-w-6xl mx-auto mt-8">
                    <ServiceBox
                        icon={<FaFacebook className="text-[#3b5998] w-12 h-12 mx-auto" />}
                        title="Facebook Advertising"
                        description="When it comes to ensuring optimum audience interaction, Facebook advertising campaigns enable marketers to highlight both text and images during the ad campaign. You can target your audience based on their personal preferences, location, and topography, as well as the amount you want to pay per click or per mille (cost per 1000 impressions). Facebook has nearly 900 million users who put in more than 700 billion minutes every month."
                    />
                    <ServiceBox
                        icon={<FaYoutube className="text-[#ff0000] w-12 h-12 mx-auto" />}
                        title="YouTube Advertising"
                        description="YouTube has a great audience over any cable network and is considered the second most popular search engine. A YouTube marketing campaign allows marketers to focus on their target audience, unlike when you advertise on television. Furthermore, advertising on YouTube is as simple as linking your AdWords account."
                    />
                    <ServiceBox
                        icon={<FaPinterest className="text-[#bd081c] w-12 h-12 mx-auto" />}
                        title="Pinterest Advertising"
                        description="Experience the power of pins and pin boards to help your business get the most out of your Pinterest Investment."
                    />
                    <ServiceBox
                        icon={<FaInstagram className="text-[#c13584] w-12 h-12 mx-auto" />}
                        title="Instagram Advertising"
                        description="Leverage the power of one of the most amazing and growing social media platforms ‘Instagram’ to foster your brand’s identity through quality Instagram marketing services in India."
                    />
                    <ServiceBox
                        icon={<FaTwitter className="text-[#1da1f2] w-12 h-12 mx-auto" />}
                        title="Twitter Advertising"
                        description="Twitter lets you specify the goal of your business marketing campaign, such as Twitter engagements (likes retweets, and, replies), website clicks, app installs or engagements, followers, or even leads, and it only costs you when the activity you requested happens. Twitter also allows for a daily budget limit and a maximum cost per action."
                    />
                    <ServiceBox
                        icon={<FaLinkedin className="text-[#0077b5] w-12 h-12 mx-auto" />}
                        title="LinkedIn Advertising"
                        description="Our LinkedIn advertising services target B2B customers specifically. LinkedIn members are responsible for around four out of every five company decisions, and they have two times the purchasing power of other social media sites. LinkedIn Ads come with two payment choices: cost per click and cost per thousand impressions (cost per mile)."
                    />
                </div>
            </div>
            </>
    );
};



const ServiceBox = ({ icon, title, description }) => {
    return (
        <div className='pb-10 transform transition-transform duration-300 hover:scale-110'>
            <div className="flex-1 my-4 md:my-0 p-6 rounded-lg shadow-lg hover:border-[#FFA500] border transition-colors duration-300">
                <div className="flex items-center justify-center mb-4">{icon}</div>
                <h3 className="text-xl md:text-2xl text-[#FFA500] font-bold mb-2 text-center">{title}</h3>
                <p className='text-gray-700 text-justify h-[350px] md:h-[300px] xl:h-[250px]'>{description}</p>
            </div>
        </div>
    );
}

export default OnPageSEO;
