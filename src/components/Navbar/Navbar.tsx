import React, { useState } from "react";
import "./styles.css";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import { Link } from "react-scroll";
import { ReactComponent as Close } from "../../assets/close.svg";
const Navbar = () => {
  const [state, setstate] = useState(false);

  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <div className="nav-links">
        <button className="connect-wallet">CONNECT WALLET</button>
        <img
          onClick={() => setstate(true)}
          // className="menu-icon"
          src={menu}
          alt=""
        />
      </div>
      <div className={state ? "slide-menu active" : "slide-menu"}>
        <Close className="close-icon" onClick={() => setstate(false)} />
        <Link
          onClick={() => setstate(false)}
          activeClass="active"
          smooth={true}
          duration={800}
          to="Home"
        >
          HOME
        </Link>
        <Link
          onClick={() => setstate(false)}
          activeClass="active"
          smooth={true}
          duration={800}
          to="Mint"
        >
          MINT
        </Link>
        <Link
          onClick={() => setstate(false)}
          activeClass="active"
          smooth={true}
          duration={800}
          to="Team"
        >
          TEAM
        </Link>
        <Link
          onClick={() => setstate(false)}
          activeClass="active"
          smooth={true}
          duration={800}
          to="Roadmap"
        >
          ROADMAP
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
