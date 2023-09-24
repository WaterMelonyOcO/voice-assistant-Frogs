import ProductCard from "../../components/ProductCard/ProductCard";
import "./style.css";
import { useTranslation } from "react-i18next";
import smartphone from '../../constants/smartphones.json';
import { Helmet } from 'react-helmet';

export default function SmartPhonePage() {


    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };
    let mainData = Object.values(smartphone)[0];
    return(<>

<Helmet>
        <title>{t("title5")}</title>
      </Helmet>
            <div className="body-layout_leftside">
                <h2 className="main_header">
                    {t("header3")}
                </h2>
                <div className="cards-layout">
                        { mainData.map((product) => (
                        <ProductCard key={product.id} data={product} />
                    ))}
                </div>
            </div>

    </> )
}