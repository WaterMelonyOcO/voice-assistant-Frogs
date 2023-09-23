import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import oneIcon from '../../images/oneIcon.png';
import twoIcon from '../../images/twoIcon.png';
import threeIcon from '../../images/threeIcon.png';
import styless from './Catalog.module.css'; // Импортируем стили

export default function Catalog() {
    const location = useLocation();

    return (
        <div className={styless.sidebar}> {/* Используем стиль из модуля */}
            <h3 className={styless.sidebar__h3}>Каталог</h3>
            <Link to="/appliances" className={`${styless.sidebar_link} ${location.pathname === "/appliances" ? styless.active : ''}`}>
                <img src={oneIcon} alt=""/>
                Бытовая техника
            </Link>
            <Link to="/smartphone" className={`${styless.sidebar_link} ${location.pathname === "/smartphone" ? styless.active : ''}`}>
                <img src={twoIcon} alt=""/>
                Смартфоны и фототехника
            </Link>
            <Link to="/computers" className={`${styless.sidebar_link} ${location.pathname === "/computers" ? styless.active : ''}`}>
                <img src={threeIcon} alt=""/>
                ПК, ноутбуки, переферия
            </Link>
        </div>
    )
}
