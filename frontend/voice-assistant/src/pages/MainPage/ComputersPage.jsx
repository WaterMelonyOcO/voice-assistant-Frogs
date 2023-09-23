import BtnFilled from "../../components/BtnFilled/BtnFilled";
import BtnOutlined from '../../components/BtnOutlined/BtnOutlined';
import Catalog from "../../components/Catalog/Catalog";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./style.css";

import computers from '../../constants/computers.json';
import line from '../../images/line.png';


export default function ComputersPage() {
    let mainData = Object.values(computers)[0];
    return(<>
        <Header />

        <div className="body-layout">
            <Catalog />
            <div className="body-layout_leftside">
                <h2 className="main_header">
                    Пк, ноутбуки, переферия
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