import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import "../Navbar/Hamburger.module.css";

const Hamburger = () => {
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
    <>
      <input type="checkbox" id="icon"></input>
      <label htmlFor="icon">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div id="sidebar">
        <ul>
          <li>{uid}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Shoes/">Shoes</Link>
          </li>
          <li>
            <Link to="/GirlCrush/">Girl Crush</Link>
          </li>
          <li>
            <Link to="/Daily/">Daily</Link>
          </li>

          {uid ? (
            <li>
              <Link to="/" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/Login/">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};
export default Hamburger;
