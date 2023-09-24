import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import oneIcon from '../../images/oneIcon.png';
import twoIcon from '../../images/twoIcon.png';
import threeIcon from '../../images/threeIcon.png';
import styless from './Catalog.module.css'; // Импортируем стили
import { useTranslation } from "react-i18next";

export default function Catalog() {
    const location = useLocation();


    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };
    return (
        <div className={styless.sidebar}> {/* Используем стиль из модуля */}
            <h3 className={styless.sidebar__h3} aria-label="Каталог" role='contentinfo'>{t("header7")}</h3>
            <ul>
                <li>
            <Link to="/appliances" className={`${styless.sidebar_link} ${location.pathname === "/appliances" ? styless.active : ''}`}>
                <img src={oneIcon} alt=""/>
                {t("header2")}
            </Link>
            </li>
            <li>
            <Link to="/smartphone" className={`${styless.sidebar_link} ${location.pathname === "/smartphone" ? styless.active : ''}`}>
                <img src={twoIcon} alt=""/>
                {t("header3")}
            </Link>
            </li>
            <li>
            <Link to="/computers" className={`${styless.sidebar_link} ${location.pathname === "/computers" ? styless.active : ''}`}>
                <img src={threeIcon} alt=""/>
                {t("header4")}
            </Link>
            </li>
            </ul>
        </div>
    )
}
