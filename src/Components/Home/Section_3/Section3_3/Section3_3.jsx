import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "../../../database_test/Firebase.jsx";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

import Img_1 from "../Section3_3/item_1_1.gif"; //  Shoes item img_1
import Img_2 from "../Section3_3/item_1_2.gif"; //  Shoes item img_2
import Img_3 from "../Section3_3/item_1_3.gif"; //  Shoes item img_3
import Img_4 from "../Section3_3/item_1_4.gif"; //  Shoes item img_4
import Img_5 from "../Section3_3/item_1_5.gif"; //  Shoes item img_5
import Img_6 from "../Section3_3/item_1_6.gif"; //  Shoes item img_6
import { ItemBox, RowBox, RowButton } from "../Components.jsx";
import "../Section3_3/Section3_3.module.css";
import { DataLink } from "../../../common/CommonFunction.js";

const Section3_3 = () => {
  const [dailyData_1, setDailyData_1] = useState("");
  const [dailyData_2, setDailyData_2] = useState("");
  const [dailyData_3, setDailyData_3] = useState("");
  const [dailyData_4, setDailyData_4] = useState("");
  const [dailyData_5, setDailyData_5] = useState("");
  const [dailyData_6, setDailyData_6] = useState("");
  useEffect(() => {
    const CollectionId = "Daily";
    DataLink(CollectionId, "씨리얼셔츠", setDailyData_1);
    DataLink(CollectionId, "캘리알파카니트", setDailyData_2);
    DataLink(CollectionId, "코코샤가디건", setDailyData_3);
    DataLink(CollectionId, "질샌더뉴슬랙스; 시즌버전", setDailyData_4);
    DataLink(CollectionId, "에르텐션스커트; 롱버전", setDailyData_5);
    DataLink(CollectionId, "매니쉬셔츠", setDailyData_6);
  }, []);
  return (
    <div id="Section3_container">
      <Container>
        <RowBox RowTitle="Daily" />
        <Row id="Section3_row">
          <ItemBox
            imgsrc={Img_1}
            href={dailyData_1.homehref}
            titleclassName="custom-title"
            title_1={dailyData_1.description}
            title_2={dailyData_1.name}
            price={dailyData_1.price}
          />
          <ItemBox
            imgsrc={Img_2}
            href={dailyData_2.homehref}
            titleclassName="custom-title"
            title_1={dailyData_2.description}
            title_2={dailyData_2.name}
            price={dailyData_2.price}
          />
          <ItemBox
            imgsrc={Img_3}
            href={dailyData_3.homehref}
            titleclassName="custom-title"
            title_1={dailyData_3.description}
            title_2={dailyData_3.name}
            price={dailyData_3.price}
          />
          <ItemBox
            imgsrc={Img_4}
            href={dailyData_4.homehref}
            titleclassName="custom-title"
            title_1={dailyData_4.description}
            title_2={dailyData_4.name}
            price={dailyData_4.price}
          />
          <ItemBox
            imgsrc={Img_5}
            href={dailyData_5.homehref}
            titleclassName="custom-title"
            title_1={dailyData_5.description}
            title_2={dailyData_5.name}
            price={dailyData_5.price}
          />
          <ItemBox
            imgsrc={Img_6}
            href={dailyData_6.homehref}
            titleclassName="custom-title"
            title_1={dailyData_6.description}
            title_2={dailyData_6.name}
            price={dailyData_6.price}
          />
        </Row>
        <RowButton href="/Daily" />
      </Container>
    </div>
  );
};
export default Section3_3;
