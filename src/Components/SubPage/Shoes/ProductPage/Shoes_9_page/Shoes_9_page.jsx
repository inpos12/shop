import React from "react";
import img_9 from "./Shoes_2_9.jpg";
import Item_List from "../../item.json";
import ProductPage from "../../../ProductPageCommon/ProductPage";

const Shoes_9_page = () => {
  return (
    <>
      <ProductPage
        imgsrc={img_9}
        title_1={Item_List.Shoes_items[8].title}
        price={Item_List.Shoes_items[8].price}
      />
    </>
  );
};

export default Shoes_9_page;
