import React from 'react'
import seoImg from '../../../assets/seo.jpg'
import { Link } from 'react-router-dom';


const OffPageSEO = () => {
  
  return (
    <>
            {/* section1 */}
            <div className='bg-black p-5'>
                <section className="md:h-screen flex flex-col justify-center">
                    <h2 className='text-orange-500 text-center text-3xl text-bold md:mb-[50px]'>Off-Page Optimization</h2>
                    <div className="flex flex-col md:flex-row items-center ">
                        {/* Right Side: Image */}
                    
                        {/* Left Side: Digital Marketing Content */}
                        <div className="w-full md:w-3/5 p-4 md:p-8">
                            <h2 className='text-3xl font-bold text-center md:text-left mb-4 text-orange-500'>How Do We Work?</h2>
                            <p className="text-white text-justify text-base md:text-lg leading-relaxed">
                                At SAI Digiserv Technologies, our SEO process is designed to drive organic traffic and improve search engine rankings for your website. We start by conducting a comprehensive audit of your website to identify areas for improvement. Based on the audit findings, we develop a customized SEO strategy tailored to your specific goals and target audience. Our team of SEO experts then begins implementing the strategy, which includes optimizing on-page elements such as meta tags, headings, and content. We also focus on off-page optimization, building high-quality backlinks to improve your website's authority and credibility. Throughout the process, we continuously monitor the performance of your website and make adjustments as needed to ensure optimal results. Our transparent approach means that you are kept informed every step of the way, with regular reports detailing the progress of your SEO campaign.
                            </p>
                            <Link to="/about" className="text-[#f7931e] text-sm font-semibold mt-2 hover:underline focus:outline-none">Know More</Link>
                        </div>
                        <div className="w-full md:w-2/5 p-4 md:p-8 border border-orange-500 rounded-3xl">
                            <img src={seoImg} alt="About Us" className="w-full h-auto md:h-[400px] rounded-md" />
                        </div>
                    </div>
                </section>
            </div>

            
        </>
  )
}

export default OffPageSEO