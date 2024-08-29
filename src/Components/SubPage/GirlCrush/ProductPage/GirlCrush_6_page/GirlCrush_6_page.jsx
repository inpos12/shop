import React, { useState, useEffect } from "react";
import img_1 from "./GirlCrush_1_6.gif";
import ProductPage from "../../../ProductPageCommon/ProductPage";
import { DataLink } from "../../../../common/CommonFunction";

const GirlCrush_6_page = () => {
  const [GirlCrushData, setGirlCrushData] = useState("");
  useEffect(() => {
    DataLink("GirlCrush", "스텐비 데님 크롭 자켓", setGirlCrushData);
  }, []);
  return (
    <>
      <ProductPage
        imgsrc={img_1}
        title_1={GirlCrushData.name}
        price={GirlCrushData.price}
        color={GirlCrushData.size}
      />
    </>
  );
};

export default GirlCrush_6_page;
