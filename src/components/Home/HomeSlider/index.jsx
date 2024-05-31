import React from "react";
import Slider from "react-slick";

let sliderPic = [
  "https://shop.shajgoj.com/wp-content/uploads/2023/07/Nirvana-Web-Banner-2-1920x490.jpg",
  "https://shop.shajgoj.com/wp-content/uploads/2022/12/Shop-by-Concern-Website-Slider.png",
  "https://shop.shajgoj.com/wp-content/uploads/2023/01/Web-banner-coupon-Free-delivery-2.jpg",
];

function HomeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, // Adjust the autoplay speed
    pauseOnHover: true,
    fade: true, // Enable fade effect for smooth transitions
    adaptiveHeight: true, // Adjust slide height based on the content
    cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Custom easing for a "cuter" animation
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {sliderPic.map((v, id) => (
          <div key={id}>
            <img className="" src={v} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomeSlider;
