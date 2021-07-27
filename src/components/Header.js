import React from "react";
import Typed from 'react-typed'

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Web Development and websites promotions</h1>
        <Typed 
        className="typed-text" 
        strings={["Web Development","Android Development","Blockchain Development"]}
        typeSpeed={40}
        backSpeed={60}
        loop
        />
        <a  className="btn-main-offer" href="https://">Contact Me</a>
      </div>
    </div>
  );
};

export default Header;
