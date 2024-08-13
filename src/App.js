import React from "react";
import "../src/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 네비게이션
import Navbar from "../src/Components/Navbar/Navbar";
// 카카오톡
import Kakao from "../src/Components/Kakao/Kakao";
// 푸터
import Footer from "../src/Components/Footer/Footer";
// 메인
import Home from "../src/Components/Screens/Home";
// 신발페이지
import Shoes from "../src/Components/Screens/Shoes";
import Shoes_item_1 from "./Components/SubPage/Shoes/ProductPage/Shoes_1_page/Shoes_1_page";
import Shoes_item_2 from "./Components/SubPage/Shoes/ProductPage/Shoes_2_page/Shoes_2_page";
import Shoes_item_3 from "./Components/SubPage/Shoes/ProductPage/Shoes_3_page/Shoes_3_page";
import Shoes_item_4 from "./Components/SubPage/Shoes/ProductPage/Shoes_4_page/Shoes_4_page";
import Shoes_item_5 from "./Components/SubPage/Shoes/ProductPage/Shoes_5_page/Shoes_5_page";
import Shoes_item_6 from "./Components/SubPage/Shoes/ProductPage/Shoes_6_page/Shoes_6_page";
import Shoes_item_7 from "./Components/SubPage/Shoes/ProductPage/Shoes_7_page/Shoes_7_page";
import Shoes_item_8 from "./Components/SubPage/Shoes/ProductPage/Shoes_8_page/Shoes_8_page";
import Shoes_item_9 from "./Components/SubPage/Shoes/ProductPage/Shoes_9_page/Shoes_9_page";
import Shoes_item_10 from "./Components/SubPage/Shoes/ProductPage/Shoes_10_page/Shoes_10_page";
import Shoes_item_11 from "./Components/SubPage/Shoes/ProductPage/Shoes_11_page/Shoes_11_page";
import Shoes_item_12 from "./Components/SubPage/Shoes/ProductPage/Shoes_12_page/Shoes_12_page";
// 걸크러쉬룩 페이지
import GirlCrush from "../src/Components/Screens/GirlCrush";
import GirlCrush_item_1 from "./Components/SubPage/GirlCrush/ProductPage/GirlCrush_1_page/GirlCrush_1_page";
import GirlCrush_item_2 from "./Components/SubPage/GirlCrush/ProductPage/GirlCrush_2_page/GirlCrush_2_page";
import GirlCrush_item_3 from "./Components/SubPage/GirlCrush/ProductPage/GirlCrush_3_page/GirlCrush_3_page";
import GirlCrush_item_4 from "./Components/SubPage/GirlCrush/ProductPage/GirlCrush_4_page/GirlCrush_4_page";
import GirlCrush_item_5 from "./Components/SubPage/GirlCrush/ProductPage/GirlCrush_5_page/GirlCrush_5_page";
import GirlCrush_item_6 from "./Components/SubPage/GirlCrush/ProductPage/GirlCrush_6_page/GirlCrush_6_page";
import GirlCrush_item_7 from "./Components/SubPage/GirlCrush/ProductPage/GirlCrush_7_page/GirlCrush_7_page";
import GirlCrush_item_8 from "./Components/SubPage/GirlCrush/ProductPage/GirlCrush_8_page/GirlCrush_8_page";
import GirlCrush_item_9 from "./Components/SubPage/GirlCrush/ProductPage/GirlCrush_9_page/GirlCrush_9_page";
import GirlCrush_item_10 from "./Components/SubPage/GirlCrush/ProductPage/GirlCrush_10_page/GirlCrush_10_page";
import GirlCrush_item_11 from "./Components/SubPage/GirlCrush/ProductPage/GirlCrush_11_page/GirlCrush_11_page";
import GirlCrush_item_12 from "./Components/SubPage/GirlCrush/ProductPage/GirlCrush_12_page/GirlCrush_12_page";
// 데일리룩
import Daily from "../src/Components/Screens/Daily";
import Daily_item_1 from "./Components/SubPage/Daily/ProductPage/Daily_1_page/Daily_1_page";
import Daily_item_2 from "./Components/SubPage/Daily/ProductPage/Daily_2_page/Daily_2_page";
import Daily_item_3 from "./Components/SubPage/Daily/ProductPage/Daily_3_page/Daily_3_page";
import Daily_item_4 from "./Components/SubPage/Daily/ProductPage/Daily_4_page/Daily_4_page";
import Daily_item_5 from "./Components/SubPage/Daily/ProductPage/Daily_5_page/Daily_5_page";
import Daily_item_6 from "./Components/SubPage/Daily/ProductPage/Daily_6_page/Daily_6_page";
import Daily_item_7 from "./Components/SubPage/Daily/ProductPage/Daily_7_page/Daily_7_page";
import Daily_item_8 from "./Components/SubPage/Daily/ProductPage/Daily_8_page/Daily_8_page";
import Daily_item_9 from "./Components/SubPage/Daily/ProductPage/Daily_9_page/Daily_9_page";
import Daily_item_10 from "./Components/SubPage/Daily/ProductPage/Daily_10_page/Daily_10_page";
import Daily_item_11 from "./Components/SubPage/Daily/ProductPage/Daily_11_page/Daily_11_page";
import Daily_item_12 from "./Components/SubPage/Daily/ProductPage/Daily_12_page/Daily_12_page";
// 로그인
import Login from "../src/Components/Screens/Login";
// 회원가입
import SignUp from "../src/Components/Screens/SignUp";
const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Kakao />
      <Routes>
        {/* 메인페이지 */}
        <Route path="/" element={<Home />} />
        {/* 신발 */}
        <Route path="/Shoes" element={<Shoes />} />
        <Route path="/Shoes/1" element={<Shoes_item_1 />} />
        <Route path="/Shoes/2" element={<Shoes_item_2 />} />
        <Route path="/Shoes/3" element={<Shoes_item_3 />} />
        <Route path="/Shoes/4" element={<Shoes_item_4 />} />
        <Route path="/Shoes/5" element={<Shoes_item_5 />} />
        <Route path="/Shoes/6" element={<Shoes_item_6 />} />
        <Route path="/Shoes/7" element={<Shoes_item_7 />} />
        <Route path="/Shoes/8" element={<Shoes_item_8 />} />
        <Route path="/Shoes/9" element={<Shoes_item_9 />} />
        <Route path="/Shoes/10" element={<Shoes_item_10 />} />
        <Route path="/Shoes/11" element={<Shoes_item_11 />} />
        <Route path="/Shoes/12" element={<Shoes_item_12 />} />
        {/* 걸크러쉬룩 */}
        <Route path="/GirlCrush" element={<GirlCrush />} />
        <Route path="/GirlCrush/1" element={<GirlCrush_item_1 />} />
        <Route path="/GirlCrush/2" element={<GirlCrush_item_2 />} />
        <Route path="/GirlCrush/3" element={<GirlCrush_item_3 />} />
        <Route path="/GirlCrush/4" element={<GirlCrush_item_4 />} />
        <Route path="/GirlCrush/5" element={<GirlCrush_item_5 />} />
        <Route path="/GirlCrush/6" element={<GirlCrush_item_6 />} />
        <Route path="/GirlCrush/7" element={<GirlCrush_item_7 />} />
        <Route path="/GirlCrush/8" element={<GirlCrush_item_8 />} />
        <Route path="/GirlCrush/9" element={<GirlCrush_item_9 />} />
        <Route path="/GirlCrush/10" element={<GirlCrush_item_10 />} />
        <Route path="/GirlCrush/11" element={<GirlCrush_item_11 />} />
        <Route path="/GirlCrush/12" element={<GirlCrush_item_12 />} />
        {/* 데일리룩 */}
        <Route path="/Daily" element={<Daily />} />
        <Route path="/Daily/1" element={<Daily_item_1 />} />
        <Route path="/Daily/2" element={<Daily_item_2 />} />
        <Route path="/Daily/3" element={<Daily_item_3 />} />
        <Route path="/Daily/4" element={<Daily_item_4 />} />
        <Route path="/Daily/5" element={<Daily_item_5 />} />
        <Route path="/Daily/6" element={<Daily_item_6 />} />
        <Route path="/Daily/7" element={<Daily_item_7 />} />
        <Route path="/Daily/8" element={<Daily_item_8 />} />
        <Route path="/Daily/9" element={<Daily_item_9 />} />
        <Route path="/Daily/10" element={<Daily_item_10 />} />
        <Route path="/Daily/11" element={<Daily_item_11 />} />
        <Route path="/Daily/12" element={<Daily_item_12 />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      {/* 푸터 */}
      <Footer />
    </BrowserRouter>
  );
};
export default App;
