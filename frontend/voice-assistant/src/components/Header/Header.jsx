import "./style.css";
import logo from '../../images/logo.svg';
import heartIcon from '../../images/heart.png';
import carttIcon from '../../images/cart.png';
import profileIcon from '../../images/profilw.png';
import InputSearch from '../InputSearch/InputSearch';
import { Link, useLocation } from "react-router-dom";
import SpecialFeaturesModal from "../SpecialFeaturesModal/SpecialFeaturesModal";
import VoiseAssistant from '../VoiseAssistant/VoiseAssistant';
import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export default function Header() {
    const location = useLocation();

    const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

    const [modalActive, setModalActive] = useState(!true);
    return ( 
        <>

    <header className='header' role="contentinfo">

        <span className='header-one_block'>
        <Link to='/main'><img src={logo} alt={t("alt_logo")} title={t("alt_logo")}/></Link>

    <span className="header-one_block-hidden">
      <InputSearch />
    </span>
            
           
        </span>

        <nav className="header__nav">
      <Link to="/favourites" className={`nav-link btn-nav1 ${location.pathname === "/favourites" ? "activeB" : ""}`}>
        <div role="button" className="btn_header">
          <img src={heartIcon} alt="" />
          {t("heart")}
        </div>
      </Link>
      <Link to="/cart" className={`nav-link btn-nav1 ${location.pathname === "/cart" ? "activeB" : ""}`}>
        <div role="button" className="btn_header">
          <img src={carttIcon} alt="" />
          {t("cart")}
        </div>
      </Link>
      <Link to="/" className={`nav-link btn-nav1 ${location.pathname === "/" ? "activeB" : ""}`}>
        <div role="button" className="btn_header">
          <img src={profileIcon} alt="" />
          {t("profile")}
        </div>
      </Link>
    </nav>

     <nav className="header__nav_hidden">
      <BurgerMenu />
    </nav> 
    </header>
    {/* <SpecialFeaturesModal active={modalActive} setActive={setModalActive}/> */}
{/* <VoiseAssistant active={modalVoiceAssistantActive} setActive={setModalVoiceAssistantActive}/> */}
    </>)
}
