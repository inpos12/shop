import React from "react";
import img from "./pngwing.com.png";
import Style from "./Kakao.module.css";

const Kakao = () => {
  return (
    <>
      <a
        href="https://www.kakaocorp.com/page/service/service/KakaoTalk"
        target="blank"
      >
        <img className={Style.ImgSize} src={img}></img>
      </a>
    </>
  );
};
export default Kakao;
