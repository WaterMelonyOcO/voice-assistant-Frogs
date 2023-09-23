import BtnFilled from "../../components/BtnFilled/BtnFilled";
import BtnOutlined from '../../components/BtnOutlined/BtnOutlined';
import Catalog from "../../components/Catalog/Catalog";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./style.css";

import smartphones from '../../constants/smartphones.json';
import line from '../../images/line.png';


export default function SmartPhonesPage() {
    let mainData = Object.values(smartphones)[0];
    return(<>
        <Header />

        <div className="body-layout">
            <Catalog />
            <div className="body-layout_leftside">
                <h2 className="main_header">
                    Смартфоны и фототехника
                </h2>
                <div className="cards-layout">
                        { mainData.map((product) => (
                        <ProductCard key={product.id} data={product} />
                    ))}
                </div>
            </div>
        </div>
        
            
        
    </> )
}