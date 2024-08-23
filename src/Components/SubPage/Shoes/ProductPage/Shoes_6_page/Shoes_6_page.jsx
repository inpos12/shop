import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import img_1 from "./Shoes_2_6.jpg";

import ProductPage from "../../../ProductPageCommon/ProductPage";
import db from "../../../../database_test/Firebase";

const Shoes_6_page = () => {
  const [shoesData_1, setShoesData_1] = useState("");
  useEffect(() => {
    async function Shoes_1() {
      // 알리드 사각코 워커
      const ShoesRef = doc(db, "Shoes", "알리드 사각코 워커");
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

export default Shoes_6_page;
