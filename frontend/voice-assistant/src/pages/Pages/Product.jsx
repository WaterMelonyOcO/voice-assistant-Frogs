import React from 'react';


import { useParams } from 'react-router-dom'; // Импортируйте useParams
import styles from './Product.module.css'


export default function Product() {
    const { productId } = useParams(); // Получите параметры маршрута
    const data = JSON.parse(decodeURIComponent(productId)); // Преобразуйте обратно в объект

    // В data теперь содержится переданный JSON

    const handleDetailsClick = () => {
        // Добавьте здесь логику обработки клика, если она необходима
    }

    return (
<>


<div className={styles.product_details_modal} onClick={handleDetailsClick}>
              <h4 className={styles.card_header}>{data.name}</h4>
            <img src={data.image} alt={`картинка товара ${data.name}`} />
          
            <span className='price'>
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
  
<div>
    Описание
</div>
<div>
    Характеристики
</div>
<div>
    Отзывы
</div>

</div>
<p>"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."</p>
</div>
</>

     

    )
}
