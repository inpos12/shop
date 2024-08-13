import React from "react";
import { Item_Banner } from "../SubPage/Daily/Item.style";
import "../Style/interval.css";
import Daily from "../SubPage/Daily/Daily";
const Daily_Look = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Item_Banner />
      <Daily />
    </div>
  );
};
export default Daily_Look;
