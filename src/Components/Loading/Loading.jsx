import React from "react";
import { Background, LoadingText } from "./Styles";
import Spinner from "./Spinner.gif";
import Style from "./Loading.module.css";

export default () => {
  return (
    <Background>
      <a href="#" id="loginBtn" className={Style.loginBtn}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className={Style.TextBox}>
          <h1>L</h1>
          <h1>O</h1>
          <h1>A</h1>
          <h1>D</h1>
          <h1>I</h1>
          <h1>N</h1>
          <h1>G</h1>
        </div>
      </a>
      {/* <LoadingText>잠시만 기다려 주세요.</LoadingText>
      <img src={Spinner} alt="로딩중" width="5%" /> */}
    </Background>
  );
};
