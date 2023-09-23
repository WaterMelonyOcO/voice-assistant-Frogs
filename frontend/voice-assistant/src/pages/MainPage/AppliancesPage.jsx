
import ProductCard from "../../components/ProductCard/ProductCard";
import "./style.css";
import appliances from '../../constants/appliances.json';



export default function AppliancesPage() {
    let mainData = Object.values(appliances)[0];
    return(<>

            <div className="body-layout_leftside">
                <h2 className="main_header">
                    Бытовая техника
                </h2>
                <div className="cards-layout">
                        { mainData.map((product) => (
                        <ProductCard key={product.id} data={product} />
                    ))}
                </div>
            </div>
        
            
        
    </> )
}