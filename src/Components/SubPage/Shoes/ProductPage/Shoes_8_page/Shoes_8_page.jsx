import React from "react";
import img_8 from "./Shoes_2_8.jpg";
import Item_List from "../../item.json";
import ProductPage from "../../../ProductPageCommon/ProductPage";

const Shoes_8_page = () => {
  return (
    <>
      <ProductPage
        imgsrc={img_8}
        title_1={Item_List.Shoes_items[7].title}
        price={Item_List.Shoes_items[7].price}
      />
    </>
  );
};

export default Shoes_8_page;
