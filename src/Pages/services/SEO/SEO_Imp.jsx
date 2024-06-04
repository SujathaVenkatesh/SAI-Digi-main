import React from 'react'
import seoImg from '../../../assets/SEO2.jpg';



const SeoImp = () => {
  return (
    <>
        <section className="container mx-auto py-10">
            <div className="flex flex-col md:flex-row items-center">
                {/* Right Side: Image */}
                <div className="w-full md:w-2/5 p-4 md:p-8">
                    <img src={seoImg} alt="About Us" className="w-full h-auto md:h-[450px] rounded-md" />
                </div>
                {/* Left Side: Digital Marketing Content */}
                <div className="w-full md:w-3/5 p-4 md:p-8">
                <h2 className='text-3xl text-black text-center font-bold pt-5 md:text-left mb-4'>Why SEO is Important</h2>
                   
                    <p className="text-gray-700 text-base md:text-lg mb-3 leading-relaxed text-justify">
                        Don’t build a website that nobody can find! As a top-notch SEO Expert in Raleigh NC, we at MRN Web Designs know it is not enough to have only a web presence. Your potential customers need to find your site when they search. We accomplish this by developing your site with good content, rich meta tags, planned Search Engine Optimization (SEO), and fruitful Google Pay Per Click campaigns.                    
                    </p>
                <h2 className='text-3xl font-bold text-center text-black md:text-left mb-4'>What is SEO</h2>
                   
                    <p className="text-gray-700 text-base md:text-lg mb-3 leading-relaxed text-justify">
                        SEO is the practice of improving and promoting a website to increase the number of visitors the site receives from search engines. There are many aspects to SEO, from the words on your page to the way other sites link to you on the web. In fact, a majority of SEO is done through syndicated content. This is an effective way of adding greater depth and immediacy of information to your web pages, making them more attractive to users.
                    </p>
                    
                </div>
            </div>
            
        </section>
    </>
  )
}

export default SeoImp