import React from 'react';
import { FaHeart, FaLeaf, FaStar } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-red-200 via-purple-50 to-red-100 text-slate-400 py-4">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold  text-center">About Us</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <img
              className="w-full h-96 object-cover rounded-lg shadow-2xl transition-transform transform hover:scale-105"
              src="https://beautysiaa.com/wp-content/uploads/2022/12/bronzer-1.webp"
              alt="About us"
            />
          </div>
          <div className='text-slate-400'>
            <p className="mt-4 text-xl leading-8">
              <span className=''>Welcome to <span className="font-bold">সৌন্দর্য্যবিতান</span></span>, where beauty meets innovation. We are dedicated to providing high-quality makeup products that enhance your natural beauty and empower you to express your unique style. Our journey began with a passion for makeup and a desire to create products that are both luxurious and accessible.
            </p>
            <p className="mt-4 text-xl leading-8 ">
              Our team of experts meticulously crafts each product with the finest ingredients, ensuring exceptional performance and a flawless finish. From vibrant lipsticks to stunning eyeshadows, we offer a wide range of products to suit every occasion and skin tone.
            </p>
            <p className="mt-4 text-xl leading-8 ">
              At <span className="font-bold">সৌন্দর্য্যবিতান</span>, we believe that beauty should be fun, inclusive, and transformative. We are committed to sustainability and ethical practices, ensuring that our products are cruelty-free and environmentally friendly.
            </p>
            <p className="mt-4 text-xl leading-8 ">
              Thank you for choosing <span className="font-bold">সৌন্দর্য্যবিতান</span> as your go-to beauty brand. We look forward to being a part of your beauty journey.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <FaHeart className="text-pink-500 text-4xl mx-auto" />
            <h3 className="mt-4 text-2xl font-bold text-gray-900">Passion for Beauty</h3>
            <p className="mt-2 text-lg text-gray-600">
              Our love for beauty drives us to create products that inspire confidence and creativity.
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <FaLeaf className="text-green-500 text-4xl mx-auto" />
            <h3 className="mt-4 text-2xl font-bold text-gray-900">Sustainable Practices</h3>
            <p className="mt-2 text-lg text-gray-600">
              We are committed to sustainability and ethical practices, ensuring our products are cruelty-free and environmentally friendly.
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
            <FaStar className="text-yellow-500 text-4xl mx-auto" />
            <h3 className="mt-4 text-2xl font-bold text-gray-900">Exceptional Quality</h3>
            <p className="mt-2 text-lg text-gray-600">
              Our products are made with the finest ingredients, delivering exceptional performance and a flawless finish.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
