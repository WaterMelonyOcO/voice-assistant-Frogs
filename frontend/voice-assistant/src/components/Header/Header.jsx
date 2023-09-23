import "./style.css";
import placeIcon from '../../images/place.svg';
import worldIcon from '../../images/world.png';
import pepIcon from '../../images/pep.png';
import saverIcon from '../../images/saver.png';
import logo from '../../images/logo.svg';
import heartIcon from '../../images/heart.png';
import carttIcon from '../../images/cart.png';
import profileIcon from '../../images/profilw.png';
import InputSearch from '../InputSearch/InputSearch';
import { Link } from "react-router-dom";
import SpecialFeaturesModal from "../SpecialFeaturesModal/SpecialFeaturesModal";
import { useState } from "react";

export default function Header() {
    const [modalActive, setModalActive] = useState(!true);
    return ( <>
        <div className="firstLine">
            <span className='place'><img src={placeIcon} alt="иконка места"></img> <p>Краснодар</p></span>
        <span className='btn-layout'>

            <button className='btn_header btn-lang' title="Cмена языка"><img src={worldIcon} alt="смена языка"/> Русский</button>
            <button className='btn_header btn-acc' onClick={() => setModalActive(true)} title="Кнопка редактирования страницы со спец. возможностями"><img src={pepIcon} alt="спец.возможности"/> Спец.возможности</button>
            <button className='btn_header btn-help' title="Кнопка открытия голосового помощника"><img src={saverIcon} alt="голосовой помощник"/>Голосовой помощник</button>

        </span>

            <span>8-800-77-07-999 (с 03:00 до 22:00)</span>
        </div>

    <header className='header' role="contentinfo">

        <span className='header-one_block'>
        <Link to='/main'><img src={logo} alt="нажмите сюда для перехода на главную страницу" title="Нажмите сюда для перехода на главную страницу"/></Link>

            <InputSearch />
           
        </span>

        <nav className='header__nav'>
            <Link to="/favourites" className="nav-link">
                <button className='btn_header btn-nav1'>
                <img src={heartIcon} alt="перейти в избранное"/>
                    Избранное</button>
            </Link>
            <Link to="/cart" className="nav-link">
                <button className='btn_header btn-nav1'>
                <img src={carttIcon} alt="перейти в корзину"/>
                    Корзина</button>
            </Link>
            <Link to="/" className="nav-link">
                <button className='btn_header btn-nav1'>
                <img src={profileIcon} alt="перейти в профиль"/>
                Войти</button>
                </Link>
        </nav>
    </header>
    <SpecialFeaturesModal active={modalActive} setActive={setModalActive}/>
    </>)
}