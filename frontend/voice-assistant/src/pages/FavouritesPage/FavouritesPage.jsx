import './style.css';
import { useTranslation } from "react-i18next";


export default function FavouritesPage() {


    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };
    return (<>
    <div className="body-layout_leftside">
        <h2 className="main_header">
            {t("heart")}
        </h2>
        
        <div className="cards-layout">
                {/* { mainData.map((product) => (
                <ProductCard key={product.id} data={product} />
            ))} */}
        </div> 
    </div>
    </>

    )
}