import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import img_1 from "./Shoes_2_1.jpg";

import ProductPage from "../../../ProductPageCommon/ProductPage";
import db from "../../../../database_test/Firebase";

const Shoes_1_page = () => {
  const [shoesData_1, setShoesData_1] = useState("");
  useEffect(() => {
    async function Shoes_1() {
      // 그리드배색키높이스니커즈
      const ShoesRef = doc(db, "Shoes", "그리드 배색 키높이 스니커즈");
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

export default Shoes_1_page;
