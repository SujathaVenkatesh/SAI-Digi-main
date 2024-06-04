import React from 'react';
import imgbox1 from '../../assets/img_box_01.png';
import imgbox2 from '../../assets/img_box_02.png';
import imgbox3 from '../../assets/img_box_03.png';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Mission = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className="flex flex-col justify-center items-center lg:justify-evenly sm:text-center mt-10 mb-10 px-4  lg:flex-row">
            <div className="flex flex-col justify-between rounded-2xl shadow-lg bg-white text-black p-8 items-center mb-6 h-[450px] w-[300px] md:mr-4 hover:bg-[#8576f0] hover:text-white hover:font-bold">
                <div className='w-[150px] mb-5'>
                    <img src={imgbox1} alt='vision'/>
                </div>
                <h2 className="text-2xl font-bold mb-4" data-aos="fade-up">Our Vision</h2>
                <p className="text-justify" data-aos="fade-up">
                    To be the "partner of choice" for customers striving to get the edge in the highly competitive business environment by providing the most innovative solutions to enhance their productivity in terms of increasing sales and saving time.
                </p>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl drop-shadow-xl bg-white text-black p-8 items-center mb-6 h-[450px] w-[300px] md:mx-4 hover:bg-[#f67400] hover:text-white hover:font-bold">
                <div className='w-[150px] mb-5'>
                    <img src={imgbox2} alt='Mission'/>
                </div>
                <h2 className="text-2xl font-bold mb-4" data-aos="fade-up">Our Mission</h2>
                <p className="text-justify" data-aos="fade-up">
                    To provide clever and innovative business solutions to fulfill the business needs of customers all over the world.
                </p>
            </div>
            <div className="flex flex-col rounded-2xl shadow-lg bg-white text-black p-8 items-center mb-6 h-[450px] w-[300px] md:ml-4 hover:bg-[#5ae499] hover:text-white hover:font-bold">
                <div className='w-[150px] mb-5'>
                    <img src={imgbox3} alt='Our values'/>
                </div>
                <h2 className="text-2xl font-bold mb-4" data-aos="fade-up">Our Values</h2>
                <p className="text-justify" data-aos="fade-up">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec suscipit mauris.
                </p>
            </div>
        </div>
    );
};

export default Mission;