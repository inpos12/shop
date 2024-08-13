import React from "react";
import img_10 from "./Shoes_2_10.jpg";
import Item_List from "../../item.json";
import ProductPage from "../../../ProductPageCommon/ProductPage";

const Shoes_10_page = () => {
  return (
    <>
      <ProductPage
        imgsrc={img_10}
        title_1={Item_List.Shoes_items[9].title}
        price={Item_List.Shoes_items[9].price}
      />
    </>
  );
};

export default Shoes_10_page;
