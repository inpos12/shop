import React from "react";
import img_2 from "./Shoes_2_2.jpg";
import Item_List from "../../item.json";
import ProductPage from "../../../ProductPageCommon/ProductPage";

const Shoes_1_page = () => {
  return (
    <>
      <ProductPage
        imgsrc={img_2}
        title_1={Item_List.Shoes_items[1].title}
        price={Item_List.Shoes_items[1].price}
      />
    </>
  );
};

export default Shoes_1_page;
