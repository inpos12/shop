import React from "react";
import img_9 from "./Daily_1_9.gif";
import Item_List from "../../item.json";
import ProductPage from "../../../ProductPageCommon/ProductPage";

const Daily_9_page = () => {
  return (
    <>
      <ProductPage
        imgsrc={img_9}
        title_1={Item_List[8].title_1}
        title_2={Item_List[8].title_2}
        price={Item_List[8].price}
        color={Item_List[8].color}
      />
    </>
  );
};

export default Daily_9_page;
