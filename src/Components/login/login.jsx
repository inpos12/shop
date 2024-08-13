import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Login_style from "./login.module.css";

function SignUpButton() {
  window.location.href = "/SignUp/";
}
function LoginButton() {
  const email = document.getElementById("SignUpEmail").value;
  const password = document.getElementById("SignUpPassword").value;
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log(userCredential);
      const user = userCredential.user;
      window.location.href = "/#/";
      if (matchMedia("screen and (min-width: 768px)").matches) {
        document.getElementById("login").style.display = "none";
        document.getElementById("logout").style.display = "block";
        alert(`로그인완료`);
      } else {
        document.getElementById("Login_Mobile_a").style.display = "none";
        document.getElementById("Logout_Mobile_a").style.display = "block";
        alert(`로그인완료`);
      }
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`비밀번호 혹은 이메일을 확인해주세요`);
    });
}

// 로그인버튼 끝
const login = () => {
  return (
    <div className={Login_style.Login_full_box}>
      <Container className={Login_style.Login_Container}>
        <Col lg={4} className={Login_style.Login_Col}>
          <div className={Login_style.Login_title}>
            <h1>PHARMACY</h1>
          </div>
          <div className={Login_style.Login_Text_box}>
            <div className={Login_style.Login_title_2}>
              <h3>로그인</h3>
            </div>
            <div className={Login_style.Login_Email_input}>
              <input type="email" id="SignUpEmail" placeholder="이메일" />
            </div>
            <div className={Login_style.Login_Password_input}>
              <input
                type="password"
                id="SignUpPassword"
                placeholder="비밀번호"
              />
            </div>
          </div>
          <button onClick={LoginButton} type="submit" id="LoginButton">
            로그인
          </button>
          <button onClick={SignUpButton} type="submit" id="SignUpButton">
            회원가입
          </button>
        </Col>
      </Container>
    </div>
  );
};

export default login;
