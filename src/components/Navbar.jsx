import React, { useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "/src/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCommentDots, faCircleUser, faChevronDown, faCircleXmark, faDiamondTurnRight } from "@fortawesome/free-solid-svg-icons";
import LogIn from "../Profile";


const Navbar = () => {

  const [active, setActive] = useState(1);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isPopupVisible1, setIsPopupVisible1] = useState(false);
  const [isPopupVisible2, setIsPopupVisible2] = useState(false);

  const Click = (id) => {
    setActive(id)
  }

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };
  const togglePopup1 = () => {
    setIsPopupVisible1(!isPopupVisible1);
  };
  const togglePopup2 = () => {
    setIsPopupVisible2(!isPopupVisible2);
  };


  return (
    <>
      <div className="header">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <div className="logo">
          <img src="src\assets\pinterest.png" alt="logo" />
        </div>

        <div className="links">
            <Link to="/"  className={active === 1 ? "linksLinkselect" : "linksLink"}
        onClick={() => Click(1)}>Home</Link>
            <Link to="/explore" className={active === 2 ? "linksLinkselect" : "linksLink"}
        onClick={() => Click(2)}>Explore</Link>
            <Link  className={active === 3 ? "linksLinkselect" : "linksLink"}
        onClick={() => Click(3)}>Create</Link>
          
        </div>
        <div className="search">
          <img src="src\assets\search.png" alt="img" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="icons">
          <Link><FontAwesomeIcon icon={faBell} className="span" onClick={togglePopup}/></Link>
          <Link><FontAwesomeIcon icon={faCommentDots} className="span" onClick={togglePopup1}/></Link>
          <Link to="/login" ><FontAwesomeIcon icon={faCircleUser} className={active === 4 ? "spanselect" : "span"}
        onClick={() => Click(4)}/></Link>
          <Link><FontAwesomeIcon icon={faChevronDown} className="span2" onClick={togglePopup2}/></Link>   
        </div>
      </div>
      {isPopupVisible && (
        <div className="popup" onClick={togglePopup}>
          <FontAwesomeIcon icon={faCircleXmark} />
          <h3>No Notifications</h3>
        </div>
      )}
      {isPopupVisible1 && (
        <div className="popup" onClick={togglePopup1}>
          <FontAwesomeIcon icon={faCircleXmark} />
          <h3>No Messages</h3>
        </div>
      )}
      {isPopupVisible2 && (
        <div className="popup2" onClick={togglePopup2}>
          <p>currently in</p>
          <h4>Your Profile</h4>
          <h4>Settings</h4>
          <h4>Home feed tuner</h4>
          <h4>Install Windows app</h4>
          <h4>Reports and violations center</h4>
          <h4>Your Privacy rights <FontAwesomeIcon icon={faDiamondTurnRight} /></h4>
          <h4>Help Center <FontAwesomeIcon icon={faDiamondTurnRight} /></h4>
          <h4>Terms and Conditions <FontAwesomeIcon icon={faDiamondTurnRight} /></h4>
          <h4>Privacy Policy <FontAwesomeIcon icon={faDiamondTurnRight} /></h4>
          <h4>Be a beta Tester <FontAwesomeIcon icon={faDiamondTurnRight} /></h4>
          <h4>Log Out</h4>
        </div>
      )}
    </>
  );
};

export default Navbar;
