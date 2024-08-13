import React from "react";
import img_7 from "./Shoes_2_7.jpg";
import Item_List from "../../item.json";
import ProductPage from "../../../ProductPageCommon/ProductPage";

const Shoes_7_page = () => {
  return (
    <>
      <ProductPage
        imgsrc={img_7}
        title_1={Item_List.Shoes_items[6].title}
        price={Item_List.Shoes_items[6].price}
      />
    </>
  );
};

export default Shoes_7_page;
