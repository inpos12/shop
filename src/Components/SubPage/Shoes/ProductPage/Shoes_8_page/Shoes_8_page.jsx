import React, { useEffect, useState } from "react";
import img_1 from "./Shoes_2_8.jpg";
import ProductPage from "../../../ProductPageCommon/ProductPage";
import { DataLink } from "../../../../common/CommonFunction";

const Shoes_8_page = () => {
  const [shoesData, setShoesData] = useState("");
  useEffect(() => {
    DataLink("Shoes", "제이콥 베이직 로퍼", setShoesData);
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

export default Shoes_8_page;
