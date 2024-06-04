import React from 'react';
import EcomImg from '../../assets/ecomm.png';
import DynImg from '../../assets/dynPage.png';
import StatImg from '../../assets/staticWeb.png';
import AppImg from '../../assets/appD.png';

const OurServices = () => {
  return (
    <div className='bg-orange-400 p-5  flex flex-col md:flex-row justify-center'>
      <div className="w-full md:w-3/5 p-4 md:p-8 grid place-content-center flex-1">
        <h2 className='text-3xl font-bold text-center md:text-left mb-4 text-white lg:mb-10'>Services</h2>
        <p className="text-white text-justify md:text-lg leading-10">
          With two years of experience in digital marketing, we offer tailored strategies to meet your unique goals. Our results-driven approach, coupled with creative solutions, ensures your brand stands out. We prioritize transparent communication and customer satisfaction, aiming to exceed expectations and take your digital marketing to new heights.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 w-full md:w-2/5 p-4 md:p-8 flex-1">
        <div className='bg-white text-orange-500 h-[200px] flex flex-col items-center justify-center rounded-md p-3'>
          <img src={EcomImg} alt="E-Commerce Website" className='h-[138px]'/>
          <p className='text-center'>E-Commerce Website</p>
        </div>
        <div className='bg-white text-orange-500 h-[200px] flex flex-col items-center justify-center rounded-md p-3'>
          <img src={DynImg} alt="Dynamic Website" className='h-[138px]'/>
          <p className='text-center'>Dynamic Website</p>
        </div>
        <div className='bg-white text-orange-500 h-[200px] flex flex-col items-center justify-center rounded-md p-3'>
          <img src={StatImg} alt="Static Website" className='h-[138px]'/>
          <p className='text-center'>Static Website</p>
        </div>
        <div className='bg-white text-orange-500 h-[200px] flex flex-col items-center justify-center rounded-md p-3'>
          <img src={AppImg} alt="App Development" className='h-[138px]'/>
          <p className='text-center'>App Development</p>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
