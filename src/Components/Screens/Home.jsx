import React from "react";
import Slider from "../Home/Slider/Slider";
import Section1 from "../Home/Section_1/Section_1";
import Section2 from "../Home/Section_2/Section_2";
import Section3 from "../Home/Section_3/Section3_1/Section3_1";
import Section3_1 from "../Home/Section_3/Section3_2/Section3_2";
import Section3_2 from "../Home/Section_3/Section3_3/Section3_3";
import Section4 from "../Home/Section_4/Section_4";

// https://lakickz.com/
const Home = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Slider />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section3_1 />
      <Section3_2 />
      <Section4 />
    </div>
  );
};
export default Home;
