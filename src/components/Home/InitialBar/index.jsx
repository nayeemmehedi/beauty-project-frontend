import React from "react";
import "../../../style/initial.css";
import girl01 from "/bg/slider_img05.png";
import { MdKeyboardArrowRight } from "react-icons/md";

function InitialBar() {
  return (
    <div className="mt-16">
      <div className="bg-make  bg-cover ">
        <div
          className="grid grid-cols-2 content-center "
          style={{ height: "650px", width: "auto" }}
        >
          <div className=" w-[80%] border-1 border-red-500  grid  content-center playfair-display-700  ">
            <div className="ms-16 ">
              <p className={`text-2xl  maintext  `}>Beauty & Makeup Product</p>
              <p className="text-5xl my-10 leading-tight">
                Get Your Best Face Glow With Us
              </p>
              <p className="my-5 text-slate-400 leading-relaxed ">
                বাংলাদেশের সকল মেকাপ কোম্পানি থেকে আমরা সর্বোচ্চ মানের এবং
                সর্বনিম্ন মূল্যে প্রকৃত পণ্য সরবরাহ করছি। আপনি আমাদের কাছ থেকে
                নম্বর ১ মানের পণ্য পাবেন যা অনেক বেশি মানসম্পন্ন এবং সুলভ
                মূল্যে।
              </p>
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
          <div className="grid content-center  justify-center mt-5 ">
            <img
              className="w-auto"
              style={{ height: "500px" }}
              src={girl01}
              alt="nothing"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InitialBar;
