import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
// import React, { useState } from 'react';
// import ReactSlider from "react-slider";

function TopBar() {
//   const [value, setValue] = useState([20, 37]);

//   console.log("value = ", value);

  
  return (
    <div>
      <Marquee>
        <div className="text-xs font-light my-2">
          সুন্দর একজোড়া চোখ, সবারই নজর কাড়তে বাধ্য। আর চোখকে আরো সুন্দর করে
          সাজিয়ে তুলতে চোখের মেকআপ বেশ গুরুত্বপূর্ণ ভূমিকা পালন করে। চোখের
          মেকআপে <span className="text-red-300">কাজল, আইলাইনার, মাশকারার </span>{" "}
          পাশাপাশি যে কসমেটিকটির
        </div>
      </Marquee>
      <div className="w-[85%] mx-auto">
        <img
          className=" h-auto"
          style={{ maxWidth: "100%" }}
          src="	https://shop.shajgoj.com/wp-content/uploads/2024/05/Beauty-Bargains-GIF.gif"
          alt="Slideshow"
        />
      </div>

      {/* <div>
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          defaultValue={[20, 37]}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          pearling
          minDistance={10}
          min={10}
          max={40}
          value={value}
          onChange={setValue}
        />
      </div> */}
    </div>
  );
}

export default TopBar;
