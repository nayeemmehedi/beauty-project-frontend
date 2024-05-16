import React from "react";
import about from "/bg/about_img.png";
import hrValue from "/bg/circle_right.png";
import { TiTick } from "react-icons/ti";
import { FaCheck } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

function Experience() {
  return (
    <div className="grid grid-cols-2 w-[90%] mx-auto ">
      <div className="w-screen my-36">
        <img
          src={about}
          style={{ maxWidth: "100% ", height: "auto" }}
          alt="no img"
        />
      </div>
      {/* text here  */}
      <div className="my-16">
        <p className="text-5xl font-extrabold  playfair-display-700 mt-10 mb-20">
          The Essence Of Health & Vitality In One Place
        </p>
        <img className="my-10" src={hrValue} alt="no hr" />
        <p className="text-xl font-bold my-14">
          We Have {/* bg-[${bg_common}] */}
          <span className={`mainbg text-white px-3 py-1 rounded`}>
            25 Years
          </span>{" "}
          Of Experience
        </p>
        <p className="my-10">
          Fusce scelerisque ante ipsum. Suspendisse vulputate, velit at iaculis
          vestibulum, libero tellus ultricies justo, ut porta tellus nunc non
          nulla. In pellentesque erat sed porta bibendum. Ut nec molestie felis.
        </p>

        <p>
          In pellentesque erat sed porta bibendum. Ut nec molestie felis. Fusce
          scelerisque ante ipsum. Suspendisse vulputate, velit at iaculis
          vestibulum, libero tellus ultricies justo, ut porta tellus nunc
        </p>

        <div className="mt-10">
          <ul className="grid grid-cols-2">
            <li className="flex items-center mb-2">
              <FaCheck className={`maintext mr-2`} />
              <span className="text-black">Vivamus Scelerisque Dolor.</span>
            </li>
            <li className="flex items-center mb-2">
              <FaCheck className={`maintext mr-2`} />
              <span className="text-black">Vivamus Scelerisque Dolor.</span>
            </li>
            <li className="flex items-center mb-2">
              <FaCheck className={`maintext mr-2`} />
              <span className="text-black">Vivamus Scelerisque Dolor.</span>
            </li>
            <li className="flex items-center mb-2">
              <FaCheck className={`maintext mr-2`} />
              <span className="text-black">Vivamus Scelerisque Dolor.</span>
            </li>
          </ul>

          <div className="flex my-10 ">
            <button className=" flex items-center px-6 py-3 rounded-md bg-[#faa292]  text-white hover:bg-black font-semibold border-2 hover:border-red-300 ">
              <div className="bg-[#ffb3a5] rounded-lg p-2 mr-2">
                <MdKeyboardArrowRight className="text-white text-xl" />
              </div>
              <div className="font-bold">Learn More</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
