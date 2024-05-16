import React from 'react';
import { GiTreeBranch } from 'react-icons/gi';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#f7f0f0] mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0">
                <GiTreeBranch className="text-[#faa292] text-5xl" />
              </div>
              <div className="italic ms-2">
                <p className="text-lg font-extrabold">luxury</p>
                <p className="text-xs">Girls Beauty Product</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Discover the finest makeup products for girls, crafted with care and designed to enhance your natural beauty.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-pink-600">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-600">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-600">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-600">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-600">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-600 mb-4">
              Stay updated with our latest products and special offers.
            </p>
            <form>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border border-gray-300 rounded-l-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <button
                  type="submit"
                  className="bg-pink-600 text-white rounded-r-md py-2 px-4 hover:bg-pink-700 transition duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-300 pt-6">
          <p className="text-center text-sm text-gray-600">
            Copyright Nayeem 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;