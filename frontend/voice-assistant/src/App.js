import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';
import AppliancesPage from './pages/MainPage/AppliancesPage';
import ComputersPage from './pages/MainPage/ComputersPage';
import SmartPhonesPage from './pages/MainPage/SmartPhonesPage';
import LoginPage from './pages/LoginPage/LoginPage';
import OrderRegistration from './pages/OrderRegistration/OrderRegistration';
import FavouritesPage from './pages/FavouritesPage/FavouritesPage';
import CartPage from './pages/CartPage/CartPage';
import ProductPage from './pages/ProductPage/ProductPage';
import React, { useEffect, useState } from 'react';
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

            <span>8-800-77-07-999 ({t("time")})</span>
        </div>
        <Header />

        <div className="body-layout">
          <Catalog />
        <div className="main-content">
            <Routes>
              <Route path="/main" element={<MainPage />} />
              <Route path="/product/:productId" element={<ProductPage />} />
              <Route path="/appliances" element={<AppliancesPage />} />
              <Route path="/smartphone" element={<SmartPhonesPage />} />
              <Route path="/computers" element={<ComputersPage />} />
              <Route path="cart/order" element={<OrderRegistration />} />
              <Route path="/favourites" element={<FavouritesPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path='/sitemap' element={<SiteMapPage />} />
            </Routes>
          </div>
          </div>
          <Footer />
      </div>

      <SpecialFeaturesModal active={modalActive} setActive={setModalActive} />
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          ⭱
        </button>
      )}
    </BrowserRouter>
    </ImageToggleProvider>

  </>);
}

export default App;
