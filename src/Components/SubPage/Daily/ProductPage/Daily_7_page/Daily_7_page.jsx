import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import img_1 from "./Daily_1_7.gif";

import ProductPage from "../../../ProductPageCommon/ProductPage";
import db from "../../../../database_test/Firebase";

const Daily_7_page = () => {
  const [dailyData, setDailyData] = useState("");
  useEffect(() => {
    async function Daily_7() {
      // 씨리얼셔츠
      const DailyRef = doc(db, "Daily", "씨리얼셔츠");
      const DailySnap = await getDoc(DailyRef);
      setDailyData(DailySnap.data());
    }
    Daily_7();
  }, []);

  return (
    <>
      <ProductPage
        imgsrc={img_1}
        title_1={dailyData.description}
        title_2={dailyData.name}
        price={dailyData.price}
        color={dailyData.size}
      />
    </>
  );
};

export default Daily_7_page;
