import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import OrderRegistration from './pages/OrderRegistration/OrderRegistration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage/>} />
        <Route path='cart/order' element={<OrderRegistration />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
