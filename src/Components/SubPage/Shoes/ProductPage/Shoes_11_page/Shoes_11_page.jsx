import React, { useEffect, useState } from "react";
import img_1 from "./Shoes_2_11.gif";
import ProductPage from "../../../ProductPageCommon/ProductPage";
import { DataLink } from "../../../../common/CommonFunction";

const Shoes_11_page = () => {
  const [shoesData, setShoesData] = useState("");
  useEffect(() => {
    DataLink("Shoes", "비셀루 스웨이드 스티치 로퍼", setShoesData);
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

export default Shoes_11_page;
