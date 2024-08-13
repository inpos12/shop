import React from "react";
import img_11 from "./Shoes_2_11.gif";
import Item_List from "../../item.json";
import ProductPage from "../../../ProductPageCommon/ProductPage";

const Shoes_11_page = () => {
  return (
    <>
      <ProductPage
        imgsrc={img_11}
        title_1={Item_List.Shoes_items[10].title}
        price={Item_List.Shoes_items[10].price}
      />
    </>
  );
};

export default Shoes_11_page;
