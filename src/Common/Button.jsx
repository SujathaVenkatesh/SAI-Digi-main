// Home.jsx
import React from 'react';

function Button(props) {
    return (
        <button className='bg-[#f7931e] text-white font-[poppins] py-2 px-6 rounded md:ml-8  duration-500 '>
            {props.children}
        </button>
    );
}

export default Button;


