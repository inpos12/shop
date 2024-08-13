import React from "react";
import img_11 from "./Daily_1_11.gif";
import Item_List from "../../item.json";
import ProductPage from "../../../ProductPageCommon/ProductPage";

const Daily_11_page = () => {
  return (
    <>
      <ProductPage
        imgsrc={img_11}
        title_1={Item_List[10].title_1}
        title_2={Item_List[10].title_2}
        price={Item_List[10].price}
        color={Item_List[10].color}
      />
    </>
  );
};

export default Daily_11_page;
