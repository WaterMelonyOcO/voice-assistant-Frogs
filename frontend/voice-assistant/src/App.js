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

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage/>} />
        <Route path='/appliances' element={<AppliancesPage/>} />
        <Route path='/smartphone' element={<SmartPhonesPage/>}/>
        <Route path='/computers'element={<ComputersPage/>}/>
        <Route path="/main" element={<MainPage/>} />
        <Route path='cart/order' element={<OrderRegistration />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
