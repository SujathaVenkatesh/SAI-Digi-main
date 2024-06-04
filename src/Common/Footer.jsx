import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedinIn, FaFacebookMessenger, FaArrowCircleRight, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import logo from '../assets/FINAL_LOGO-without-bg.png'
import Bgfooter from '../assets/Footer.png'

const Footer = () => {
  const cardStyle = {
    backgroundImage: `url(${Bgfooter})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
};

  const year = new Date(); 
  return (
    <footer className="bg-black  text-white lg:px-12" style={cardStyle}>
      <section className="flex  p-10 flex-col md:flex-row gap-5 pt-20">
        <div className="text-justify flex-1 lg:mr-[70px] ">
          <div className='flex items-center mb-5'>
            <img src={logo} alt="SDT Logo" className='h-[70px]'/>
            <div className='font-semibold'>
              <h3 className='tracking-widest'>Sai Digiserv</h3>  <h3 className='tracking-widest'>Technologies</h3>
            </div>
          </div>
          <p className='text-justify'>Get free ideas for your business growth and learn why a website is important for your business</p>        
          <div className="flex mt-3 md:mt-5 lg:mt-5 text-black ">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="mr-4 bg-white p-1 rounded-3xl"><FaLinkedinIn  /></a>
            <a href="https://www.facebook.com/messenger/" target="_blank" rel="noopener noreferrer" className="mr-4  bg-white p-1 rounded-3xl"><FaFacebookMessenger /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mr-4 bg-white p-1 rounded-3xl"><FaTwitter  /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mr-4 bg-white p-1 rounded-3xl"><FaInstagram  /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mr-4 bg-white p-1 rounded-3xl"><FaYoutube  /></a>
          </div>
        </div>
        
        <div className="leading-9 flex-1">
          <a href="/Services"><p className="text-xl font-bold pb-3 text-white">Services</p></a> 
          <ul>
            <li><FaArrowCircleRight className="inline-block mr-2" />SEO </li>
            <li><FaArrowCircleRight className="inline-block mr-2" />SEM</li>
            <li><FaArrowCircleRight className="inline-block mr-2" />WEB-APP Development</li>
            <li><FaArrowCircleRight className="inline-block mr-2" />SMM</li>
            <li><FaArrowCircleRight className="inline-block mr-2" />VIDEO EDITING</li>
            <li><FaArrowCircleRight className="inline-block mr-2" />EMAIL MARKETING</li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4 flex-1">
          <p className="text-xl font-bold pb-5 text-white">Contact Info</p>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-black bg-white p-1 rounded-3xl text-2xl" />
            <span>No 10A, North Mada Street, Kolathur, Chennai, Tamil Nadu 600008</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-black bg-white p-1 rounded-3xl text-2xl" />
            <span>saidigiservtechnologies.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone className="text-black bg-white p-1 rounded-3xl text-2xl" />
            <span>+91-93451 39639</span>
          </div>
          
        </div>
      </section>
      
      <hr className="bg-white h-0.3" />
      
      <section>
        <p className="text-center py-5">Copyright @ SDT {year.getFullYear()}. All Rights Reserved .</p>
      </section>
    </footer>
  );
};

export default Footer;
