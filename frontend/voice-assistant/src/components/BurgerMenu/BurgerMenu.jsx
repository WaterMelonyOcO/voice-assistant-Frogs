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
            <li><a href="/main">Главная</a></li>
            <li className="burger-menu_li"><a href="/main">Каталог</a>
                <ul className="burger-menu_li_ul">
                    <li><a href="/appliances">Бытовая техника</a></li>
                    <li><a href="/smartphone">Смартфоны и фототехника</a></li>
                    <li><a href="/computers">Компьютеры, ноутбуки, периферия</a></li>
                </ul>
            </li>
            <li><a href="/favourites">Избранное</a></li>
            <li><a href="/cart">Корзина</a></li>
            <li><a href="/">Войти</a></li>
            <li><a href="/sitemap">Карта сайта</a></li>
            <li className="hidden_li">
                8-800-77-07-999 (с 03:00 до 22:00)
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