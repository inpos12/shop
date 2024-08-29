import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import Img_1 from "../Section3_1/item_2_1.jpg"; //  Shoes item img_1
import Img_2 from "../Section3_1/item_2_2.jpg"; //  Shoes item img_2
import Img_3 from "../Section3_1/item_2_3.gif"; //  Shoes item img_3
import Img_4 from "../Section3_1/item_2_4.gif"; //  Shoes item img_4
import Img_5 from "../Section3_1/item_2_5.gif"; //  Shoes item img_5
import Img_6 from "../Section3_1/item_2_6.gif"; //  Shoes item img_6
import { ItemBox, RowBox, RowButton } from "../Components.jsx";
import "../Section3_1/Section3_1.module.css";
import { DataLink } from "../../../common/CommonFunction.js";

const Section3_1 = () => {
  const [ShoesData_1, setShoesData_1] = useState("");
  const [ShoesData_2, setShoesData_2] = useState("");
  const [ShoesData_3, setShoesData_3] = useState("");
  const [ShoesData_4, setShoesData_4] = useState("");
  const [ShoesData_5, setShoesData_5] = useState("");
  const [ShoesData_6, setShoesData_6] = useState("");
  useEffect(() => {
    const CollectionId = "Shoes";
    DataLink(CollectionId, "그리드 배색 키높이 스니커즈", setShoesData_1);
    DataLink(CollectionId, "로티 배색 스니커즈", setShoesData_2);
    DataLink(CollectionId, "비셀루 스웨이드 스티치 로퍼", setShoesData_3);
    DataLink(CollectionId, "하이키 소가죽 독일군 스니커즈", setShoesData_4);
    DataLink(CollectionId, "런데이 2type 화이트 스니커즈", setShoesData_5);
    DataLink(CollectionId, "알리드 사각코 워커", setShoesData_6);
  }, []);
  return (
    <div id="Section3_container">
      <Container>
        <RowBox RowTitle="Shoes" />
        <Row id="Section3_row">
          <ItemBox
            imgsrc={Img_1}
            href={ShoesData_1.homehref}
            title_1={ShoesData_1.name}
            titleclassName="custom-title"
            sizes={ShoesData_1.size}
            price={ShoesData_1.price}
          />
          <ItemBox
            imgsrc={Img_2}
            href={ShoesData_2.homehref}
            title_1={ShoesData_2.name}
            titleclassName="custom-title"
            sizes={ShoesData_2.size}
            price={ShoesData_2.price}
          />
          <ItemBox
            imgsrc={Img_3}
            href={ShoesData_3.homehref}
            title_1={ShoesData_3.name}
            titleclassName="custom-title"
            sizes={ShoesData_3.size}
            price={ShoesData_3.price}
          />
          <ItemBox
            imgsrc={Img_4}
            href={ShoesData_4.homehref}
            title_1={ShoesData_4.name}
            titleclassName="custom-title"
            sizes={ShoesData_4.size}
            price={ShoesData_4.price}
          />
          <ItemBox
            imgsrc={Img_5}
            href={ShoesData_5.homehref}
            title_1={ShoesData_5.name}
            titleclassName="custom-title"
            sizes={ShoesData_5.size}
            price={ShoesData_5.price}
          />
          <ItemBox
            imgsrc={Img_6}
            href={ShoesData_6.homehref}
            title_1={ShoesData_6.name}
            titleclassName="custom-title"
            sizes={ShoesData_6.size}
            price={ShoesData_6.price}
          />
        </Row>
        <RowButton href="/Shoes" />
      </Container>
    </div>
  );
};
export default Section3_1;
