import React from "react";
import Shose from "../SubPage/Shoes/Shose";
import { Item_Banner } from "../SubPage/Shoes/Item.style";
const Shoes = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Item_Banner />
      <Shose />
    </div>
  );
};
export default Shoes;
