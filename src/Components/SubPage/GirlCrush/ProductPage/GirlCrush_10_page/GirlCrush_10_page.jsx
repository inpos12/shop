import React from "react";
import img_10 from "./GirlCrush_1_10.gif";
import Item_List from "../../item.json";
import ProductPage from "../../../ProductPageCommon/ProductPage";

const GirlCrush_10_page = () => {
  return (
    <>
      <ProductPage
        imgsrc={img_10}
        title_1={Item_List[9].title_1}
        title_2={Item_List[9].title_2}
        price={Item_List[9].price}
        color={Item_List[9].color}
      />
    </>
  );
};

export default GirlCrush_10_page;
