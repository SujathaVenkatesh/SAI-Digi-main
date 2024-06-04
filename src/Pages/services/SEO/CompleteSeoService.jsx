import React from 'react'

const CompleteSeoService = () => {
    const PageOptimization = ["Internal Link Structuring", "HTML Code Cleanup", "Website Content Writing", "Content Optimization"];
    const InternalSiteAudit = ["Page Speed Fixing" , "Protecting Vulnerable Directories" , "Meta Data Fixing", "Keyword Research" ];
    const ContentWriting = ["Content Writing for homepage", "Writing Content for Products" , "Blog Writing", "Multiple Focus keywords in a Content"];
    const LinkBuilding = ["Niche Relavent Links" , "High DA/UR Links", "None Toxic Links", "Trusted Link from our Partners"];

  return (
    <div className='mt-10'>
        <h2 className='text-center text-3xl font-bold'>Complete On Page & Off Page SEO Service</h2>
        <div className='p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div>
            <h2 className="text-xl font-bold mb-4">Page Optimization</h2>
            <ul className="list-none">
                {PageOptimization.map((item, index) => (
                <li key={index} className="flex items-center mb-2">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                </li>
                ))}
            </ul>
        </div>

        <div>
            <h2 className="text-xl font-bold mb-4">Internal Site Audit</h2>
            <ul className="list-none">
                {InternalSiteAudit.map((item, index) => (
                <li key={index} className="flex items-center mb-2">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                </li>
                ))}
            </ul>
        </div>

        <div>
            <h2 className="text-xl font-bold mb-4">Content Writing</h2>
            <ul className="list-none">
                {ContentWriting.map((item, index) => (
                <li key={index} className="flex items-center mb-2">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                </li>
                ))}
            </ul>
        </div>

        <div>
            <h2 className="text-xl font-bold mb-4">Link Building</h2>
            <ul className="list-none">
                {LinkBuilding.map((item, index) => (
                <li key={index} className="flex items-center mb-2">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                </li>
                ))}
            </ul>
        </div>
        </div>
    </div>

  )
}

export default CompleteSeoService