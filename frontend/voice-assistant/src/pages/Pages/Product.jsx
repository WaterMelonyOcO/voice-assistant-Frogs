import React from 'react';
import test_1 from '../../images/image_1.png';
import test_2 from '../../images/image_2.png';
import test_3 from '../../images/image_3.png';
import test_4 from '../../images/image_4.png';
import test_5 from '../../images/image_5.png';
import test_6 from '../../images/image_6.png';
import test_7 from '../../images/image_7.png';
import test_8 from '../../images/image_8.png';
import { useTranslation } from "react-i18next";
import { useImageToggle } from '../../components/ImageToggleContext/ImageToggleContext';

import { useParams } from 'react-router-dom'; // Импортируйте useParams
import styles from './Product.module.css'


export default function Product() {
    const { productId } = useParams(); // Получите параметры маршрута
    const data = JSON.parse(decodeURIComponent(productId)); // Преобразуйте обратно в объект

    // В data теперь содержится переданный JSON

    const handleDetailsClick = () => {
    
    }
    const { areImagesVisible } = useImageToggle();
    const randomImages = [test_1, test_2, test_3, test_4, test_5, test_6, test_7, test_8];
    const randomIndex = Math.floor(Math.random() * randomImages.length);
    const randomImage = randomImages[randomIndex];


    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };
  
    return (
<>


<div className={styles.product_details_modal} onClick={handleDetailsClick}>
              <h4 className={styles.card_header}>{data.name}</h4>
              {areImagesVisible && (
        <img src={randomImage} alt={`картинка товара ${data.name}`}/>
      )}
      <p className={styles.card_p}> 
      {t("r3")} {data.name} {t("r2")}
      </p>
          
            <span className={styles.price}>
                <p className='price_before'>
                    {data.price_before} ₽
                </p>
                <h5 className='price_after'>
                    {data.price_after} ₽
                </h5>
            </span>
        </div>
<div className={styles.info_block}>
<div className={styles.list_info}>
  
<span className={styles.info_block_text}>
    {t("r")}
</span>

</div>
<p className={styles.list_info_p}>{t("long_text")}</p>
</div>
</>

     

    )
}
