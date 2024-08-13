import React from "react";
import { styled } from "styled-components";
import SliderBImg from "../Slider/a_pc_ver_2.png";
import SliderCImg from "../Slider/a_pc_ver_3.png";

export const SliderB = styled.div`
  background-image: url(${SliderBImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 1000px;
  transform: translateY(-25%);
  @media (max-height: 480px) {
  }
`;

export const SliderC = styled.div`
  background-image: url(${SliderCImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 1000px;
  transform: translateY(-25%);
  @media (max-height: 480px) {
  }
`;
