import ProductCard from "../../components/ProductCard/ProductCard";
import "./style.css";
import computers from '../../constants/computers.json';


export default function ComputersPage() {
    let mainData = Object.values(computers)[0];
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