import React from "react";
import img_6 from "./GirlCrush_1_6.gif";
import Item_List from "../../item.json";
import ProductPage from "../../../ProductPageCommon/ProductPage";

const GirlCrush_6_page = () => {
  return (
    <>
      <ProductPage
        imgsrc={img_6}
        title_1={Item_List[5].title_1}
        title_2={Item_List[5].title_2}
        price={Item_List[5].price}
        color={Item_List[5].color}
      />
    </>
  );
};

export default GirlCrush_6_page;
