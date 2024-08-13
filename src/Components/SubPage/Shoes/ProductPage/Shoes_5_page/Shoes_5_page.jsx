import React from "react";
import img_5 from "./Shoes_2_5.gif";
import Item_List from "../../item.json";
import ProductPage from "../../../ProductPageCommon/ProductPage";

const Shoes_5_page = () => {
  return (
    <>
      <ProductPage
        imgsrc={img_5}
        title_1={Item_List.Shoes_items[4].title}
        price={Item_List.Shoes_items[4].price}
      />
    </>
  );
};

export default Shoes_5_page;
