import React, { useEffect, useState } from "react";
import img_1 from "./Daily_1_12.gif";
import ProductPage from "../../../ProductPageCommon/ProductPage";
import { DataLink } from "../../../../common/CommonFunction";

const Daily_12_page = () => {
  const [dailyData, setDailyData] = useState("");
  useEffect(() => {
    DataLink("Daily", "매니쉬셔츠", setDailyData);
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

export default Daily_12_page;
