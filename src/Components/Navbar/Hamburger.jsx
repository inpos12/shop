import React from "react";
import { getAuth, signOut } from "firebase/auth";
import "../Navbar/Hamburger.module.css";
import { Link } from "react-router-dom";
function LogoutButton() {
  const LoginButton = document.getElementById("Login_Mobile_a");
  const LogoutButton = document.getElementById("Logout_Mobile_a");
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      alert(`로그아웃완료`);
      LoginButton.style.display = "block";
      LogoutButton.style.display = "none";
    })
    .catch((error) => {
      // An error happened.
    });
}

function hamburger() {
  return (
    <>
      <input type="checkbox" id="icon"></input>
      <label for="icon">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div id="sidebar">
        <div id="Login_Mobile">
          <Link to="/Login">Login</Link>
          <a id="Logout_Mobile_a" href="/" onClick={LogoutButton}>
            LogOut
          </a>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Shoes/">Shoes</Link>
          </li>
          <li>
            <Link to="/GirlCrush_Look/">Girl Crush</Link>
          </li>
          <li>
            <Link to="/Daily_Look/">Daily</Link>
          </li>

          <li>
            <Link to="/Login/">Login</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default hamburger;
