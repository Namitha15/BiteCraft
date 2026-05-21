import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const[login,setLogin]=useState(false);
  
  
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <button className="login-btn" onClick={()=>setLogin(!login)}>{login ? "logout":"login"}</button>
          
        </ul>
      </div>
    </div>
  );
};
export default Header;
