import React from "react";
import img_3 from "./Daily_1_3.gif";
import Item_List from "../../item.json";
import ProductPage from "../../../ProductPageCommon/ProductPage";

const Daily_3_page = () => {
  return (
    <>
      <ProductPage
        imgsrc={img_3}
        title_1={Item_List[2].title_1}
        title_2={Item_List[2].title_2}
        price={Item_List[2].price}
        color={Item_List[2].color}
      />
    </>
  );
};

export default Daily_3_page;
