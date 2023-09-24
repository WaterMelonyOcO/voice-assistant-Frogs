import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import dataMainPage from "../../constants/data-main-page.json";
import { useTranslation } from "react-i18next";
 
const FavoriteList = () => {
  let mainData = Object.values(dataMainPage)[0];

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return(<>
  <h2 className="main_header">{t("heart")}</h2>
              <div className="cards-layout">
                      { mainData.map((product) => (
                      <ProductCard key={product.id} data={product}/>
                  ))}
              </div>
          
      
  </> )
}
 
export default FavoriteList;