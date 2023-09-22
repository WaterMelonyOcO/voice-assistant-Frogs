import BtnFilled from "../../components/BtnFilled/BtnFilled";
import BtnOutlined from '../../components/BtnOutlined/BtnOutlined';
import Catalog from "../../components/Catalog/Catalog";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./style.css";
import dataMainPage from '../../constants/data-main-page.json';


export default function MainPage() {
    let mainData = Object.values(dataMainPage)[0];
    return(<>
        <Header />
        <div className="body-layout">
            <Catalog />
            <div className="cards-layout">
                    { mainData.map((product) => (
                    <ProductCard key={product.id} data={product} />
                ))}
            </div>
        </div>
        
            
        
    </> )
}