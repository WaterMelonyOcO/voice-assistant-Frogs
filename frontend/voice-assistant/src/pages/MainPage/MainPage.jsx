import BtnFilled from "../../components/BtnFilled/BtnFilled";
import BtnOutlined from '../../components/BtnOutlined/BtnOutlined';
import Catalog from "../../components/Catalog/Catalog";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./style.css";
import dataMainPage from '../../constants/data-main-page.json';
import line from '../../images/line.png';


export default function MainPage() {
    let mainData = Object.values(dataMainPage)[0];
    return(<>
        <Header />

        <div className="body-layout">
            <Catalog />
            <div className="body-layout_leftside">
                <h2 className="main_header">
                    Актуальные предложения
                </h2>
                <div className="banner">
                    <h3 className="banner-header1">
                    Специальная акция!
                    </h3>
                    <h3 className="banner-header2">
                    Купи один смартфон, и получи второй в подарок!
                    </h3>
                    <h3 className="banner-desc">1 + 1 = 2</h3>
                    <img src={line} alt="" />
                </div>
                <div className="cards-layout">
                        { mainData.map((product) => (
                        <ProductCard key={product.id} data={product} />
                    ))}
                </div>
            </div>
        </div>
        
            
        
    </> )
}