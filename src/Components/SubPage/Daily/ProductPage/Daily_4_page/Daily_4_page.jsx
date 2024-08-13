import React from "react";
import img_4 from "./Daily_1_4.gif";
import Item_List from "../../item.json";
import ProductPage from "../../../ProductPageCommon/ProductPage";

const Daily_4_page = () => {
  return (
    <>
      <ProductPage
        imgsrc={img_4}
        title_1={Item_List[3].title_1}
        title_2={Item_List[3].title_2}
        price={Item_List[3].price}
        color={Item_List[3].color}
      />
    </>
  );
};

export default Daily_4_page;
