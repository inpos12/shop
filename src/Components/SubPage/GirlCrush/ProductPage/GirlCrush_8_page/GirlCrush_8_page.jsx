import React, { useState, useEffect } from "react";
import img_1 from "./GirlCrush_1_8.gif";
import ProductPage from "../../../ProductPageCommon/ProductPage";
import { DataLink } from "../../../../common/CommonFunction";

const GirlCrush_8_page = () => {
  const [GirlCrushData, setGirlCrushData] = useState("");
  useEffect(() => {
    DataLink("GirlCrush", "세핀즈 셔링 크롭 티셔츠", setGirlCrushData);
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

export default GirlCrush_8_page;
