import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "../../database_test/Firebase.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Daily_style from "../Daily/Daily.module.css";
import Item_List from "./item.json";
import { Link } from "react-router-dom";
import Img_1 from "../Daily/Daily_1_1.gif"; //Girl Crush Look item img_1
import Img_2 from "../Daily/Daily_1_2.gif"; //Girl Crush Look item img_1
import Img_3 from "../Daily/Daily_1_3.gif"; //Girl Crush Look item img_1
import Img_4 from "../Daily/Daily_1_4.gif"; //Girl Crush Look item img_1
import Img_5 from "../Daily/Daily_1_5.gif"; //Girl Crush Look item img_1
import Img_6 from "../Daily/Daily_1_6.gif"; //Girl Crush Look item img_1
import Img_7 from "../Daily/Daily_1_1.gif"; //Girl Crush Look item img_1
import Img_8 from "../Daily/Daily_1_2.gif"; //Girl Crush Look item img_1
import Img_9 from "../Daily/Daily_1_3.gif"; //Girl Crush Look item img_1
import Img_10 from "../Daily/Daily_1_4.gif"; //Girl Crush Look item img_1
import Img_11 from "../Daily/Daily_1_5.gif"; //Girl Crush Look item img_1
import Img_12 from "../Daily/Daily_1_6.gif"; //Girl Crush Look item img_1

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
      <Col
        lg={3}
        md={5}
        sm={5}
        xs={5}
        id="Daily_col"
        className={Daily_style.Daily_col_1}
      >
        {/* /Daily/1 */}
        <Link to={props.href}>
          <img src={props.imgsrc} className={Daily_style.Daily_img}></img>
        </Link>

        <div className={Daily_style.Daily_title}>
          {props.title_1}
          <br />
          {props.title_2}
        </div>
        <div className={Daily_style.Daily_Price}>{formattedPrice}원</div>
      </Col>
    </>
  );
}
const Daily = () => {
  const [dailyData_1, setDailyData_1] = useState("");
  const [dailyData_2, setDailyData_2] = useState("");
  const [dailyData_3, setDailyData_3] = useState("");
  const [dailyData_4, setDailyData_4] = useState("");
  const [dailyData_5, setDailyData_5] = useState("");
  const [dailyData_6, setDailyData_6] = useState("");
  useEffect(() => {
    async function Daily_1() {
      // 씨리얼셔츠
      const DailyRef = doc(db, "Daily", "씨리얼셔츠");
      const DailySnap = await getDoc(DailyRef);
      setDailyData_1(DailySnap.data());
    }
    async function Daily_2() {
      // 씨리얼셔츠
      const DailyRef = doc(db, "Daily", "캘리알파카니트");
      const DailySnap = await getDoc(DailyRef);
      setDailyData_2(DailySnap.data());
    }
    async function Daily_3() {
      // 씨리얼셔츠
      const DailyRef = doc(db, "Daily", "코코샤가디건");
      const DailySnap = await getDoc(DailyRef);
      setDailyData_3(DailySnap.data());
    }
    async function Daily_4() {
      // 씨리얼셔츠
      const DailyRef = doc(db, "Daily", "질샌더뉴슬랙스; 시즌버전");
      const DailySnap = await getDoc(DailyRef);
      setDailyData_4(DailySnap.data());
    }
    async function Daily_5() {
      // 씨리얼셔츠
      const DailyRef = doc(db, "Daily", "에르텐션스커트; 롱버전");
      const DailySnap = await getDoc(DailyRef);
      setDailyData_5(DailySnap.data());
    }
    async function Daily_6() {
      // 씨리얼셔츠
      const DailyRef = doc(db, "Daily", "매니쉬셔츠");
      const DailySnap = await getDoc(DailyRef);
      setDailyData_6(DailySnap.data());
    }
    Daily_1();
    Daily_2();
    Daily_3();
    Daily_4();
    Daily_5();
    Daily_6();
  }, []);
  return (
    <>
      <Container id="Item_Container">
        <Row id="Daily_row">
          <Item
            href={dailyData_1.href}
            imgsrc={Img_1}
            title_1={dailyData_1.description}
            title_2={dailyData_1.name}
            price={dailyData_1.price}
          />
          <Item
            href={dailyData_2.href}
            imgsrc={Img_2}
            title_1={dailyData_2.description}
            title_2={dailyData_2.name}
            price={dailyData_2.price}
          />
          <Item
            href={dailyData_3.href}
            imgsrc={Img_3}
            title_1={dailyData_3.description}
            title_2={dailyData_3.name}
            price={dailyData_3.price}
          />
          <Item
            href={dailyData_4.href}
            imgsrc={Img_4}
            title_1={dailyData_4.description}
            title_2={dailyData_4.name}
            price={dailyData_4.price}
          />
        </Row>
        <Row id="Daily_row">
          <Item
            href={dailyData_5.href}
            imgsrc={Img_5}
            title_1={dailyData_5.description}
            title_2={dailyData_5.name}
            price={dailyData_5.price}
          />
          <Item
            href={dailyData_6.href}
            imgsrc={Img_6}
            title_1={dailyData_6.description}
            title_2={dailyData_6.name}
            price={dailyData_6.price}
          />
          <Item
            href={dailyData_1.href}
            imgsrc={Img_7}
            title_1={dailyData_1.description}
            title_2={dailyData_1.name}
            price={dailyData_1.price}
          />
          <Item
            href={dailyData_2.href}
            imgsrc={Img_8}
            title_1={dailyData_2.description}
            title_2={dailyData_2.name}
            price={dailyData_2.price}
          />
        </Row>
        <Row id="Daily_row">
          <Item
            href={dailyData_3.href}
            imgsrc={Img_9}
            title_1={dailyData_3.description}
            title_2={dailyData_3.name}
            price={dailyData_3.price}
          />
          <Item
            href={dailyData_4.href}
            imgsrc={Img_10}
            title_1={dailyData_4.description}
            title_2={dailyData_4.name}
            price={dailyData_4.price}
          />
          <Item
            href={dailyData_5.href}
            imgsrc={Img_11}
            title_1={dailyData_5.description}
            title_2={dailyData_5.name}
            price={dailyData_5.price}
          />
          <Item
            href={dailyData_6.href}
            imgsrc={Img_12}
            title_1={dailyData_6.description}
            title_2={dailyData_6.name}
            price={dailyData_6.price}
          />
        </Row>
      </Container>
    </>
  );
};

export default Daily;
