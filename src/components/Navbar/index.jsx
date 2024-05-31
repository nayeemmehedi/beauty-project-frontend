import React, { useEffect, useState } from "react";
import { GiTreeBranch } from "react-icons/gi";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { TbUserSearch } from "react-icons/tb";
import { TbShoppingCartSearch } from "react-icons/tb";
import useCartStore from "../../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useCartStore((state) => state.cart);

  // const userName = "John Doe"; // Replace with your actual user name

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    localStorage.clear();
  };

  const otpValue = localStorage.getItem("otp");
  const phone = localStorage.getItem("phone");
  let otp = JSON.parse(otpValue);

 
  

  return (
    <div>
      <nav className="bg-[#f7f0f0] fixed w-full z-10 top-0 left-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/">
              <div className="flex items-center">
                <div className="flex-shrink-0 ">
                  <GiTreeBranch className="text-[#faa292] text-5xl"></GiTreeBranch>
                </div>
                <div className=" italic ms-2">
                  {/* <p className="text-lg font-extrabold"> luxury</p> */}
                  <p className="font-bold"> সৌন্দর্য্যবিতান</p>

                  <p className="text-xs">Girls Beauty Product</p>
                </div>
              </div>
            </Link>

            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 text-slate-700 font-bold italic">
                  <Link
                    to="/"
                    className=" px-3 py-2 rounded-md  hover:bg-pink-100"
                  >
                    Home
                  </Link>
                  <Link
                    to="/product"
                    className=" px-3 py-2 rounded-md hover:bg-pink-100"
                  >
                    Products
                  </Link>
                  <Link
                    to="/confirm-product"
                    className=" px-3 py-2 rounded-md hover:bg-pink-100"
                  >
                    Oder Item
                  </Link>

                  <Link
                    to="/about-us"
                    className=" px-3 py-2 rounded-md  hover:bg-pink-100"
                  >
                    About
                  </Link>
                </div>
              </div>
            </div>

            {/* dropdown user here  */}

            <div className="flex">
              <div>
                <Link to={"/card"}>
                  <div className="">
                    <div>
                      <Badge
                        badgeContent={otp ? cart.length ?? 0 : 0}
                        color="error"
                        className="text-red-500"
                      >
                        <TbShoppingCartSearch size={22} />
                      </Badge>
                    </div>
                  </div>
                </Link>
              </div>
              {/* card finsih  */}
              <div className="hidden md:block ms-8">
                {otp ? (
                  <div className="relative">
                    <button
                      className="flex items-center text-white rounded bg-red-300 hover:bg-red-400  focus:outline-none py-1 font-thin  px-4  text-center  "
                      type="button"
                      onClick={toggleDropdown}
                    >
                      <FontAwesomeIcon icon={faUserCircle} className="mr-2" />
                      <span className="hidden lg:block">
                        {phone ?? "Customer"}
                      </span>
                      <svg
                        className="ml-2 w-4 h-4"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute right-0 z-10 mt-2 w-36 rounded-md shadow-lg bg-gray-700">
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          <button
                            className="block px-4 py-2 text-sm text-white "
                            onClick={() => handleLogout()}
                          >
                            <FontAwesomeIcon
                              icon={faSignOutAlt}
                              className="mr-2 "
                            />
                            Logout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link to="signup">
                    <div className="rounded-md text-black font-semibold border-2 border-red-400 px-3 py-1">
                      Login
                    </div>
                  </Link>
                )}
              </div>

              {/* dropdown user here ses  */}
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleNavbar}
                type="button"
                className="bg-pink-500 inline-flex items-center justify-center p-2 rounded-md text-black hover:text-pink-400 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-800 focus:ring-white"
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
            <Link
              to="/"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-pink-200"
            >
              Home
            </Link>
            <Link
              to="/product"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-pink-200"
            >
              Products
            </Link>
            <Link
              to="/about-us"
              className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-pink-200"
            >
              About
            </Link>
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
