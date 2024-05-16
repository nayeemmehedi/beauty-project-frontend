import React, { useState } from "react";
import { GiTreeBranch } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-[#f7f0f0] fixed w-full z-10 top-0 left-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 ">
                <GiTreeBranch className="text-[#faa292] text-5xl"></GiTreeBranch>
              </div>
              <div className=" italic ms-2">
                <p className="text-lg font-extrabold"> luxury</p>
                <p className="text-xs">Girls Beauty Product</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 text-slate-700 font-bold italic">
                  <Link
                    to="/"
                    className=" px-3 py-2 rounded-md  hover:bg-pink-600"
                  >
                    Home
                  </Link>
                  <Link
                    to="/product"
                    className=" px-3 py-2 rounded-md hover:bg-pink-600"
                  >
                    Products
                  </Link>
                  <a
                    href="#"
                    className=" px-3 py-2 rounded-md  hover:bg-pink-600"
                  >
                    About
                  </a>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className=" mr-4">
                  <span className="font-medium">John</span> <span>Doe</span>
                </div>
                <a
                  href="#"
                  className="bg-pink-700 p-1 rounded-full hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleNavbar}
                type="button"
                className="bg-pink-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-pink-400 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden ${isOpen ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-pink-600"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-pink-600"
            >
              Products
            </a>
            <a
              href="#"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-pink-600"
            >
              About
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-pink-700">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-white">John Doe</div>
                <div className="text-sm font-medium text-pink-300">
                  john@example.com
                </div>
              </div>
              <button
                type="button"
                className="ml-auto bg-pink-700 flex-shrink-0 p-1 rounded-full text-pink-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-800 focus:ring-white"
              >
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-9-5.194 5 5 0 10-7.853.64A5.976 5.976 0 0010 1c2.761 0 5.077 2.187 5.193 4.963zm-16.38 5.124a3 3 0 002.592-1.787 4.014 4.014 0 010-3.872 3 3 0 00-2.592-1.787 3 3 0 00-2.596 1.787 4.014 4.014 0 010 3.872 3 3 0 002.596 1.787z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
