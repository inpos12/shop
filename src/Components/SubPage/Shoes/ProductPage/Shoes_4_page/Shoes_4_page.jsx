import React, { useEffect, useState } from "react";
import img_1 from "./Shoes_2_4.gif";
import ProductPage from "../../../ProductPageCommon/ProductPage";
import { DataLink } from "../../../../common/CommonFunction";

const Shoes_4_page = () => {
  const [shoesData, setShoesData] = useState("");
  useEffect(() => {
    DataLink("Shoes", "하이키 소가죽 독일군 스니커즈", setShoesData);
  }, []);

  return (
    <>
      <ProductPage
        imgsrc={img_1}
        title_1={shoesData.name}
        price={shoesData.price}
      />
    </>
  );
};

export default Shoes_4_page;
