import BtnOutlined from '../BtnOutlined/BtnOutlined';
import './style.css';
import heartIconWh from '../../images/heart_white.svg';
import carttIconWh from '../../images/cart_white.svg';
import BtnFilled from '../BtnFilled/BtnFilled';
import test_1 from '../../images/image_1.png';
import test_2 from '../../images/image_2.png';
import test_3 from '../../images/image_3.png';
import test_4 from '../../images/image_4.png';
import test_5 from '../../images/image_5.png';
import test_6 from '../../images/image_6.png';
import test_7 from '../../images/image_7.png';
import test_8 from '../../images/image_8.png';
import { useImageToggle } from '../ImageToggleContext/ImageToggleContext';

export default function ProductCard(product) {
    const randomImages = [test_1, test_2, test_3, test_4, test_5, test_6, test_7, test_8];
    const randomIndex = Math.floor(Math.random() * randomImages.length);
    const randomImage = randomImages[randomIndex];

    const { areImagesVisible } = useImageToggle();
    
    let products = Object.values(product)[0];
    console.log(products)
    return (
        /* alt={`товар ${products.name}`} */
        <div role="button" className='card-body' tabIndex="0">
            {areImagesVisible && (
        <img src={randomImage} alt={`картинка товара ${products.name}`}/>
      )}
            
            <h4 className='card-header' aria-hidden="true">
                {products.name}
            </h4>
        
            <span className='price'>
                <p className='price_before' aria-label={`цена до скидки ${products.price_before}`}>
                {products.price_before} ₽
                </p>
                <h5 className='price_after' aria-label={`цена со скидкой ${products.price_after}`}>
                    {products.price_after} ₽
                </h5>
            </span>
            
        {/* <span className='btn-layout'> */}
            <BtnOutlined name_of_btn={"В избранное"} icon_for_btn={heartIconWh} />
            <BtnFilled name_of_btn={"Купить"} icon_for_btn={carttIconWh} />
            {/* </span> */}
        </div>
    )
}