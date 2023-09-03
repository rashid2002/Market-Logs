import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";
import ava04 from "../../../assets/images/ava-4.jpg";
import ava05 from "../../../assets/images/ava-5.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Mohd Rashid Ansari
            <br />Email: rashid99ansariy2j@gamil.com
            <br />Phone: 9258519487
            <br />Team Leader 

          </h6>
        </div>
      </div>
      <div>

        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Nehal Garg</h6>
        </div>
      </div>
      <div>

        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Kshithij Gupta</h6>
        </div>
      </div>
      <div>

        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava04} alt="avatar" className=" rounded" />
          <h6>Ananya Thakur</h6>
        </div>
      </div>
      <div>

        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava05} alt="avatar" className=" rounded" />
          <h6>Hrithik Sharma</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
