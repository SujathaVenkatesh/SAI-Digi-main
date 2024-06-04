import React from 'react';
import digi from '../../assets/digital-collaboration 1.png';
import support from '../../assets/24-hours 1.png';
import budgetFriendly from '../../assets/budgeting 2.png';


const WhyUs = () => {
  return (
    <>
        <div className="text-center px-4 py-8 md:px-8 md:py-12">
            <h2 className="text-3xl font-semibold mb-4 md:text-4xl text-[#f7931e]">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 md:text-xl">A commitment to innovation, personalized solutions, and a proven track record in driving digital success</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 p-4 md:p-8">
            <div className="max-w-sm md:w-1/3 bg-white rounded-lg shadow-lg p-6 md:p-8 text-center">
                <img src={budgetFriendly} alt="Budget Friendly" className="mx-auto mb-4" />
                <h2 className="text-xl font-semibold mb-2">Website Within Your Budget</h2>
                <p className="text-gray-600">Acquire a company website tailored to your budget, ensuring cost-effectiveness without compromising quality.</p>
            </div>
            <div className="max-w-sm md:w-1/3 bg-white rounded-lg shadow-lg p-6 md:p-8 text-center">
                <img src={support} alt="24/7 Support" className="mx-auto mb-4" />
                <h2 className="text-xl font-semibold mb-2">24/7 Support</h2>
                <p className="text-gray-600">Access free business strategies and ideas around the clock, empowering you with continuous support for your business growth.</p>
            </div>
            <div className="max-w-sm md:w-1/3 bg-white rounded-lg shadow-lg p-6 md:p-8 text-center">
                <img src={digi} alt="Digital colab" className="mx-auto mb-4" />
                <h2 className="text-xl font-semibold mb-2">Trustworthy Partnership</h2>
                <p className="text-gray-600">We prioritize your convenience by conducting in-person discussions at your business location, building a relationship founded on trust.</p>
            </div>
        </div>
    </>
  )
}

export default WhyUs