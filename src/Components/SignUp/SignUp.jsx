import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SignUp_style from "./SignUp.module.css";

function LoginPage() {
  window.location.href = "/Login/";
}

function SignUpButton() {
  const email = document.getElementById("SignUpEmail").value;
  const password = document.getElementById("SignUpPassword").value;
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      window.location.href = "/#/Login";
      alert(`회원가입 성공`);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`공백이거나 중복되는 이메일입니다.`);
      // ..
    });
}

const Logout = () => {
  return (
    <div className={SignUp_style.SignUp_full_box}>
      <Container className={SignUp_style.SignUp_Container}>
        <Col lg={4} className={SignUp_style.SignUp_Col}>
          <div className={SignUp_style.SignUp_title}>
            <h1>PHARMACY</h1>
          </div>
          <div className={SignUp_style.SignUp_Text_box}>
            <div className={SignUp_style.SignUp_title_2}>
              <h3>회원가입</h3>
            </div>
            <div className={SignUp_style.SignUp_Email_input}>
              <input type="email" id="SignUpEmail" placeholder="이메일" />
            </div>
            <div className={SignUp_style.SignUp_Password_input}>
              <input
                type="password"
                id="SignUpPassword"
                placeholder="비밀번호"
              />
            </div>
          </div>
          <button onClick={SignUpButton} type="submit" id="SignUpButton_1">
            회원가입
          </button>
          <button onClick={LoginPage} type="submit" id="SignUpButton">
            로그인페이지
          </button>
        </Col>
      </Container>
    </div>
  );
};

export default Logout;
