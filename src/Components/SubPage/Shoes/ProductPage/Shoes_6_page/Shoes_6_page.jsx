import React from "react";
import img_6 from "./Shoes_2_6.jpg";
import Item_List from "../../item.json";
import ProductPage from "../../../ProductPageCommon/ProductPage";

const Shoes_6_page = () => {
  return (
    <>
      <ProductPage
        imgsrc={img_6}
        title_1={Item_List.Shoes_items[5].title}
        price={Item_List.Shoes_items[5].price}
      />
    </>
  );
};

export default Shoes_6_page;
