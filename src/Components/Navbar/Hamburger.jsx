import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import "../Navbar/Hamburger.module.css";

const Hamburger = () => {
  const auth = getAuth();
  const [uid, setUid] = useState("");
  const [sidebar, setSidebar] = useState(false);
  const handleHamburgr = () => {
    setSidebar(!sidebar);
  };
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
  const handleMobileMenu = () => {
    setSidebar(!sidebar);
  };

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
    <>
      <input type="checkbox" id="icon" onClick={handleHamburgr}></input>
      <label htmlFor="icon">
        <span
          style={{
            top: !sidebar ? "0" : "50%",
            transform: sidebar ? "translateY(-50%) rotate(45deg)" : "none",
          }}
        ></span>
        <span style={{ opacity: !sidebar ? "1" : "0" }}></span>
        <span
          style={{
            bottom: !sidebar ? "0" : "50%",
            transform: sidebar ? "translateY(50%) rotate(-45deg)" : "none",
          }}
        ></span>
      </label>
      <div id="sidebar" style={{ right: sidebar ? "0px" : "-300px" }}>
        <ul>
          <li>{uid}</li>
          {uid ? (
            <li>
              <Link to="/" id="Login_Logout" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/Login/" id="Login_Logout" onClick={handleMobileMenu}>
                Login
              </Link>
            </li>
          )}
          <li id="test">
            <Link to="/" onClick={handleMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Shoes/" onClick={handleMobileMenu}>
              Shoes
            </Link>
          </li>
          <li>
            <Link to="/GirlCrush/" onClick={handleMobileMenu}>
              Girl Crush
            </Link>
          </li>
          <li>
            <Link to="/Daily/" onClick={handleMobileMenu}>
              Daily
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Hamburger;
