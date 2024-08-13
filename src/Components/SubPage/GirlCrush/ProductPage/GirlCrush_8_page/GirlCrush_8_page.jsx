import React from "react";
import img_8 from "./GirlCrush_1_8.gif";
import Item_List from "../../item.json";
import ProductPage from "../../../ProductPageCommon/ProductPage";

const GirlCrush_8_page = () => {
  return (
    <>
      <ProductPage
        imgsrc={img_8}
        title_1={Item_List[7].title_1}
        title_2={Item_List[7].title_2}
        price={Item_List[7].price}
        color={Item_List[7].color}
      />
    </>
  );
};

export default GirlCrush_8_page;
