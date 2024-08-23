import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import img_1 from "./Shoes_2_11.gif";

import ProductPage from "../../../ProductPageCommon/ProductPage";
import db from "../../../../database_test/Firebase";

const Shoes_11_page = () => {
  const [shoesData_1, setShoesData_1] = useState("");
  useEffect(() => {
    async function Shoes_1() {
      // 비셀루 스웨이드 스티치 로퍼
      const ShoesRef = doc(db, "Shoes", "비셀루 스웨이드 스티치 로퍼");
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

export default Shoes_11_page;
