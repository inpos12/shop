// http://www.jogunshop.com/shop/shopbrand.html?xcode=083&type=N&mcode=001

import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Section_3 from "../Shoes/Item.module.css";
import Img_1 from "../Shoes/Shoes_2_1.jpg";
import Img_2 from "../Shoes/Shoes_2_2.jpg";
import Img_3 from "../Shoes/Shoes_2_3.gif";
import Img_4 from "../Shoes/Shoes_2_4.gif";
import Img_5 from "../Shoes/Shoes_2_5.gif";
import Img_6 from "../Shoes/Shoes_2_6.jpg";
import Img_7 from "../Shoes/Shoes_2_7.jpg";
import Img_8 from "../Shoes/Shoes_2_8.jpg";
import { DataLink, FormatPrice } from "../../common/CommonFunction.js";

function Item(props) {
  const initalPrice = props.price;
  const [formattedPrice, setformattedPrice] = useState();
  useEffect(() => {
    FormatPrice(setformattedPrice, initalPrice);
  }, [initalPrice]);

  return (
    <>
      <Col lg={3} md={5} sm={5} xs={5} id="Shoes_col">
        <Link to={props.href}>
          <img src={props.imgsrc} className={Section_3.Shoes_img}></img>
        </Link>
        <div className={Section_3.Shoes_title}>{props.title}</div>
        <div className={Section_3.Shoes_p}>
          {props.description}
          {props.size}
        </div>
        <div className={Section_3.Shoes_Price}>{formattedPrice}원</div>
      </Col>
    </>
  );
}

const Shose = () => {
  const [shoesData_1, setShoesData_1] = useState("");
  const [shoesData_2, setShoesData_2] = useState("");
  const [shoesData_3, setShoesData_3] = useState("");
  const [shoesData_4, setShoesData_4] = useState("");
  const [shoesData_5, setShoesData_5] = useState("");
  const [shoesData_6, setShoesData_6] = useState("");
  const [shoesData_7, setShoesData_7] = useState("");
  const [shoesData_8, setShoesData_8] = useState("");

  useEffect(() => {
    const CollectionId = "Shoes";
    DataLink(CollectionId, "그리드 배색 키높이 스니커즈", setShoesData_1);
    DataLink(CollectionId, "로티 배색 스니커즈", setShoesData_2);
    DataLink(CollectionId, "비셀루 스웨이드 스티치 로퍼", setShoesData_3);
    DataLink(CollectionId, "하이키 소가죽 독일군 스니커즈", setShoesData_4);
    DataLink(CollectionId, "런데이 2type 화이트 스니커즈", setShoesData_5);
    DataLink(CollectionId, "알리드 사각코 워커", setShoesData_6);
    DataLink(CollectionId, "스티치 라인업 슬립온", setShoesData_7);
    DataLink(CollectionId, "제이콥 베이직 로퍼", setShoesData_8);
  }, []);
  return (
    <>
      <Container id="Item_Container">
        <Row id="Shoes_row">
          <Item
            href={shoesData_1.href}
            imgsrc={Img_1}
            title={shoesData_1.name}
            size={shoesData_1.size}
            price={shoesData_1.price}
          />
          <Item
            href={shoesData_2.href}
            imgsrc={Img_2}
            title={shoesData_2.name}
            size={shoesData_2.size}
            price={shoesData_2.price}
          />
          <Item
            href={shoesData_3.href}
            imgsrc={Img_3}
            title={shoesData_3.name}
            size={shoesData_3.size}
            price={shoesData_3.price}
          />
          <Item
            href={shoesData_4.href}
            imgsrc={Img_4}
            title={shoesData_4.name}
            size={shoesData_4.size}
            price={shoesData_4.price}
          />
        </Row>
        <Row id="Shoes_row">
          <Item
            href={shoesData_5.href}
            imgsrc={Img_5}
            title={shoesData_5.name}
            size={shoesData_5.size}
            price={shoesData_5.price}
          />
          <Item
            href={shoesData_6.href}
            imgsrc={Img_6}
            title={shoesData_6.name}
            size={shoesData_6.size}
            price={shoesData_6.price}
          />
          <Item
            href={shoesData_7.href}
            imgsrc={Img_7}
            title={shoesData_7.name}
            size={shoesData_7.size}
            price={shoesData_7.price}
          />
          <Item
            href={shoesData_8.href}
            imgsrc={Img_8}
            title={shoesData_8.name}
            size={shoesData_8.size}
            price={shoesData_8.price}
          />
        </Row>
        <Row id="Shoes_row">
          <Item
            href={shoesData_1.href}
            imgsrc={Img_1}
            title={shoesData_1.name}
            size={shoesData_1.size}
            price={shoesData_1.price}
          />
          <Item
            href={shoesData_2.href}
            imgsrc={Img_2}
            title={shoesData_2.name}
            size={shoesData_2.size}
            price={shoesData_2.price}
          />
          <Item
            href={shoesData_3.href}
            imgsrc={Img_3}
            title={shoesData_3.name}
            size={shoesData_3.size}
            price={shoesData_3.price}
          />
          <Item
            href={shoesData_4.href}
            imgsrc={Img_4}
            title={shoesData_4.name}
            size={shoesData_4.size}
            price={shoesData_4.price}
          />
        </Row>
      </Container>
    </>
  );
};
export default Shose;
