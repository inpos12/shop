import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import Img_1 from "../Section3_2/item_1_1.gif"; //  Shoes item img_1
import Img_2 from "../Section3_2/item_1_2.gif"; //  Shoes item img_2
import Img_3 from "../Section3_2/item_1_3.gif"; //  Shoes item img_3
import Img_4 from "../Section3_2/item_1_4.gif"; //  Shoes item img_4
import Img_5 from "../Section3_2/item_1_5.gif"; //  Shoes item img_5
import Img_6 from "../Section3_2/item_1_6.gif"; //  Shoes item img_6
import { ItemBox, RowBox, RowButton } from "../Components.jsx";
import "../Section3_2/Section3_2.module.css";
import { DataLink } from "../../../common/CommonFunction.js";

const Section3_2 = () => {
  const [GirlCrushData_1, setGirlCrushData_1] = useState("");
  const [GirlCrushData_2, setGirlCrushData_2] = useState("");
  const [GirlCrushData_3, setGirlCrushData_3] = useState("");
  const [GirlCrushData_4, setGirlCrushData_4] = useState("");
  const [GirlCrushData_5, setGirlCrushData_5] = useState("");
  const [GirlCrushData_6, setGirlCrushData_6] = useState("");
  useEffect(() => {
    const CollectionId = "GirlCrush";
    DataLink(CollectionId, "디엔즈 로우 와이드 팬츠", setGirlCrushData_1);
    DataLink(CollectionId, "세핀즈 셔링 크롭 티셔츠", setGirlCrushData_2);
    DataLink(CollectionId, "프런트 하이핏 부츠컷팬츠", setGirlCrushData_3);
    DataLink(CollectionId, "보넬 나일론 루즈핏 점퍼", setGirlCrushData_4);
    DataLink(CollectionId, "뷰리팅 레터링 티셔츠", setGirlCrushData_5);
    DataLink(CollectionId, "스텐비 데님 크롭 자켓", setGirlCrushData_6);
  }, []);
  return (
    <div id="Section3_container">
      <Container>
        <RowBox RowTitle="GirlCrush" />
        <Row id="Section3_row">
          <ItemBox
            imgsrc={Img_1}
            href={GirlCrushData_1.homehref}
            titleclassName="custom-title"
            title_1={GirlCrushData_1.name}
            price={GirlCrushData_1.price}
          />
          <ItemBox
            imgsrc={Img_2}
            href={GirlCrushData_2.homehref}
            titleclassName="custom-title"
            title_1={GirlCrushData_2.name}
            price={GirlCrushData_2.price}
          />
          <ItemBox
            imgsrc={Img_3}
            href={GirlCrushData_3.homehref}
            titleclassName="custom-title"
            title_1={GirlCrushData_3.name}
            price={GirlCrushData_3.price}
          />
          <ItemBox
            imgsrc={Img_4}
            href={GirlCrushData_4.homehref}
            titleclassName="custom-title"
            title_1={GirlCrushData_4.name}
            price={GirlCrushData_4.price}
          />
          <ItemBox
            imgsrc={Img_5}
            href={GirlCrushData_5.homehref}
            titleclassName="custom-title"
            title_1={GirlCrushData_5.name}
            price={GirlCrushData_5.price}
          />
          <ItemBox
            imgsrc={Img_6}
            href={GirlCrushData_6.homehref}
            titleclassName="custom-title"
            title_1={GirlCrushData_6.name}
            price={GirlCrushData_6.price}
          />
        </Row>
        <RowButton href="/GirlCrush" />
      </Container>
    </div>
  );
};
export default Section3_2;
