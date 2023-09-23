import ProductCard from "../../components/ProductCard/ProductCard";
import "./style.css";
import dataMainPage from '../../constants/data-main-page.json';
import line from '../../images/line.png';
import gradient from '../../images/gradient.png';
import VoiseAssistant from '../../components/VoiseAssistant/VoiseAssistant'
import { useImageToggle } from "../../components/ImageToggleContext/ImageToggleContext";

import { useTranslation } from "react-i18next";
import { Helmet } from 'react-helmet';

export default function MainPage() {

    const { areImagesVisible } = useImageToggle();
    let mainData = Object.values(dataMainPage)[0];

    const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

    return(<>

<Helmet>
        <title>{t("title3")}</title>
      </Helmet>
            <div className="body-layout_leftside">
                <h2 className="main_header">
                {t("header1")}
                </h2>
                <div className="banner">
                    <h3 className="banner-header1">
                    {t("header_action1")}
                    </h3>
                    <h3 className="banner-header2">
                    {t("header_action2")}
                    </h3>
                    <h3 className="banner-desc">1 + 1 = 2</h3>
                    {areImagesVisible && (<>
        <img 
        src={line} alt=""
        className="background-line" 
        />
        <img 
        src={gradient} alt="" className="background-gradient"
        />
     </> )}
                    
                </div>
                <div className="cards-layout">
                        { mainData.map((product) => (
                        <ProductCard key={product.id} data={product} />
                    ))}

                </div>
                <VoiseAssistant/>
            </div>
        
            
        
    </> )
}