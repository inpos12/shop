import React from "react";
import img_2 from "./Daily_1_2.gif";
import Item_List from "../../item.json";
import ProductPage from "../../../ProductPageCommon/ProductPage";

const Daily_2_page = () => {
  return (
    <>
      <ProductPage
        imgsrc={img_2}
        title_1={Item_List[1].title_1}
        title_2={Item_List[1].title_2}
        price={Item_List[1].price}
        color={Item_List[1].color}
      />
    </>
  );
};

export default Daily_2_page;
