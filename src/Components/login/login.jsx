import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Col from "react-bootstrap/Col";
import Login_style from "./login.module.css";

// 로그인버튼 끝
const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // 로그인성공
        const user = userCredential.user;
        navigate("../");
        console.log(user);
        // ...
      })
      .catch((error) => {
        //회원가입실패
        console.log(error);
      });
  };

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
              <input
                type="email"
                id="SignUpEmail"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={Login_style.Login_Password_input}>
              <input
                type="password"
                id="SignUpPassword"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" id="LoginButton" onClick={handleLogin}>
            로그인
          </button>
          <Link to="../SignUp">
            <button type="submit" id="SignUpButton">
              회원가입
            </button>
          </Link>
        </Col>
      </Container>
    </div>
  );
};

export default Login;
