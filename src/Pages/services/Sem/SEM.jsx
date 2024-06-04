import React from 'react';
import BackgroundImage from '../../../assets/SEM2.png';
import Sem23 from '../../../assets/Sem23.jpg';

const SEM = () => {
    const cardStyle1 = {
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className='w-full gap-6 lg:flex text-white md:py-32 py-14 px-4 md:px-12' style={cardStyle1}>
            <div className='lg:w-1/2 w-full lg:pr-8'>
                <h1 className='md:text-5xl text-3xl font-bold mb-4'>What is Search Engine Marketing (SEM)?</h1>
                <h2 className='md:text-3xl text-2xl font-semibold mb-2'>Definition of SEM</h2>
                <p className='text-justify text-lg pb-5'>Search Engine Marketing, as the name suggests, is any form of marketing for search engines.</p>
                <p className='text-justify text-lg '> SEM consists of a number of techniques and tools that allow certain web pages to appear higher in search engine results. Results can be achieved through effective advertising campaigns on Google (Google Ads) or other similar search engines. By doing this, companies get more online exposure and manage to capture their target audience more effectively and successfully.</p>
            </div>
            <div className='lg:w-1/2 w-full mt-4 lg:mt-0'>
                <img src={Sem23} alt="SEM" className='rounded-xl shadow-xl lg:h-[450px]' />
            </div>
        </div>
    );
};

export default SEM;
