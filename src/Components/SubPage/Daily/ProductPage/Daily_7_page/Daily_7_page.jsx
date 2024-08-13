import React from "react";
import img_7 from "./Daily_1_7.gif";
import Item_List from "../../item.json";
import ProductPage from "../../../ProductPageCommon/ProductPage";

const Daily_7_page = () => {
  return (
    <>
      <ProductPage
        imgsrc={img_7}
        title_1={Item_List[6].title_1}
        title_2={Item_List[6].title_2}
        price={Item_List[6].price}
        color={Item_List[6].color}
      />
    </>
  );
};

export default Daily_7_page;
