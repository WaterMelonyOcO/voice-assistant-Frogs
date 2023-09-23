import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';
import AppliancesPage from './pages/MainPage/AppliancesPage';
import ComputersPage from './pages/MainPage/ComputersPage';
import SmartPhonesPage from './pages/MainPage/SmartPhonesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path='/appliances' element={<AppliancesPage/>} />
        <Route path='/smartphone' element={<SmartPhonesPage/>}/>
        <Route path='/computers'element={<ComputersPage/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
