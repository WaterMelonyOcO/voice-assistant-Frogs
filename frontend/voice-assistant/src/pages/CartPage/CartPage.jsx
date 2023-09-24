import React from 'react';
import './style.css';
import BtnFilled from "../../components/BtnFilled/BtnFilled";
import cartIconWh from '../../images/cart_white.svg';
import { Link } from "react-router-dom";
import ProductCard from '../../components/ProductCard/ProductCard';
import dataMainPage from "../../constants/computers.json"
import { useTranslation } from "react-i18next";
import { Helmet } from 'react-helmet';

let mainData = Object.values(dataMainPage)[0];
export default function CartPage() {
  // Макетные данные для демонстрации
  const cartItems = mainData.slice(0, 2); // Добавьте макетные товары

  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((total, item) => total + item.price_after, 0);


    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };
    return (<>

<Helmet>
        <title>{t("title8")}</title>
      </Helmet>

    <div className="body-layout_leftside">
        <h2 className="main_header">
           {t("cart")}
        </h2>

        <div className="cards-layout">
          {cartItems.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>



            <div className="card_cart">
                <h3 className="cart-h3">
                {t("cart_header")}
                </h3>

                <span className='result_text'>
                        <h3 className='text_h3 newh3'>
                        {t("order_header1")}
                            </h3> 
                        <h4 className='text_h4 newh4'> {totalItems}</h4>


                        <h3 className='text_h3 newh3'>{t("order_header2")}</h3> 
                        <h4 className='text_h4 newh4'>

                        </h4>
                    </span>

                    <Link to="/cart/order" className='link-btn'><BtnFilled name_of_btn={t("name_of_btn")}icon_for_btn={cartIconWh}/></Link>
            </div>
        </div> 
   
    </>)
}

