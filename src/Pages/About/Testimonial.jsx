// src/TestimonialSlider.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO of Company",
    text: "This is a fantastic product! It really helped our business grow.",
    image: "https://st.depositphotos.com/1987395/1928/i/950/depositphotos_19288743-stock-photo-young-successful-business-man-at.jpg/150"
  },
  {
    name: "Jane Smith",
    title: "Marketing Director",
    text: "I love using this service, it's absolutely wonderful.",
    image: "https://st.depositphotos.com/1987395/1928/i/950/depositphotos_19288743-stock-photo-young-successful-business-man-at.jpg/150"
  },
  {
    name: "Alice Johnson",
    title: "Developer",
    text: "Amazing experience, highly recommend to others.",
    image: "https://st.depositphotos.com/1987395/1928/i/950/depositphotos_19288743-stock-photo-young-successful-business-man-at.jpg/150"
  }
];

const Testimonial = () => {
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: true, // Enable vertical sliding
    verticalSwiping: true, // Enable vertical swiping
  }
  return (
    <div className="container px-4 py-12 mx-auto">
      <h2 className="mb-8 text-3xl font-bold text-center">Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-1/3 p-4 float-end">
            <div className="flex flex-col items-center w-1/3 p-6 text-center bg-yellow-600 border-2 border-red-800 rounded-lg float-end" >
              <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 mb-4 rounded-full"/>
              <p className="text-lg font-semibold">{testimonial.name}</p>
              <p className="mb-4 text-sm text-gray-600">{testimonial.title}</p>
              <p className="text-gray-800">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;

