import React from 'react'
import GraphicsImage from '../../../assets/Graphic1.png';

const GraphicsDesign = () => {
  return (
    <>
        <h1 className='text-4xl text-center text-cyan-800 font-bold'>Graphics Design Section</h1> 
        
        <div className='flex flex-row pb-10'>
            <div className='w-1/2'>
                <img style={{ width: `${1300}px`,height: `${620}px` }} src={GraphicsImage} alt="GraphicsImage"/>
            </div>
            <div className='w-1/2 mt-100'>
                <div className='text-2xl font-semibold text-center text-cyan-800'>Design categories</div>
                <div className='text-md mt-5'>
                &nbsp; &nbsp; &nbsp; &nbsp;We are a team of expert logo designers in India and our graphic designers have more than 8 years of experience in offering graphic design services to different types of businesses.
                Our graphic designers listen to your details very carefully and work together to give visualization to your concept.
                We have helped many business owners to get top quality logo design services for their businesses.
                We are a team of expert logo designers in India and our graphic designers have more than 8 years of experience in offering graphic design services to different types of businesses.
                Our graphic designers listen to your details very carefully and work together to give visualization to your concept.
                We have helped many business owners to get top quality logo design services for their businesses.
                </div>
                <ol>
                    <li>We are a team of expert logo designers in India and our graphic designers have more than 8 years of experience in offering graphic design services to different types of businesses.</li>
                    <li>Our graphic designers listen to your details very carefully and work together to give visualization to your concept.</li>
                    <li>We have helped many business owners to get top quality logo design services for their businesses.</li>
                    <li>Our graphic designers listen to your details very carefully and work together to give visualization to your concept.</li>
                    <li>We have helped many business owners to get top quality logo design services for their businesses.</li>
                </ol>
                <div>
                &nbsp; &nbsp;&nbsp; &nbsp;We are a team of expert logo designers in India and our graphic designers have more than 8 years of experience in offering graphic design services to different types of businesses.
                Our graphic designers listen to your details very carefully and work together to give visualization to your concept.
                We have helped many business owners to get top quality logo design services for their businesses.
                We are a team of expert logo designers in India and our graphic designers have more than 8 years of experience in offering graphic design services to different types of businesses.
                Our graphic designers listen to your details very carefully and work together to give visualization to your concept.
                We have helped many business owners to get top quality logo design services for their businesses.
                </div>
            </div>
        </div>
       
        <div className="flex flex-row row-gap-5">
            <div className="p-10 m-20 bg-blue-400 hover:bg-green-700">
                Welcome to new Graphic design innovative world
            </div>
            <div className="p-5 text-black border-red-400 w-2/7">
                <div className='text-2xl font-semibold text-center text-cyan-800'>Category 1</div>
                We are a team of expert logo designers in India and our graphic designers have more than 8 years of experience in offering graphic design services to different types of businesses.
                Our graphic designers listen to your details very carefully and work together to give visualization to your concept.
                We have helped many business owners to get top quality logo design services for their businesses.
            </div>
            <div className="p-5 text-black border-red-400 w-2/7">
                <div className='text-2xl font-semibold text-center text-cyan-800'>Category 2</div>
                We are a team of expert logo designers in India and our graphic designers have more than 8 years of experience in offering graphic design services to different types of businesses.
                Our graphic designers listen to your details very carefully and work together to give visualization to your concept.
                We have helped many business owners to get top quality logo design services for their businesses.
            </div>
            <div className="p-5 text-black border-red-400 w-3/7">
                <div className='text-2xl font-semibold text-center text-cyan-800'>Category 3</div>
                We are a team of expert logo designers in India and our graphic designers have more than 8 years of experience in offering graphic design services to different types of businesses.
                Our graphic designers listen to your details very carefully and work together to give visualization to your concept.
                We have helped many business owners to get top quality logo design services for their businesses.
            </div>
        </div>
    </>
  )
}

export default GraphicsDesign