// Home.jsx
import React from 'react';
import Analyis from '../../../assets/industry-analysis-icon.png';
import Goal from '../../../assets/goals-kpi-icon.png';
import Execution from '../../../assets/execution-icon.png';
import Engagement from '../../../assets/engagement-icon.png';
import Tracking from '../../../assets/tracking-icon.png';
import Reporting from '../../../assets/reporting-icon.png';
import Optimization from '../../../assets/compaign-planning-icon.png';

function Howwe() {
    const images = [
        { src: Analyis, alt: 'Industry Analysis', heading: 'ANALYSIS', text: 'Examine the performance of your social media channels, with an acute focus on identifying the strategies that generated sizeable traction.' },
        { src: Goal, alt: 'Goals and KPIs', heading: 'GOALS AND KPIS SETUP', text: 'Determine the goals to be achieved from different channels and the key performance indicators to be used in quantifying results.' },
        { src: Execution, alt: 'Execution', heading: 'EXECUTION', text: 'Create and execute a multi-faceted social media strategy, tailored to achieve campaign goals and facilitate sustainable growth.' },
        { src: Engagement, alt: 'Engagement', heading: 'ENGAGEMENT', text: 'Engage with your audience through meaningful interactions, ensuring that your brand remains relevant and top-of-mind.' },
        { src: Tracking, alt: 'Tracking', heading: 'TRACKING', text: 'Track the performance of your campaigns and channels, using data-driven insights to optimize strategies and maximize results.' },
        { src: Reporting, alt: 'Reporting', heading: 'REPORTING', text: 'Generate detailed reports on campaign performance, providing valuable insights and recommendations for future campaigns.' },
        { src: Optimization, alt: 'Campaign Planning', heading: 'CAMPAIGN PLANNING', text: 'Plan future campaigns based on insights gathered from past performance, ensuring continuous improvement and growth.' }
    ];

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">How We Do It</h1>
                <p className="text-lg text-gray-700 text-justify leading-relaxed">
                    SAiDIgiserv Technologies adopts a comprehensive approach to thoroughly analyze the current landscape and identify optimization opportunities. Our process-driven, collaborative business model ensures that we work closely with you to achieve your marketing goals with minimal resource investment. Here is an outline of the path to success in Social Media Optimization (SMO):
                </p>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-wrap justify-center">
                    {images.slice(0, 4).map((image, index) => (
                        <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4 flex flex-col items-center">
                            <img src={image.src} alt={image.alt} className="mx-auto mb-4" />
                            <h2 className="text-xl font-semibold text-center mb-2">{image.heading}</h2>
                            <p className="text-sm text-gray-700 text-center">{image.text}</p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap justify-center">
                    {images.slice(4, 7).map((image, index) => (
                        <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4 flex flex-col items-center">
                            <img src={image.src} alt={image.alt} className="mx-auto mb-4" />
                            <h2 className="text-xl font-semibold text-center mb-2">{image.heading}</h2>
                            <p className="text-sm text-gray-600 text-center">{image.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Howwe;
