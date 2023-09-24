import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from './pages/Pages/MainPage';
import AppliancesPage from './pages/Pages/AppliancesPage';
import ComputersPage from './pages/Pages/ComputersPage';
import SmartPhonesPage from './pages/Pages/SmartPhonesPage';
import LoginPage from './pages/LoginPage/LoginPage';
import OrderRegistration from './pages/OrderRegistration/OrderRegistration';
import FavoriteList from './pages/FavouritesPage/FavoriteList';
import CartPage from './pages/CartPage/CartPage';
import ProductPage from './pages/ProductPage/ProductPage';
import React, { useEffect, useState, useRef } from 'react';
import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import SpecialFeaturesModal from './components/SpecialFeaturesModal/SpecialFeaturesModal';
import placeIcon from './images/place.svg';
import worldIcon from './images/world.png';
import pepIcon from './images/pep.png';
import saverIcon from './images/saver.png';
import { ImageToggleProvider } from './components/ImageToggleContext/ImageToggleContext';
import { useTranslation } from "react-i18next";
import Footer from './components/Footer/Footer';
import SiteMapPage from './pages/SiteMapPage/SiteMapPage';
import VoiseAssistant from './components/VoiseAssistant/VoiseAssistant';
import Product from './pages/Pages/Product';




function App() {


  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const [modalActive, setModalActive] = useState(!true);


  /* btn scroll to top */
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  /* for btn lang */
  const [areLang, setAreLang] = useState("ru");

const handleChangeLanguage = () => {
  if (areLang === "ru") {
    changeLanguage("en");
    setAreLang("en");
  } else {
    changeLanguage("ru");
    setAreLang("ru");
  }
};

const [modalVoiseActive, setModalVoiseActive ] = useState(false);

/* for modal  */

  return ( <>
  
    <ImageToggleProvider>
    <BrowserRouter>
 


    <div style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
    <Routes>
        <Route path="/" element={<LoginPage />} />
    </Routes>
    </div>
    

    <div className="app-container">

    <div className="firstLine">
            <span className='place'><img src={placeIcon} alt=""></img> <p>{t("city")}</p></span>
        <span className='btn-layout'>

            <button className='btn_header1 btn-lang' title={t("btn1")} onClick={handleChangeLanguage}><img src={worldIcon} alt=""/> 
            {/* {t("lang")} */}
            {areLang === "ru" ? "Русский" : "English"}
            </button>
            <button className='btn_header1 btn-acc' onClick={() => setModalActive(true)} title={t("btn2")}><img src={pepIcon} alt=""/> {t("one_btn")}</button>
            <button className='btn_header1 btn-help' title={t("btn3")}><img src={saverIcon} alt=""/>{t("two_btn")}</button>

        </span>

            <span className='hidden_number'>8-800-77-07-999 ({t("time")})</span>
        </div>

        <Header />

        <div className="body-layout">
          <Catalog />
        <div className="main-content">
            <Routes>
              <Route path="/main" element={<MainPage />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/appliances" element={<AppliancesPage />} />
              <Route path="/smartphone" element={<SmartPhonesPage />} />
              <Route path="/computers" element={<ComputersPage />} />
              <Route path="cart/order" element={<OrderRegistration />} />
              <Route path="/favourites" element={<FavoriteList />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path='/sitemap' element={<SiteMapPage />} />
            </Routes>
          

          </div>
          </div>
          
          <Footer />
      </div>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          ⭱
        </button>
      )}

      <SpecialFeaturesModal active={modalActive} setActive={setModalActive} />
    <VoiseAssistant active={modalVoiseActive} setActive={setModalVoiseActive}/>
     
    </BrowserRouter>
    </ImageToggleProvider>

  </>);
}

export default App;
