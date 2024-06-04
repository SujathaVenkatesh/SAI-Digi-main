import React, { useState, useEffect } from 'react';
// import AnimatedIcon from './AnimatedIcon';
const Counter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCount1((prevCount) => Math.min(prevCount + 1, 24));
    }, 50); // Update every 500 milliseconds (0.5 seconds)
    return () => clearInterval(interval1);
  }, []);

  useEffect(() => {
    const interval4 = setInterval(() => {
      setCount4((prevCount) => Math.min(prevCount + 1, 200));
    }, 5); // Update every 500 milliseconds (0.5 seconds)
    return () => clearInterval(interval4);
  }, []);

  useEffect(() => {
    const interval2 = setInterval(() => {
      setCount2((prevCount) => Math.min(prevCount + 1, 30));
    }, 50); // Update every 500 milliseconds (0.5 seconds)
    return () => clearInterval(interval2);
  }, []);

  useEffect(() => {
    const interval3 = setInterval(() => {
      setCount3((prevCount) => Math.min(prevCount + 1, 13));
    }, 50); // Update every 500 milliseconds (0.5 seconds)
    return () => clearInterval(interval3);
  }, []);

  return (
    <div className='flex flex-col md:flex-col lg:flex-row items-center justify-center md:mx-8 lg:my-8 md:my-10 my-0 mx-2  shadow-lg shadow-white pt-0 pb-6 md:pb-0 lg:pt-0 space-y-10 lg:space-y-0'>
 {/* Destop view */}
     
        <div className="text-center text-orange-400 mb-4 mt-1 lg:mb-0 lg:mr-0 md:mr-8 md:w-1/3">
            <span className="text-4xl md:text-6xl  text-darkBlue text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                    class="w-40 h-40 animate-bounce translate-y-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
            </span>
            <span className="text-4xl md:text-6xl font-bold text-darkBlue text-center">{count1}</span>
            <span className="text-4xl md:text-6xl font-bold text-blue ml-4 md:mr-2">+</span>
            <p className="text-countertext  text-center text-xl md:text-[17px] mt-2">Successfull Project</p>
        </div>
        <div className="text-center text-orange-400 mb-4 mt-1 lg:mb-0 lg:mr-0 md:mr-8 md:w-1/3">
            <span className="text-4xl md:text-6xl font-bold text-darkBlue text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                    class="w-40 h-40 animate-bounce translate-y-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
            </span>
            <span className="text-4xl md:text-6xl font-bold text-darkBlue text-center">{count2}</span>
            <span className="text-4xl md:text-6xl font-bold text-blue ml-2 md:mr-2">+</span>
            <p className="text-countertext  text-center text-xl md:text-[17px] mt-2">Happy Clients</p>
        </div>
        <div className="text-center text-orange-400 mb-4 mt-1 lg:mb-0 lg:mr-0 md:mr-8 md:w-1/3">
            <span className="text-4xl md:text-6xl font-bold text-darkBlue text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                    class="w-40 h-40 animate-bounce hover:animate-pulse">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
            </span>
            <span className="text-4xl md:text-6xl font-bold text-darkBlue text-center">
        
            </span> 

            <span className="text-4xl md:text-6xl font-bold text-darkBlue text-center">{count3}</span>
            <span className="text-4xl md:text-6xl font-bold text-blue ml-2 md:mr-2">+</span>
            <p className="text-countertext font-semibold text-center text-xl md:text-[17px] mt-2">Client Reviews</p>
        </div>


      {/* <div className=' hidden md:hidden lg:block text-center mb-4 mt-1 lg:mb-0 lg:mr-0  md:mr-8 md:w-1/4'>
        <span className='text-4xl md:text-6xl font-bold text-darkBlue text-center'>{count4}</span>
        <span className='text-4xl md:text-6xl font-bold text-blue ml-2 md:mr-2'>%</span>
        <p className='text-countertext font-semibold text-center text-xl md:text-[17px] mt-2'>Year on Year<br />Growth</p>
      </div> */}
      
      {/* Mobile view */}
      
{/*       
      <div className=' lg:hidden md:block text-center shadow-xl w-full mx-4 py-2 md:mx-4  '>
        <span className='text-4xl md:text-6xl font-bold text-darkBlue'>{count1}</span>
        <span className='text-4xl md:text-6xl font-bold text-blue ml-2 md:mr-2'>+</span>
        <p className='text-countertext font-semibold text-center text-xl md:text-[17px] mt-2'>Year' of Experience</p>
      </div>
      <div className=' lg:hidden md:block text-center shadow-xl w-full mx-4 py-2 md:mx-4  '>
        <span className='text-4xl md:text-6xl font-bold text-darkBlue text-center'>{count2}</span>
        <span className='text-4xl md:text-6xl font-bold text-blue ml-2 md:mr-2'>+</span>
        <p className='text-countertext font-semibold text-center text-xl md:text-[17px] mt-2'>Crores Successfully Raised</p>
      </div>
      <div className=' lg:hidden md:block text-center shadow-xl w-full mx-4 py-2 md:mx-4  '>
        <span className='text-4xl md:text-6xl font-bold text-darkBlue text-center'>{count3}</span>
        <span className='text-4xl md:text-6xl font-bold text-blue ml-2 md:mr-2'>+</span>
        <p className='text-countertext font-semibold text-center text-xl md:text-[17px] mt-2'>Projects Fully Funded</p>
      </div>
      <div className=' lg:hidden md:block text-center shadow-xl w-full mx-4 py-2 md:mx-4  '>
        <span className='text-4xl md:text-6xl font-bold text-darkBlue text-center'>{count4}</span>
        <span className='text-4xl md:text-6xl font-bold text-blue ml-2 md:mr-2'>%</span>
        <p className='text-countertext font-semibold text-center text-xl md:text-[17px] mt-2'>Year on Year Growth</p>
      </div> */}

    </div>

    
  );
};

export default Counter;