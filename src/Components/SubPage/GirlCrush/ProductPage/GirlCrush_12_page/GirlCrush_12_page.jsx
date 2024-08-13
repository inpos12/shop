import React from "react";
import img_12 from "./GirlCrush_1_12.gif";
import Item_List from "../../item.json";
import ProductPage from "../../../ProductPageCommon/ProductPage";

const GirlCrush_12_page = () => {
  return (
    <>
      <ProductPage
        imgsrc={img_12}
        title_1={Item_List[11].title_1}
        title_2={Item_List[11].title_2}
        price={Item_List[11].price}
        color={Item_List[11].color}
      />
    </>
  );
};

export default GirlCrush_12_page;
