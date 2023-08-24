import React from "react";
import { GiHamburgermenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
/* import { useState } from "react"; */

import images from "../../constants/images";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container _container">
        <a href="#" className="navbar__logo">
          <img src={images.gericht} alt="logo" />
        </a>

        <ul className="navbar__links">
          <li className="navbar__links-item">
            <a href="#Home" className="navbar__link _underline-hover">
              Home
            </a>
          </li>
          <li className="navbar__links-item">
            <a href="#Pages" className="navbar__link _underline-hover">
              Pages
            </a>
          </li>
          <li className="navbar__links-item">
            <a href="#ContactUs" className="navbar__link _underline-hover">
              Contact Us
            </a>
          </li>
          <li className="navbar__links-item">
            <a href="#Blog" className="navbar__link _underline-hover">
              Blog
            </a>
          </li>
          <li className="navbar__links-item">
            <a href="#Landing" className="navbar__link _underline-hover">
              Landing
            </a>
          </li>
        </ul>

        <div className="navbar__authentication">
          <button className="navbar__login">Login</button>
          <span className="navbar__dash">/</span>
          <button className="navbar__registration">Registration</button>
          <span className="navbar__split"></span>
          <div className="navbar__book-table">Book Table</div>
        </div>
      </div>
      <div className="navbar-smallscreen">
        <div className="navbar-smallscreen__content">
          <ul className="navbar__links_smallscreen">
            <li className="navbar__links-item">
              <a href="#Home" className="navbar__link _underline-hover">
                Home
              </a>
            </li>
            <li className="navbar__links-item">
              <a href="#Pages" className="navbar__link _underline-hover">
                Pages
              </a>
            </li>
            <li className="navbar__links-item">
              <a href="#ContactUs" className="navbar__link _underline-hover">
                Contact Us
              </a>
            </li>
            <li className="navbar__links-item">
              <a href="#Blog" className="navbar__link _underline-hover">
                Blog
              </a>
            </li>
            <li className="navbar__links-item">
              <a href="#Landing" className="navbar__link _underline-hover">
                Landing
              </a>
            </li>
          </ul>
          <div className="navbar__authentication navbar__authentication_smallscreen">
            <button className="navbar__login">Login</button>
            <span className="navbar__dash">/</span>
            <button className="navbar__registration">Registration</button>
            <span className="navbar__split"></span>
            <div className="navbar__book-table">Book Table</div>
          </div>
        </div>
        <button className="navbar__menu-icon ">
          <div className="navbar__menu-icon__container">
            <div className="navbar__menu-icon__front">
              <FiMenu />
            </div>
            <div className="navbar__menu-icon__back">
              <TfiClose />
            </div>
          </div>
        </button>
      </div>
    </nav>
  );
}
