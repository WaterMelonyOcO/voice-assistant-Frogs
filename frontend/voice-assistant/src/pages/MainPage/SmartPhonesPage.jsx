import ProductCard from "../../components/ProductCard/ProductCard";
import "./style.css";

import smartphone from '../../constants/smartphones.json';
import line from '../../images/line.png';


export default function SmartPhonePage() {
    let mainData = Object.values(smartphone)[0];
    return(<>
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

    </> )
}