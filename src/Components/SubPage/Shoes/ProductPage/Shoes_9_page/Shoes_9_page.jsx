import React, { useEffect, useState } from "react";
import img_1 from "./Shoes_2_9.jpg";
import ProductPage from "../../../ProductPageCommon/ProductPage";
import { DataLink } from "../../../../common/CommonFunction";

const Shoes_9_page = () => {
  const [shoesData, setShoesData] = useState("");
  useEffect(() => {
    DataLink("Shoes", "그리드 배색 키높이 스니커즈", setShoesData);
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

export default Shoes_9_page;
