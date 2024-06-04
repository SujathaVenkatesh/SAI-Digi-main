import React from 'react';
import BackgroundImageStyle from '../../assets/bannercheck-transformed.jpeg';
 // Assuming the correct path to your background image
// import Gif1 from '../../assets/gif-banner.gif';

function Banner() {
    const cardStyle = {
        backgroundImage: `url(${BackgroundImageStyle})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };
    
    
    return (
  
            <div className="flex flex-col md:flex-row justify-between bg-blue-300 py-12 px-4 md:px-20 banner h-[420px] md:h-[580px]"  style={cardStyle}>
                <div className='md:w-1/2 md:pr-10 md:pt-20 text-white m-14 md:m-0 '>
                    <h1 className="text-2xl md:text-4xl font-bold mb-4">SAI Digiserv Technologies</h1>
                    <h2 className='text-xl md:text-3xl font-bold mb-4'>Transforming Digital Landscapes with Creative Excellence</h2>
                    {/* <p className="text-gray-700 mb-6">The best digital Solutions for Your Business.</p> */}
                    <button className="bg-[#f7931e] hover:bg-[#f7931e] text-white font-bold py-2 px-4 rounded">
                        Learn More
                    </button>
                </div>
                {/* <div className='md:w-1/2 md:pl-10'>
                    <img src={Gif1} alt="No Gif" className='h-full w-100 md:ml-10  md:pt-0 pt-5' />
                </div> */}
               
            </div>
      
    );
}

export default Banner;
