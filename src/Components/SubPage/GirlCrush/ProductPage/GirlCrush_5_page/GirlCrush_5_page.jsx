import React from "react";
import img_5 from "./GirlCrush_1_5.gif";
import Item_List from "../../item.json";
import ProductPage from "../../../ProductPageCommon/ProductPage";

const GirlCrush_5_page = () => {
  return (
    <>
      <ProductPage
        imgsrc={img_5}
        title_1={Item_List[4].title_1}
        title_2={Item_List[4].title_2}
        price={Item_List[4].price}
        color={Item_List[4].color}
      />
    </>
  );
};

export default GirlCrush_5_page;
