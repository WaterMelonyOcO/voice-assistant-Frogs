import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import dataMainPage from "../../constants/data-main-page.json"
 
const FavoriteList = () => {
  let mainData = Object.values(dataMainPage)[0];
  return(<>
  <h2 className="main_header">Избранное</h2>
              <div className="cards-layout">
                      { mainData.map((product) => (
                      <ProductCard key={product.id} data={product}/>
                  ))}
              </div>
          
      
  </> )
}
 
export default FavoriteList;