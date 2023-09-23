import ProductCard from "../../components/ProductCard/ProductCard";
import "./style.css";
import computers from '../../constants/computers.json';
import { useTranslation } from "react-i18next";

export default function ComputersPage() {
    let mainData = Object.values(computers)[0];

    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };
    return(<>
            <div className="body-layout_leftside">
                <h2 className="main_header">
                    {t("header4")}
                </h2>
                <div className="cards-layout">
                        { mainData.map((product) => (
                        <ProductCard key={product.id} data={product} />
                    ))}
                </div>
            </div>
    </> )
}