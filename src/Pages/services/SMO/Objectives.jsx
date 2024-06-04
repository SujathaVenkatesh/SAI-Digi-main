import React from 'react';
import Like from '../../../assets/smo-objectives-400x379.png';

function Objectives() {
    return (
        <div className="w-auto mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-center">
                <div className="lg:w-1/2 lg:pr-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Objectives</h2>
                    <p className="text-lg text-gray-700 text-justify leading-relaxed">
                        The social media optimization team at SAI Digiserv Technologies employs a strategic approach to leverage various social platforms, ensuring effective engagement with your target audience. Our tailored strategies, customized to your business and goals, blend organic and paid campaigns seamlessly. We prioritize achieving the following objectives:
                    </p>
                    <ul className="list-disc pt-5 pl-5">
                        <li className="text-base text-gray-700">Enhance Brand Image</li>
                        <li className="text-base text-gray-700">Increase Demand</li>
                        <li className="text-base text-gray-700">Create Authority</li>
                        <li className="text-base text-gray-700">Drive Engagement</li>
                        <li className="text-base text-gray-700">Increase Reach</li>
                        <li className="text-base text-gray-700">Improve Conversions</li>
                    </ul>
                </div>
                <div className="lg:w-1/2">
                    <img src={Like} alt="Like" className="mx-auto lg:ml-auto" />
                </div>
            </div>
        </div>
    );
}

export default Objectives;
