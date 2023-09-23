
import ProductCard from "../../components/ProductCard/ProductCard";
import "./style.css";
import appliances from '../../constants/appliances.json';
import { useTranslation } from "react-i18next";


export default function AppliancesPage() {
    let mainData = Object.values(appliances)[0];


    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };
    return(<>

            <div className="body-layout_leftside">
                <h2 className="main_header">
                    {t("header2")}
                </h2>
                <div className="cards-layout">
                        { mainData.map((product) => (
                        <ProductCard key={product.id} data={product} />
                    ))}
                </div>
            </div>
        
            
        
    </> )
}