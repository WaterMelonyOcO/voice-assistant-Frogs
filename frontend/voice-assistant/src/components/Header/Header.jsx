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
export default function Header() {
    return ( <>
        <div className="firstLine">
            <span className='place'><img src={placeIcon} alt="иконка места"></img> <p>Краснодар</p></span>
        <span className='btn-layout'>
            <button className='btn_header btn-lang'><img src={worldIcon} alt="смена языка"/> Русский</button>
            <button className='btn_header btn-acc'><img src={pepIcon} alt="спец.возможности"/> Спец.возможности</button>
            <button className='btn_header btn-help'><img src={saverIcon} alt="голосовой помощник"/>Голосовой помощник</button>
        </span>

            <span>8-800-77-07-999 (с 03:00 до 22:00)</span>
        </div>

    <header className='header'>

        <span className='header-one_block'>
            <img src={logo} alt="нажмите сюда для перехода на главную страницу"/>

            <InputSearch />
           
        </span>

        <nav className='header__nav'>
                <button className='btn_header btn-nav1'>
                <img src={heartIcon} alt="перейти в избранное"/>
                    Избранное</button>

                <button className='btn_header btn-nav1'>
                <img src={carttIcon} alt="перейти в корзину"/>
                    Корзина</button>

                <button className='btn_header btn-nav1'>
                <img src={profileIcon} alt="перейти в профиль"/>
                Войти</button>
        </nav>
    </header>
    </>)
}