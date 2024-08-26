import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "../../database_test/Firebase.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Img_1 from "../GirlCrush/GirlCrush_1_1.gif"; //Girl Crush Look item img_1
import Img_2 from "../GirlCrush/GirlCrush_1_2.gif"; //Girl Crush Look item img_1
import Img_3 from "../GirlCrush/GirlCrush_1_3.gif"; //Girl Crush Look item img_1
import Img_4 from "../GirlCrush/GirlCrush_1_4.gif"; //Girl Crush Look item img_1
import Img_5 from "../GirlCrush/GirlCrush_1_5.gif"; //Girl Crush Look item img_1
import Img_6 from "../GirlCrush/GirlCrush_1_6.gif"; //Girl Crush Look item img_1
import Img_7 from "../GirlCrush/GirlCrush_1_7.gif"; //Girl Crush Look item img_1
import Img_8 from "../GirlCrush/GirlCrush_1_8.gif"; //Girl Crush Look item img_1
import Img_9 from "../GirlCrush/GirlCrush_1_9.gif"; //Girl Crush Look item img_1
import Img_10 from "../GirlCrush/GirlCrush_1_10.gif"; //Girl Crush Look item img_1
import Img_11 from "../GirlCrush/GirlCrush_1_11.gif"; //Girl Crush Look item img_1
import Img_12 from "../GirlCrush/GirlCrush_1_12.gif"; //Girl Crush Look item img_1
import GirlCrush_style from "../GirlCrush/GirlCrush.module.css";

function Item(props) {
  const [formattedPrice, setformattedPrice] = useState();
  useEffect(() => {
    setformattedPrice(
      typeof props.price === "number"
        ? props.price.toLocaleString()
        : "가격 정보 없음"
    );
    console.log(props.price);
  }, [props.price]);
  return (
    <>
      <Col lg={3} md={5} sm={5} xs={5} id="GirlCrush_col">
        <Link to={props.href}>
          <img
            src={props.imgsrc}
            className={GirlCrush_style.GirlCrush_img}
          ></img>
        </Link>
        <div className={GirlCrush_style.GirlCrush_title}>{props.title_1}</div>
        <div className={GirlCrush_style.GirlCrush_Price}>
          {formattedPrice}원
        </div>
      </Col>
    </>
  );
}
const GirlCrush = () => {
  const [GirlCrushData_1, setGirlCrushData_1] = useState("");
  const [GirlCrushData_2, setGirlCrushData_2] = useState("");
  const [GirlCrushData_3, setGirlCrushData_3] = useState("");
  const [GirlCrushData_4, setGirlCrushData_4] = useState("");
  const [GirlCrushData_5, setGirlCrushData_5] = useState("");
  const [GirlCrushData_6, setGirlCrushData_6] = useState("");
  useEffect(() => {
    async function GirlCrush_1() {
      // 씨리얼셔츠
      const GirlCrushRef = doc(db, "GirlCrush", "디엔즈 로우 와이드 팬츠");
      const GirlCrushSnap = await getDoc(GirlCrushRef);
      setGirlCrushData_1(GirlCrushSnap.data());
    }
    async function GirlCrush_2() {
      // 씨리얼셔츠
      const GirlCrushRef = doc(db, "GirlCrush", "세핀즈 셔링 크롭 티셔츠");
      const GirlCrushSnap = await getDoc(GirlCrushRef);
      setGirlCrushData_2(GirlCrushSnap.data());
    }
    async function GirlCrush_3() {
      // 씨리얼셔츠
      const GirlCrushRef = doc(db, "GirlCrush", "프런트 하이핏 부츠컷팬츠");
      const GirlCrushSnap = await getDoc(GirlCrushRef);
      setGirlCrushData_3(GirlCrushSnap.data());
    }
    async function GirlCrush_4() {
      // 씨리얼셔츠
      const GirlCrushRef = doc(db, "GirlCrush", "보넬 나일론 루즈핏 점퍼");
      const GirlCrushSnap = await getDoc(GirlCrushRef);
      setGirlCrushData_4(GirlCrushSnap.data());
    }
    async function GirlCrush_5() {
      // 씨리얼셔츠
      const GirlCrushRef = doc(db, "GirlCrush", "뷰리팅 레터링 티셔츠");
      const GirlCrushSnap = await getDoc(GirlCrushRef);
      setGirlCrushData_5(GirlCrushSnap.data());
    }
    async function GirlCrush_6() {
      // 씨리얼셔츠
      const GirlCrushRef = doc(db, "GirlCrush", "스텐비 데님 크롭 자켓");
      const GirlCrushSnap = await getDoc(GirlCrushRef);
      setGirlCrushData_6(GirlCrushSnap.data());
    }
    GirlCrush_1();
    GirlCrush_2();
    GirlCrush_3();
    GirlCrush_4();
    GirlCrush_5();
    GirlCrush_6();
  }, []);
  return (
    <>
      <Container id="Item_Container">
        <Row id="GirlCrush_row">
          <Item
            href={GirlCrushData_1.href}
            imgsrc={Img_1}
            title_1={GirlCrushData_1.name}
            price={GirlCrushData_1.price}
          />
          <Item
            href={GirlCrushData_2.href}
            imgsrc={Img_2}
            title_1={GirlCrushData_2.name}
            price={GirlCrushData_2.price}
          />
          <Item
            href={GirlCrushData_3.href}
            imgsrc={Img_3}
            title_1={GirlCrushData_3.name}
            price={GirlCrushData_3.price}
          />
          <Item
            href={GirlCrushData_4.href}
            imgsrc={Img_4}
            title_1={GirlCrushData_4.name}
            price={GirlCrushData_4.price}
          />
        </Row>
        <Row id="GirlCrush_row">
          <Item
            href={GirlCrushData_5.href}
            imgsrc={Img_5}
            title_1={GirlCrushData_5.name}
            price={GirlCrushData_5.price}
          />
          <Item
            href={GirlCrushData_6.href}
            imgsrc={Img_6}
            title_1={GirlCrushData_6.name}
            price={GirlCrushData_6.price}
          />
          <Item
            href={GirlCrushData_1.href}
            imgsrc={Img_7}
            title_1={GirlCrushData_1.name}
            price={GirlCrushData_1.price}
          />
          <Item
            href={GirlCrushData_2.href}
            imgsrc={Img_8}
            title_1={GirlCrushData_2.name}
            price={GirlCrushData_2.price}
          />
        </Row>
        <Row id="GirlCrush_row">
          <Item
            href={GirlCrushData_3.href}
            imgsrc={Img_9}
            title_1={GirlCrushData_3.name}
            price={GirlCrushData_3.price}
          />
          <Item
            href={GirlCrushData_4.href}
            imgsrc={Img_10}
            title_1={GirlCrushData_4.name}
            price={GirlCrushData_4.price}
          />
          <Item
            href={GirlCrushData_5.href}
            imgsrc={Img_11}
            title_1={GirlCrushData_5.name}
            price={GirlCrushData_5.price}
          />
          <Item
            href={GirlCrushData_6.href}
            imgsrc={Img_12}
            title_1={GirlCrushData_6.name}
            price={GirlCrushData_6.price}
          />
        </Row>
      </Container>
    </>
  );
};
export default GirlCrush;
