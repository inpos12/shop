import React from "react";
import { useState, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import firebase from "../login/Firebase";
import { Link } from "react-router-dom";
import style from "../Navbar/Navbar.module.css";
import "../Navbar/Navbar.module.css";
import Hamburger from "./Hamburger";
import Logo from "../Navbar/logo.png";

function LogoutButton() {
  const LoginButton = document.getElementById("login");
  const LogoutButton = document.getElementById("logout");
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      LogoutButton.style.display = "none";
      LoginButton.style.display = "block";
      alert(`로그아웃완료`);
    })
    .catch((error) => {
      // An error happened.
    });
}

const NavbarElement = () => {
  return (
    <div id="navbar">
      <div className={style.nav}>
        <div className={style.container}>
          <div className={style.menu}>
            <div className={style.logo}>
              <Link to="./">
                <img src={Logo} className={style.navbar_logo}></img>
              </Link>
            </div>
            <ul>
              <li>
                <Link to="./">Home</Link>
              </li>
              <li>
                <Link to="./Shoes">Shoes</Link>
              </li>
              <li>
                <Link to="./GirlCrush/">Girl Crush </Link>
              </li>
              <li>
                <Link to="./Daily/">Daily</Link>
              </li>
            </ul>
          </div>
          <Link id="login" to="./Login/">
            Login
          </Link>
          <Link id="logout" to="./" onClick={LogoutButton}>
            Logout
          </Link>
          <Hamburger />
        </div>
      </div>
    </div>
  );
};

export default NavbarElement;
