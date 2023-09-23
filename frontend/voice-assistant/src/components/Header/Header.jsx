import "./style.css";
import logo from '../../images/logo.svg';
import heartIcon from '../../images/heart.png';
import carttIcon from '../../images/cart.png';
import profileIcon from '../../images/profilw.png';
import InputSearch from '../InputSearch/InputSearch';
import { Link } from "react-router-dom";
import SpecialFeaturesModal from "../SpecialFeaturesModal/SpecialFeaturesModal";
import VoiseAssistant from '../VoiseAssistant/VoiseAssistant';
import React, { useState } from "react";

import { useTranslation } from "react-i18next";

export default function Header() {

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

            <InputSearch />
           
        </span>

        <nav className='header__nav'>
            <Link to="/favourites" className="nav-link">
                <button className='btn_header btn-nav1'>
                <img src={heartIcon} alt={t("alt_heart")}/>
                {t("heart")}</button>
            </Link>
            <Link to="/cart" className="nav-link">
                <button className='btn_header btn-nav1'>
                <img src={carttIcon} alt={t("alt_cart")}/>
                {t("cart")}</button>
            </Link>
            <Link to="/" className="nav-link">
                <button className='btn_header btn-nav1'>
                <img src={profileIcon} alt={t("alt_profile")}/>
                {t("profile")}</button>
                </Link>
        </nav>
    </header>
    {/* <SpecialFeaturesModal active={modalActive} setActive={setModalActive}/> */}
{/* <VoiseAssistant active={modalVoiceAssistantActive} setActive={setModalVoiceAssistantActive}/> */}
    </>)
}
