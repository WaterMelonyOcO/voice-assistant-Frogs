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
                <div role="button" className='btn_header btn-nav1'>
                <img src={heartIcon} alt=""/>
                {t("heart")}</div>
            </Link>
            <Link to="/cart" className="nav-link">
                <div role="button" className='btn_header btn-nav1'>
                <img src={carttIcon} alt=""/>
                {t("cart")}</div>
            </Link>
            <Link to="/" className="nav-link">
                <div role="button" className='btn_header btn-nav1'>
                <img src={profileIcon} alt=""/>
                {t("profile")}</div>
                </Link>
        </nav>
    </header>
    {/* <SpecialFeaturesModal active={modalActive} setActive={setModalActive}/> */}
{/* <VoiseAssistant active={modalVoiceAssistantActive} setActive={setModalVoiceAssistantActive}/> */}
    </>)
}
