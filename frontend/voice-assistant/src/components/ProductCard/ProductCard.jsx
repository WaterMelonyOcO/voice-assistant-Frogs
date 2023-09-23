import BtnOutlined from '../BtnOutlined/BtnOutlined';
import './style.css';
import heartIconWh from '../../images/heart_white.svg';
import carttIconWh from '../../images/cart_white.svg';
import BtnFilled from '../BtnFilled/BtnFilled';


export default function ProductCard(product) {
    
    let products = Object.values(product)[0];
    console.log(products)
    return (
        <div className='card-body'>
            <img src={products.image} alt={`картинка товара ${products.name}`}/>
            <h4 className='card-header' >
                {products.name}
            </h4>
        
            <span className='price'>
                <p className='price_before'>
                {products.price_before} ₽
                </p>
                <h5 className='price_after'>
                    {products.price_after} ₽
                </h5>
            </span>
            
        {/* <span className='btn-layout'> */}
            <BtnOutlined name_of_btn={"В избранное"} icon_for_btn={heartIconWh} />
            <BtnFilled name_of_btn={"Купить"} icon_for_btn={carttIconWh} />
        </div>
    )
}