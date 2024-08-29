import React, { useState, useEffect } from "react";
import img_1 from "./GirlCrush_1_3.gif";
import ProductPage from "../../../ProductPageCommon/ProductPage";
import { DataLink } from "../../../../common/CommonFunction";

const GirlCrush_3_page = () => {
  const [GirlCrushData, setGirlCrushData] = useState("");
  useEffect(() => {
    DataLink("GirlCrush", "프런트 하이핏 부츠컷팬츠", setGirlCrushData);
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

export default GirlCrush_3_page;
