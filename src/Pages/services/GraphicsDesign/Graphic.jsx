// Home.jsx
import React from 'react';
// import GraphicsDesign from './GraphicsDesign';
// import GraphicsDesign2 from './GraphicsDesign2';
import GraphicsDesign001 from './GraphicsDesign001';

function Graphics() {
    return (
        <>
        <div className='w-full h-[230px] grid place-items-center relative' style={{ backgroundImage: `url(${require('../../../assets/baner.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h2 className="text-xl lg:text-3xl font-bold uppercase">Graphic Design</h2>
        <div className="flex items-center mt-2">
            <p className="text-sm"><a href="/">Home</a></p>
            <p className="text-sm mx-2">/</p>
            <p className="text-sm"><a href="/services">Services</a></p>
            <p className="text-sm mx-2">/</p>
            <p className="text-sm" >Graphic Design</p>
        </div>
    </div>
</div>
        <div>
            {/* <GraphicsDesign />
            <GraphicsDesign2 /> */}
            <GraphicsDesign001 />
        </div>
        </>
    );
}

export default Graphics;
