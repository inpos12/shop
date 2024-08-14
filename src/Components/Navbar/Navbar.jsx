import React, { useState, useEffect } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
import style from "../Navbar/Navbar.module.css";
import "../Navbar/Navbar.module.css";
import Hamburger from "./Hamburger";
import Logo from "../Navbar/logo.png";

const Login = {
  display: "flex",
  gap: "20px",
  margin: "0",
};

const NavbarElement = () => {
  const auth = getAuth();
  const [uid, setUid] = useState("");

  // useEffect 훅을 사용하여 Firebase 인증 상태 변화 감지
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.email);
      } else {
        setUid("");
      }
    });
  }, []); // 의존성 배열: auth 객체 변화에만 반응

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      console.log("로그아웃성공");
    } catch (error) {
      console.error("로그아웃 실패:", error);
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
            <div id="email">{uid}</div>
            {uid ? (
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
