import React from "react";
import img_12 from "./Shoes_2_12.gif";
import Item_List from "../../item.json";
import ProductPage from "../../../ProductPageCommon/ProductPage";

const Shoes_12_page = () => {
  return (
    <>
      <ProductPage
        imgsrc={img_12}
        title_1={Item_List.Shoes_items[11].title}
        price={Item_List.Shoes_items[11].price}
      />
    </>
  );
};

export default Shoes_12_page;
