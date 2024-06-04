import React from 'react'
import GraphicsImage from '../../../assets/Graphic1.png';

const GraphicsDesign2 = () => {
  return (
    <>
        {/* <p className='text-3xl text-center text-cyan-800'>Graphics Design Section</p> */}
        <div className='flex flex-row items-center text-center transition ease-in-out delay-150 ml-30 circular1 mt-15'>
            <div>.</div>
            <div>.</div>
            <div>.</div>
            <div>G</div>
            <div>R</div>
            <div>A</div>
            <div>P</div>
            <div>H</div>
            <div>I</div>
            <div>C</div>
            <div>S</div>
            <div>D</div>
            <div>E</div>
            <div>S</div>
            <div>I</div>
            <div>G</div>
            <div>N</div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
        </div>
        <div className='flex flex-row pb-10'>
            <div className='w-1/3'>
                <img style={{ weight: `${500}px`,height: `${500}px` }} src={GraphicsImage} alt="GraphicsImage"/>
            </div>
            <div className='w-1/3 mt-100'>
                <div className='text-3xl text-center text-cyan-800'>Design categories</div>
                <div className='text-md'>
                We are a team of expert logo designers in India and our graphic designers have more than 8 years of experience in offering graphic design services to different types of businesses.
                Our graphic designers listen to your details very carefully and work together to give visualization to your concept.
                We have helped many business owners to get top quality logo design services for their businesses.
                </div>
            </div>
            <div className='w-1/3'>
                <img style={{ weight: `${500}px`,height: `${500}px` }} src={GraphicsImage} alt="GraphicsImage"/>
            </div>
        </div>
        <div className='flex flex-row items-center p-1 mb-2 mr-5 text-4xl text-center transition ease-in-out delay-150 border-black h-2016 w- ml-30 circular1 mt-15'>
            <div>.</div>
            <div>.</div>
            <div>.</div>
            <div>G</div>
            <div>R</div>
            <div>A</div>
            <div>P</div>
            <div>H</div>
            <div>I</div>
            <div>C</div>
            <div>S</div>
            <div>D</div>
            <div>E</div>
            <div>S</div>
            <div>I</div>
            <div>G</div>
            <div>N</div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
        </div>
        <div className="flex flex-row row-gap-5">
            <div className="p-10 m-20 bg-blue-400 hover:bg-green-700">
                Welcome to new Graphic design innovative world
            </div>
            <div className="p-5 text-black border-red-400 w-2/7">We are a team of expert logo designers in India and our graphic designers have more than 8 years of experience in offering graphic design services to different types of businesses.
                Our graphic designers listen to your details very carefully and work together to give visualization to your concept.
                We have helped many business owners to get top quality logo design services for their businesses.</div>
            <div className="p-5 text-black border-red-400 w-2/7">We are a team of expert logo designers in India and our graphic designers have more than 8 years of experience in offering graphic design services to different types of businesses.
                Our graphic designers listen to your details very carefully and work together to give visualization to your concept.
                We have helped many business owners to get top quality logo design services for their businesses.</div>
            <div className="p-5 text-black border-red-400 w-3/7">We are a team of expert logo designers in India and our graphic designers have more than 8 years of experience in offering graphic design services to different types of businesses.
                Our graphic designers listen to your details very carefully and work together to give visualization to your concept.
                We have helped many business owners to get top quality logo design services for their businesses.</div>
        </div>
    </>
  )
}

export default GraphicsDesign2