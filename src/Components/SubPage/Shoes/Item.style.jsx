import { styled } from "styled-components";
import Banner_img from "../Shoes/stylebanner_1.jpg";

export const Item_Banner = styled.div`
  background-image: url(${Banner_img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  padding-top: 500px;
  position: relative;

  margin-bottom: 80px;
  transform: translateY(14%);
`;
