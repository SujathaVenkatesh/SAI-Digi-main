import React, { useState } from 'react';
import validator from 'validator';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

function Forms() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [errMessage, setErrMessage] = useState('');

  const validateEmail = () => {
    if (validator.isEmail(email)) {
      setErrMessage('');
    } else {
      setErrMessage('Please enter a valid email address');
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator.isEmail(email)) {
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      console.log('Phone:', phone);
      setName('');
      setEmail('');
      setMessage('');
      setPhone('');
    } else {
      setErrMessage('Please enter a valid email address');
    }
    
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* <header className="text-3xl text-white font-bold text-center bg-orange-500 py-4">Contact Us</header> */}
      <div className="flex flex-col md:flex-row md:mx-10 mt-8">
        <section className="w-full md:w-1/3 p-4 md:p-8 bg-white rounded-t-lg md:rounded-t-none md:rounded-l-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="flex items-center space-x-4 hover:text-[#f7931e] text-gray-800 mb-2">
            <FiMapPin />
            <p>123 Main Street, City, Country</p>
          </div>
          <div className="flex items-center space-x-4 hover:text-[#f7931e] text-gray-800 mb-2">
            <FiPhone />
            <p>+1234567890</p>
          </div>
          <div className="flex items-center space-x-4 hover:text-[#f7931e] text-gray-800">
            <FiMail />
            <p>example@mail.com</p>
          </div>
        </section>
        <section className="md:w-2/3 p-4 md:p-8 bg-white rounded-lg shadow-md mt-4 md:mt-0">
          <div className='w-full md:w-[400px]    mx-auto'>
            <h2 className="text-2xl font-semibold mb-4">GET IN TOUCH WITH US</h2>
            <form onSubmit={handleSubmit} className="space-y-4 ">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-800 mb-1">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-4 py-2 border rounded-md focus:border-green-400 outline-none"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-gray-800 mb-1">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="px-4 py-2 border rounded-md focus:border-green-400 outline-none"
                  placeholder="Enter Your Phone Number"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-800 mb-1">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={validateEmail}
                  className="px-4 py-2 border rounded-md focus:border-green-400 outline-none"
                  placeholder="Enter Your Email"
                  required
                />
                {errMessage && <p className="text-red-500">{errMessage}</p>}
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-gray-800 mb-1">
                  Message:
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="px-4 py-2 border rounded-md resize-none outline-none focus:border-green-400"
                  placeholder="Leave your message here"
                  required
                />
              </div>
              <button type="submit" className="px-4 py-2 rounded-md bg-[#f7931e] text-white font-bold transition duration-300">
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Forms;
