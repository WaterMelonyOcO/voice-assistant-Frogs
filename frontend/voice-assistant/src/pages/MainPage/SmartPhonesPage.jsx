import ProductCard from "../../components/ProductCard/ProductCard";
import "./style.css";
import smartphones from '../../constants/smartphones.json';


export default function SmartPhonesPage() {
    let mainData = Object.values(smartphones)[0];
    return(<>
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

    </> )
}