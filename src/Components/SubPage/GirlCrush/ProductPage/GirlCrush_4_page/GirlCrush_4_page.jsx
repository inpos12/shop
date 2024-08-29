import React, { useState, useEffect } from "react";
import img_1 from "./GirlCrush_1_4.gif";
import ProductPage from "../../../ProductPageCommon/ProductPage";
import { DataLink } from "../../../../common/CommonFunction";

const GirlCrush_4_page = () => {
  const [GirlCrushData, setGirlCrushData] = useState("");
  useEffect(() => {
    DataLink("GirlCrush", "보넬 나일론 루즈핏 점퍼", setGirlCrushData);
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

export default GirlCrush_4_page;
