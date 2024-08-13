import React from "react";
import img_1 from "./Daily_1_1.gif";
import Item_List from "../../item.json";
import ProductPage from "../../../ProductPageCommon/ProductPage";

const Daily_1_page = () => {
  return (
    <>
      <ProductPage
        imgsrc={img_1}
        title_1={Item_List[0].title_1}
        title_2={Item_List[0].title_2}
        price={Item_List[0].price}
        color={Item_List[0].color}
      />
    </>
  );
};

export default Daily_1_page;
