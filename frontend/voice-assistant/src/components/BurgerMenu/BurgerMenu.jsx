import React, { useState, useEffect } from "react";
import "./style.css";
import placeIcon from '../../images/place.svg';
import { useTranslation } from "react-i18next";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="wrapper_burger">
      <div className={`burger-toggle ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isOpen && (
        <div className="content">
          <ul className="burger-menu">
            <li><a href="/main">{t("title3")}</a></li>
            <li className="burger-menu_li"><a href="/main">{t("header7")}</a>
                <ul className="burger-menu_li_ul">
                    <li><a href="/appliances">{t("header2")}</a></li>
                    <li><a href="/smartphone">{t("header3")}</a></li>
                    <li><a href="/computers">{t("header4")}</a></li>
                </ul>
            </li>
            <li><a href="/favourites">{t("heart")}</a></li>
            <li><a href="/cart">{t("cart")}</a></li>
            <li><a href="/">{t("profile")}</a></li>
            <li><a href="/sitemap">{t("footer_link")}</a></li>
            <li className="hidden_li">
                8-800-77-07-999 ({t("time")})
            </li>
            <li className="hidden_li hidden_li2"> 
            <img src={placeIcon} alt=""></img> <p>{t("city")}</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;