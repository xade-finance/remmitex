import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { AnnouncementBar } from 'react-announcement-bar';

type Props = {};

const Navbar = (props: Props) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
{/*}
<div className="vela announcement">
<b>📢 RemmiteX V2 and DeriveX V1 will go live on Testnet on 5th January 2023 <ImCross /></b></div>
{*/}    
  <nav className="navbar">
   {/*} <AnnouncementBar height="60" backgroundColor="#000000" relative={false} width="100%">
       
            <div style={{width: "80%", margin: "auto", color: "#ffffff" }}>
                 Want to recieve notifications
                 <a href="#" style={{ fontWeight: "bold", color: "#ffffff" }}>ENABLE !</a>
             </div>
     
      </AnnouncementBar>    

{*/}<div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            XADE
          </Link>
          <div onClick={handleClick} className="menu-icon">
            <i className={"fas fa-bars desktopstuff"} id={"3bars"}></i>
          </div>
          <div className="nav-menu">
            <ul className={click ? "nav-menu navActive" : "nav-menu"}>
              <div onClick={closeMobileMenu}>
                <div className="goBack">
                  <br />
                  <ImCross />
                </div>
              </div>
              {/*} <li style={{ color: "#fff" }} className="desktopstuff nav-item">
                <Link
                  to="/"
                  className="nav-links"
                  style={{ color: "#fff" }}
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>{*/}
              {/*          <li stylclassName='nav-item'>
              <Link
                to='/payments'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Payments
              </Link>
            </li>*/}
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/investments/1"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Investments
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/savings"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Savings
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/settings"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Settings
                </Link>
              </li>

              <li className="button-item"></li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
