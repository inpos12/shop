import React, { useState, useEffect } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
import style from "../Navbar/Navbar.module.css";
import "../Navbar/Navbar.module.css";
import Hamburger from "./Hamburger";
import Logo from "../Navbar/logo.png";
import styled from "styled-components";
import { DataLink } from "../common/CommonFunction";

const Login = {
  display: "flex",
  gap: "20px",
  margin: "0",
};

const Button = styled.button`
  border: none;
  background-color: transparent;
`;

const NavbarElement = () => {
  const auth = getAuth();
  const [uids, setUids] = useState("");
  const [adminUid, setAdminUid] = useState("");

  // useEffect 훅을 사용하여 Firebase 인증 상태 변화 감지
  useEffect(() => {
    DataLink("test", "uid", setAdminUid);
  }, [adminUid.ids]);
  useEffect(() => {
    if (adminUid) {
      onAuthStateChanged(auth, (user) => {
        if (user && user.uid === adminUid.ids) {
          setUids("관리자");
          // 사용자가 로그인한 경우
        } else if (user) {
          setUids(user.email);
        } else {
          setUids("");
        }
      });
    }
  }, [adminUid]); // 의존성 배열: auth 객체 변화에만 반응

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      alert("로그아웃성공");
    } catch {
      alert("로그아웃 실패");
    }
  };

  return (
    <div id="navbar">
      <div className={style.nav}>
        <div className={style.container}>
          <div className={style.menu}>
            <div className={style.logo}>
              <Link to="/">
                <img src={Logo} className={style.navbar_logo}></img>
              </Link>
            </div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Shoes">Shoes</Link>
              </li>
              <li>
                <Link to="/GirlCrush/">Girl Crush </Link>
              </li>
              <li>
                <Link to="/Daily/">Daily</Link>
              </li>
            </ul>
          </div>
          <ul style={Login}>
            <div id="email">{uids}</div>
            {uids ? (
              <Link id="logout" to="/" onClick={handleLogout}>
                Logout
              </Link>
            ) : (
              <Link id="login" to="/Login/">
                Login
              </Link>
            )}
          </ul>

          <Hamburger />
        </div>
      </div>
    </div>
  );
};

export default NavbarElement;
