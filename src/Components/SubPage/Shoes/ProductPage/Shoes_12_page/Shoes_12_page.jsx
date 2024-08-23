import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import img_1 from "./Shoes_2_12.gif";

import ProductPage from "../../../ProductPageCommon/ProductPage";
import db from "../../../../database_test/Firebase";

const Shoes_12_page = () => {
  const [shoesData_1, setShoesData_1] = useState("");
  useEffect(() => {
    async function Shoes_1() {
      // 하이키 소가죽 독일군 스니커즈
      const ShoesRef = doc(db, "Shoes", "하이키 소가죽 독일군 스니커즈");
      const ShoesSnap = await getDoc(ShoesRef);
      setShoesData_1(ShoesSnap.data());
    }
    Shoes_1();
  }, []);

  return (
    <>
      <ProductPage
        imgsrc={img_1}
        title_1={shoesData_1.name}
        price={shoesData_1.price}
      />
    </>
  );
};

export default Shoes_12_page;
