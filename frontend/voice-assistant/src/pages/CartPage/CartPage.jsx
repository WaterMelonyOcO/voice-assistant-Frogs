import './style.css';
import BtnFilled from "../../components/BtnFilled/BtnFilled";
import cartIconWh from '../../images/cart_white.svg';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from 'react-helmet';

export default function CartPage() {


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
                {/* { mainData.map((product) => (
                <ProductCard key={product.id} data={product} />
            ))} */}

            <div className="card_cart">
                <h3 className="cart-h3">
                {t("cart_header")}
                </h3>

                <span className='result_text'>
                        <h3 className='text_h3 newh3'>
                        {t("order_header1")}
                            </h3> 
                        <h4 className='text_h4 newh4'>

                        </h4>

                        <h3 className='text_h3 newh3'>{t("order_header2")}</h3> 
                        <h4 className='text_h4 newh4'>

                        </h4>
                    </span>

                    <Link to="/cart/order" className='link-btn'><BtnFilled name_of_btn={t("name_of_btn")}icon_for_btn={cartIconWh}/></Link>
            </div>
        </div> 
    </div>
    </>)
}