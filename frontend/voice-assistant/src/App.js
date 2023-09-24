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

import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import SpecialFeaturesModal from './components/SpecialFeaturesModal/SpecialFeaturesModal';
import placeIcon from './images/place.svg';
import worldIcon from './images/world.png';
import pepIcon from './images/pep.png';
import saverIcon from './images/saver.png';
import VoiseAssistant from './components/VoiseAssistant/VoiseAssistant';
import Product from './pages/Pages/Product';



function App() {

 


  const [modalActive, setModalActive] = useState(!true);
  const [modalVoiseActive, setModalVoiseActive ] = useState(false);
  return (

    <BrowserRouter>
 

    <div style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
    <Routes>
        <Route path="/" element={<LoginPage />} />
    </Routes>
    </div>
    

    <div className="app-container">


<div className="firstLine">
            <span className='place'><img src={placeIcon} alt="иконка места"></img> <p>Краснодар</p></span>
        <span className='btn-layout'>

            <button className='btn_header btn-lang' title="Cмена языка"><img src={worldIcon} alt="смена языка"/> Русский</button>
            <button className='btn_header btn-acc' onClick={() => setModalActive(true)} title="Кнопка редактирования страницы со спец. возможностями"><img src={pepIcon} alt="спец.возможности"/> Спец.возможности</button>
            <button className='btn_header btn-help' onClick={() => setModalVoiseActive(true)} title="Кнопка открытия голосового помощника"><img src={saverIcon} alt="голосовой помощник"/>Голосовой помощник</button>

        </span>

            <span>8-800-77-07-999 (с 03:00 до 22:00)</span>
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
             
            </Routes>
          

          </div>
          </div>
      </div>    
      <SpecialFeaturesModal active={modalActive} setActive={setModalActive}/>
    <VoiseAssistant active={modalVoiseActive} setActive={setModalVoiseActive}/>
     
    </BrowserRouter>

  );
}

export default App;
