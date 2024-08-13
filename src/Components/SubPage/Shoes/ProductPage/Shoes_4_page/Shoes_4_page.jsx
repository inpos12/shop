import React from "react";
import img_3 from "./Shoes_2_4.gif";
import Item_List from "../../item.json";
import ProductPage from "../../../ProductPageCommon/ProductPage";

const Shoes_4_page = () => {
  return (
    <>
      <ProductPage
        imgsrc={img_3}
        title_1={Item_List.Shoes_items[3].title}
        price={Item_List.Shoes_items[3].price}
      />
    </>
  );
};

export default Shoes_4_page;
