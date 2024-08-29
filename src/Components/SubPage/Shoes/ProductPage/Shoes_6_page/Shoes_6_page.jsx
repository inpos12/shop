import React, { useEffect, useState } from "react";
import img_1 from "./Shoes_2_6.jpg";
import ProductPage from "../../../ProductPageCommon/ProductPage";
import { DataLink } from "../../../../common/CommonFunction";

const Shoes_6_page = () => {
  const [shoesData, setShoesData] = useState("");
  useEffect(() => {
    DataLink("Shoes", "알리드 사각코 워커", setShoesData);
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

export default Shoes_6_page;
