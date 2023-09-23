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


export default function Header() {

   
    return ( <>
      
    <header className='header'>

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
    

    </>)
}