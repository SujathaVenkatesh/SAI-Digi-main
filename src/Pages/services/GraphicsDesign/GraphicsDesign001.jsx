import React from 'react'
import logo1 from './../../../assets/whylogo1.png'
import logo2 from './../../../assets/whylogo2.png'
import logo3 from './../../../assets/whylogo3.png'

const GraphicsDesign001 = () => {
  return (
    <>
      <section className="bg-orange-400 p-11">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 max-w-xl mx-auto lg:pl-20 text-justify">
            <h2 className="text-lg font-bold text-white">GRAPHIC DESIGNING</h2>
            <h1 className="text-3xl font-bold text-white">"BRINGING YOUR VISION TO LIFE THROUGH CREATIVE GRAPH DESIGN"</h1>
            <p className="text-md text-white font-bold mt-2">
              Graphic design is a creative discipline that involves combining visual elements, typography, and imagery to communicate messages and convey ideas. It encompasses a wide range of mediums, including digital graphics, print materials, branding, packaging, advertisements, and more. Graphic design plays a pivotal role in enhancing the aesthetic appeal and visual communication of various materials, helping businesses and individuals effectively convey their message and captivate their target audience. It involves strategic use of colors, typography, layout, and visual hierarchy to create visually engaging and impactful designs that align with the brand identity and objectives. Graphic design is a powerful tool that can evoke emotions, build brand recognition, and leave a lasting impression on viewers.
            </p>
          </div>
          <div className="w-full lg:w-1/2 bg-transparent border-black rounded border-bold-10 lg:pr-20 mt-8 lg:mt-0">
            <div className="max-w-lg mx-auto shadow-lg rounded-lg p-6">
              <form>
                <div className="mb-4">
                  <label htmlFor="Name" className="block text-gray-700">Name*</label>
                  <input type="text" id="Name" name="Name" className="mt-1 px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div className="mb-4">
                  <label htmlFor="Email" className="block text-gray-700">Email*</label>
                  <input type="text" id="Email" name="Email" className="mt-1 px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div className="mb-4">
                  <label htmlFor="Mobile" className="block text-gray-700">Mobile Number*</label>
                  <input type="Mobile" id="Mobile" name="Mobile" className="mt-1 px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div className="mb-4">
                  <label htmlFor="Services" className="block text-gray-700">Services*</label>
                  <input type="Services" id="Service" name="Service" className="mt-1 px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700">Message</label>
                  <textarea id="message" name="message" rows="4" className="mt-1 px-4 py-2 border rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300"></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Design Section */}
      <section className="bg-white-500 p-11">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 max-w-xl mx-auto lg:pl-20 grid grid-flow-row text-justify">
            <p className="text-sm text-black p-2 font-bold">LOGO DESIGN</p>
            <p className="text-xl text-black p-2 font-bold">"ELEVATE YOUR BRAND WITH DISTINCTIVE LOGO DESIGNS"</p>
            <p className="text-sm text-black p-2">Logo design is a creative process that involves crafting a unique and visually appealing symbol or mark that represents a brand or business. A well-designed logo serves as a visual representation of a company’s identity, values, and personality. It plays a crucial role in establishing brand recognition, making a memorable impression, and differentiating a business from its competitors.</p>
          </div>
          <div className="w-full lg:w-1/2 bg-white-500 flex justify-center items-center">
            <img src={logo1} alt="whylogo1" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
          </div>
        </div>
      </section>

      {/* Brochure Design Section */}
      <section className="bg-white-500 p-11">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 bg-white-500 flex justify-center items-center">
            <img src={logo2} alt="whylogo2" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
          </div>
          <div className="w-full lg:w-1/2 max-w-xl mx-auto lg:pl-10 grid grid-flow-row lg:pr-20 text-justify">
            <p className="text-sm text-black p-2 font-bold uppercase">brochure design</p>
            <p className="text-xl text-black p-2 font-bold">"CAPTIVATING DESIGNS THAT UNFOLD STORIES: EXPERT BROCHURE DESIGN SERVICES"</p>
            <p className="text-sm text-black p-2">Brochure design is a creative process that involves creating visually appealing and informative printed materials used for marketing, advertising, and communication purposes. Brochures serve as versatile marketing tools that effectively convey key messages, showcase products or services, and provide relevant information to the target audience.</p>
          </div>
        </div>
      </section>

      {/* Social Media Creatives Section */}
      <section className="bg-white-500 p-11">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 max-w-xl mx-auto lg:pl-20 grid grid-flow-row text-justify">
            <p className="text-sm text-black font-bold">SOCIAL MEDIA CREATIVES</p>
            <p className="text-xl text-black font-bold">"UNLOCKING SOCIAL MEDIA SUCCESS THROUGH CREATIVE CONTENT"</p>
            <p className="text-sm text-black">Social media creatives are visually engaging content pieces designed for social media platforms. They aim to captivate audiences, convey messages effectively, and align with the brand’s identity. Through vibrant visuals, concise messaging, and strategic use of trends, these creatives drive brand awareness, foster engagement, and support marketing goals. By optimizing and testing their performance, brands can refine their social media creatives for maximum impact.</p>
          </div>
          <div className="w-full lg:w-1/2 bg-white-500 flex justify-center items-center">
            <img src={logo3} alt="whylogo3" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
          </div>
        </div>
      </section>
    </>
  )
}

export default GraphicsDesign001
