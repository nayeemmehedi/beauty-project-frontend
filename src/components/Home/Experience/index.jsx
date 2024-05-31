import React from "react";
import about from "/bg/about_img.png";
import hrValue from "/bg/circle_right.png";
import { TiTick } from "react-icons/ti";
import { FaCheck } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

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
          এত বছর ধরে আমরা মেয়েদের রূপচর্চায় সহায়তা করে আসছি এবং তাদের
          আত্মবিশ্বাস বাড়াতে সাহায্য করছি। আমাদের প্রতিটি পণ্য উচ্চমানের উপকরণ
          দিয়ে তৈরি করা হয়েছে যাতে আপনাদের ত্বক সুস্থ এবং উজ্জ্বল থাকে। আমরা
          নিশ্চিত করে থাকি যে, আমাদের পণ্যগুলি কোনো প্রকার ক্ষতিকর রাসায়নিক
          দ্রব্য থেকে মুক্ত। তাই নিশ্চিন্তে এগুলি ব্যবহার করতে পারবেন।
        </p>

        <p>
          আপনাদের সুন্দরী হয়ে থাকতে এবং আত্মবিশ্বাসী হয়ে উঠতে আমাদের পণ্যগুলি
          অনেক সহায়তা করবে। আসুন আমরা একসাথে কাজ করি আপনাদের সৌন্দর্য্য বৃদ্ধি
          করতে।আমাদের সংস্থা 25 বছরের পুরনো অভিজ্ঞতা নিয়ে মেয়েদের সৌন্দর্য্য
          প্রসাধনীর বিভিন্ন পণ্য নিয়ে কাজ করছে। এত বছর ধরে আমরা মেয়েদের
          রূপচর্চায় সহায়তা করে আসছি এবং তাদের আত্মবিশ্বাস বাড়াতে সাহায্য
          করছি। ধন্যবাদ।
        </p>

        <div className="mt-10">
          <ul className="grid grid-cols-2">
            <li className="flex items-center mb-2">
              <FaCheck className={`maintext mr-2`} />
              <span className="text-black">
                ব্র্যান্ড নিশ্চিত করে আপনাকে সেরা মানের পণ্য প্রদান.
              </span>
            </li>
            <li className="flex items-center mb-2">
              <FaCheck className={`maintext mr-2`} />
              <span className="text-black">
                স্বাভাবিক সৌন্দর্য্যকে আরও বৃদ্ধি করতে এই প্রসাধনীগুলি .
              </span>
            </li>
            <li className="flex items-center mb-2">
              <FaCheck className={`maintext mr-2`} />
              <span className="text-black">
                আত্মবিশ্বাসী এবং সুন্দরী হিসেবে উপলব্ধি করুন আমাদের পণ্যগুলির
                সাহায্যে।
              </span>
            </li>
            <li className="flex items-center mb-2">
              <FaCheck className={`maintext mr-2`} />
              <span className="text-black">
                রূপচর্চার প্রয়োজনীয় সকল সামগ্রী এক জায়গায়.
              </span>
            </li>
          </ul>
          <Link to="/about-us">
            <div className="flex my-10 ">
              <button className=" flex items-center px-6 py-3 rounded-md bg-[#faa292]  text-white hover:bg-black font-semibold border-2 hover:border-red-300 ">
                <div className="bg-[#ffb3a5] rounded-lg p-2 mr-2">
                  <MdKeyboardArrowRight className="text-white text-xl" />
                </div>
                <div className="font-bold">About Us</div>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Experience;
