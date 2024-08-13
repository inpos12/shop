import React from "react";
import img_1 from "./Shoes_2_1.jpg";
import Item_List from "../../item.json";
import ProductPage from "../../../ProductPageCommon/ProductPage";

const Shoes_1_page = () => {
  return (
    <>
      <ProductPage
        imgsrc={img_1}
        title_1={Item_List.Shoes_items[0].title}
        price={Item_List.Shoes_items[0].price}
      />
    </>
  );
};

export default Shoes_1_page;
