import React from "react";
import Carousel from "react-bootstrap/Carousel";

import Style from "../Slider/Slider.module.css";
import { SliderB, SliderC } from "./Slide.style";

const Slider = () => {
  const style = {
    height: "750px",
  };
  return (
    <div className={Style.height}>
      <Carousel fade>
        {/* <Carousel.Item interval={3000}>
        <SliderA />
      </Carousel.Item> */}
        <Carousel.Item interval={3000} style={style}>
          <SliderB />
        </Carousel.Item>
        <Carousel.Item interval={3000} style={style}>
          <SliderC />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
