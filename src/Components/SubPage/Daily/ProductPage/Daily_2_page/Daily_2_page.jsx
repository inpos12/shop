import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import img_1 from "./Daily_1_2.gif";

import ProductPage from "../../../ProductPageCommon/ProductPage";
import db from "../../../../database_test/Firebase";

const Daily_2_page = () => {
  const [dailyData, setDailyData] = useState("");
  useEffect(() => {
    async function Daily_2() {
      // 캘리알파카니트
      const DailyRef = doc(db, "Daily", "캘리알파카니트");
      const DailySnap = await getDoc(DailyRef);
      setDailyData(DailySnap.data());
    }
    Daily_2();
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

export default Daily_2_page;
