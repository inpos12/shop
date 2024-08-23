import React from "react";
// import db from "../database_test/Firebase";
// import { setDoc, doc } from "firebase/firestore";
import Slider from "../Home/Slider/Slider";
import Section1 from "../Home/Section_1/Section_1";
import Section2 from "../Home/Section_2/Section_2";
import Section3_1 from "../Home/Section_3/Section3_1/Section3_1";
import Section3_2 from "../Home/Section_3/Section3_2/Section3_2";
import Section3_3 from "../Home/Section_3/Section3_3/Section3_3";
import Section4 from "../Home/Section_4/Section_4";

//데이터추가
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
// const handleaddData = () => {
//   addShoesData("그리드 배색 키높이 스니커즈", "./1", "", "250mm~280mm", 43000);
//   addShoesData("로티 배색 스니커즈", "./2", "", "250mm~280mm", 39000);
//   addShoesData("비셀루 스웨이드 스티치 로퍼", "./3", "", "250mm~280mm", 52000);
//   addShoesData(
//     "하이키 소가죽 독일군 스니커즈",
//     "./4",
//     "",
//     "245mm~280mm",
//     129000
//   );
//   addShoesData("런데이 2type 화이트 스니커즈", "./5", "", "245mm~280mm", 34000);
//   addShoesData("알리드 사각코 워커", "./6", "", "245mm~280mm", 75000);
//   addShoesData("스티치 라인업 슬립온", "./7", "", "245mm~280mm", 34000);
//   addShoesData("제이콥 베이직 로퍼", "./8", "", "245mm~280mm", 45000);
// };

// https://lakickz.com/
const Home = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Slider />
      {/* <button onClick={handleaddData}>데이터추가버튼</button> */}
      <Section1 />
      <Section2 />
      <Section3_1 />
      <Section3_2 />
      <Section3_3 />
      <Section4 />
    </div>
  );
};
export default Home;
