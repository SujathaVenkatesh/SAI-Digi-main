// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import Campaign1 from '../../../assets/campaign.jpg';

function Campaign() {
    return (
       <>
        <section className="container mx-auto py-10">
            <div className="flex flex-col md:flex-row items-center">
                {/* Right Side: Image */}
                <div className="w-full md:w-2/5 p-4 md:p-8">
                    <img src={Campaign1} alt="About Us" className="w-full h-auto md:h-[450px] rounded-md" />
                </div>
                {/* Left Side: Digital Marketing Content */}
                <div className="w-full md:w-3/5 p-4 md:p-8">
                <h2 className='text-3xl font-bold text-center md:text-left mb-4'>How does a SEM Campaign Work?</h2>
                    <h2 className='text-[#f7931e] text-center md:text-left text-xl md:text-2xl font-semibold mb-2'>Components of a successful SEM campaign</h2>
                   
                    <p className="text-gray-700 text-base md:text-lg mb-3 leading-relaxed">
                    Search Engine Marketing (SEM) today the most powerful and efficient tools available in terms of digital marketing. The best argument for this claim is that SEM is completely different from traditional marketing channels.
                    </p>
                    <p className="text-gray-700 text-base md:text-lg mb-3 leading-relaxed">
                    SEM is a strategy of pull marketing that segments and directs in a more efficient and precise way compared to traditional push advertising – such as TV and print media ads. That’s because people have an intent to looking for your products/services – that is, they are or will be demanding what you have to offer. Conversely, TV and print media just flood the market and push products onto a wider audience. This can be viewed as less effective and more costly.
                    </p>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    Furthermore, Google Ads decides which ads will appear next on the results page of a search engine. In order for your ad to be added to the top results, you must have a Google Ads campaign. Your campaign we must define specific keywords that you would like Google to associate with your product or service.
                    </p>
                    <Link to="/about" className="text-[#f7931e] text-sm font-semibold mt-2 hover:underline focus:outline-none">Know More</Link>
                </div>
            </div>
        </section>
       </>
    );
}

export default Campaign;
