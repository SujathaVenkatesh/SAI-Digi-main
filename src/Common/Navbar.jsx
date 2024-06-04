import React, { useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';
import logo from '../assets/FINAL LOGO.png'
// import 'antd/dist/antd.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');
    const [servicesOpen, setServicesOpen] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const toggleServices = () => {
        setServicesOpen(!servicesOpen);
    };

    const showModal = () => {
        setIsModalVisible(true);
    };
    
    const handleOk = () => {
        setIsModalVisible(false);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const links = [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/about" },
        {
            name: "Services",
            link: "/services",
            sublinks: [
                { name: "SEO", link: "/seo" },
                { name: "SEM", link: "/sem1" },
                { name: "SMO", link: "/smo" },
                { name: "SMM", link: "/smm" },
                { name: "Graphic Design", link: "/graphic-design" },
                { name: "Web development", link: "/Web development" }
            ]
        },
        { name: "Blogs", link: "/blogs" },
        { name: "Contact Us", link: "/contact" },
    ];

    return (
        <div className='shadow-md w-full sticky top-0 left-0 z-10'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800'>
                    
                <img
    src={logo}
    alt="Logo"
    className="md:h-[120px] h-[80px] w-[170px]"
    href='/'
    // h-12 sets the height to 12 units (e.g., 48px) for small screens
    // h-auto makes the height auto-adjust for larger screens
    // w-auto makes the width auto-adjust based on the height
/>


                </div>

                <div onClick={toggleNavbar} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={isOpen ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-20 opacity-100' : 'top-[-490px] md:opacity-100'}`}>
                    {links.map((link, index) => (
                        <li key={index} className='md:ml-8 text-xl md:my-0 my-7'>
                            {link.sublinks ? (
                                <div className="relative">
                                    <span
                                        className={`text-gray-800 duration-500 ${activeLink === link.link ? 'text-[#f7931e] hover:text-[#f7931e]' : 'hover:text-[#f7931e]'}`}
                                        onClick={() => {
                                            setActiveLink(link.link);
                                            if (link.link === '/services') {
                                                toggleServices();
                                            }
                                        }}
                                    >
                                        {link.name}
                                    </span>
                                    <ul className={`absolute top-full left-0 mt-2 bg-[#f7931e] text-white shadow-md py-2 rounded-lg transition-opacity duration-300 ${servicesOpen && link.link === '/services' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                        {link.sublinks.map((sublink, subIndex) => (
                                            <li key={subIndex} className="px-4 py-2">
                                                <a
                                                    href={sublink.link}
                                                    className="text-white "
                                                >
                                                    {sublink.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <a
                                    href={link.link}
                                    className={`text-gray-800 duration-500 ${activeLink === link.link ? 'text-[#f7931e] hover:text-[#f7931e]' : 'hover:text-[#f7931e]'}`}
                                    onClick={() => setActiveLink(link.link)}
                                >
                                    {link.name}
                                </a>
                            )}
                        </li>
                    ))}
                    <Button className='bg-[#f7931e] md:ml-4 text-white' onClick={showModal}>
                        GET A QUOTE
                    </Button>
                </ul>
            </div>
            <Modal
    title="Get a Quote"
    visible={isModalVisible}
    onOk={handleOk}
    onCancel={handleCancel}
    okButtonProps={{ style: { backgroundColor: '#f7931e', borderColor: '#f7931e' } }}
>
    <Form layout="vertical">
        <Form.Item label="Name">
            <Input />
        </Form.Item>
        <Form.Item label="Phone Number">
            <Input />
        </Form.Item>
        <Form.Item label="Email">
            <Input />
        </Form.Item>
        <Form.Item label="Message">
            <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
        <Button type="primary" style={{ backgroundColor: '#f7931e', borderColor: '#f7931e',  font:'bold'}} onClick={handleOk}>
            Submit
        </Button>
    </Form.Item>

    </Form>
</Modal>

        </div>
    );
}

export default Navbar;
