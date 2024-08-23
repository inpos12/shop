// http://www.jogunshop.com/shop/shopbrand.html?xcode=083&type=N&mcode=001
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "../../database_test/Firebase.jsx";
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

// 데이터추가 코드

// docSnap.data() will be undefined in this case

// const addShoesData = async (name, href, description, size, price) => {
//   try {
//     // 'Shoes' 컬렉션에 새 문서 추가
//     const docRef = doc(db, "Shoes", name); // docId를 문자열로 설정
//     await setDoc(docRef, {
//       name: name,
//       href: href,
//       description: description,
//       size: size,
//       price: price,
//     });

//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// };
// addShoesData("그리드 배색 키높이 스니커즈", "./1", "", "250mm~280mm", 43000);
// addShoesData("로티 배색 스니커즈", "./2", "", "250mm~280mm", 39000);
// addShoesData("비셀루 스웨이드 스티치 로퍼", "./3", "", "250mm~280mm", 52000);
// addShoesData("하이키 소가죽 독일군 스니커즈", "./4", "", "245mm~280mm", 129000);
// addShoesData("런데이 2type 화이트 스니커즈", "./5", "", "245mm~280mm", 34000);
// addShoesData("알리드 사각코 워커", "./6", "", "245mm~280mm", 75000);
// addShoesData("스티치 라인업 슬립온", "./7", "", "245mm~280mm", 34000);
// addShoesData("제이콥 베이직 로퍼", "./8", "", "245mm~280mm", 45000);

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

// async function Test() {
//   const ShoesRef = doc(db, DataName, Name);
//   const ShoesSnap = await getDoc(ShoesRef);
//   const ShoesData = ShoesSnap.data();

//   console.log(ShoesData.href);
// }

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
    async function Shoes_1() {
      // 그리드배색키높이스니커즈
      const ShoesRef = doc(db, "Shoes", "그리드 배색 키높이 스니커즈");
      const ShoesSnap = await getDoc(ShoesRef);
      setShoesData_1(ShoesSnap.data());
    }

    async function Shoes_2() {
      // 로티 배색 스니커즈
      const ShoesRef = doc(db, "Shoes", "로티 배색 스니커즈");
      const ShoesSnap = await getDoc(ShoesRef);
      setShoesData_2(ShoesSnap.data());
    }
    async function Shoes_3() {
      // 로티 배색 스니커즈
      const ShoesRef = doc(db, "Shoes", "비셀루 스웨이드 스티치 로퍼");
      const ShoesSnap = await getDoc(ShoesRef);
      setShoesData_3(ShoesSnap.data());
    }
    async function Shoes_4() {
      // 로티 배색 스니커즈
      const ShoesRef = doc(db, "Shoes", "하이키 소가죽 독일군 스니커즈");
      const ShoesSnap = await getDoc(ShoesRef);
      setShoesData_4(ShoesSnap.data());
    }
    async function Shoes_5() {
      // 로티 배색 스니커즈
      const ShoesRef = doc(db, "Shoes", "런데이 2type 화이트 스니커즈");
      const ShoesSnap = await getDoc(ShoesRef);
      setShoesData_5(ShoesSnap.data());
    }
    async function Shoes_6() {
      // 로티 배색 스니커즈
      const ShoesRef = doc(db, "Shoes", "알리드 사각코 워커");
      const ShoesSnap = await getDoc(ShoesRef);
      setShoesData_6(ShoesSnap.data());
    }
    async function Shoes_7() {
      // 로티 배색 스니커즈
      const ShoesRef = doc(db, "Shoes", "스티치 라인업 슬립온");
      const ShoesSnap = await getDoc(ShoesRef);
      setShoesData_7(ShoesSnap.data());
    }
    async function Shoes_8() {
      // 로티 배색 스니커즈
      const ShoesRef = doc(db, "Shoes", "제이콥 베이직 로퍼");
      const ShoesSnap = await getDoc(ShoesRef);
      setShoesData_8(ShoesSnap.data());
    }
    Shoes_1();
    Shoes_2();
    Shoes_3();
    Shoes_4();
    Shoes_5();
    Shoes_6();
    Shoes_7();
    Shoes_8();
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
