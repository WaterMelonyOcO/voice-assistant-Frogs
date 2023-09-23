import Header from "../../components/Header/Header";
import Catalog from "../../components/Catalog/Catalog";
import './style.css';
import BtnFilled from "../../components/BtnFilled/BtnFilled";
import cartIconWh from '../../images/cart_white.svg';
import { Link } from "react-router-dom";

export default function CartPage() {
    return (<>
        <Header />

<div className="body-layout">
    <Catalog />
    <div className="body-layout_leftside">
        <h2 className="main_header">
            Корзина
        </h2>
        
        <div className="cards-layout">
                {/* { mainData.map((product) => (
                <ProductCard key={product.id} data={product} />
            ))} */}

            <div className="card_cart">
                <h3 className="cart-h3">
                    Итого
                </h3>

                <span className='result_text'>
                        <h3 className='text_h3 newh3'>Всего товаров: </h3> 
                        <h4 className='text_h4 newh4'>

                        </h4>

                        <h3 className='text_h3 newh3'>Сумма: </h3> 
                        <h4 className='text_h4 newh4'>

                        </h4>
                    </span>

                    <Link to="/cart/order"><BtnFilled name_of_btn={"Перейти к оформлению"} icon_for_btn={cartIconWh}/></Link>
            </div>
        </div> 
    </div>
</div>
    </>)
}