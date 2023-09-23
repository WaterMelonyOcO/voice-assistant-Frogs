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

function App() {

  return (
    <BrowserRouter>
    <div style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
    <Routes>
        <Route path="/" element={<LoginPage />} />
    </Routes>
    </div>
    

    <div className="app-container">
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
            </Routes>
          </div>
          </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
