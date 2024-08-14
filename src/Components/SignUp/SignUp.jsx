import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import SignUp_style from "./SignUp.module.css";

const SignUp = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // 회원가입 성공
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        // 회원가입 실패
        console.error(error);
      });
  };
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
              <input
                type="email"
                id="SignUpEmail"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={SignUp_style.SignUp_Password_input}>
              <input
                type="password"
                id="SignUpPassword"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button onClick={handleSignUp} type="submit" id="SignUpButton_1">
            회원가입
          </button>

          <Link to="../Login">
            <button type="submit" id="SignUpButton">
              로그인페이지
            </button>
          </Link>
        </Col>
      </Container>
    </div>
  );
};

export default SignUp;
