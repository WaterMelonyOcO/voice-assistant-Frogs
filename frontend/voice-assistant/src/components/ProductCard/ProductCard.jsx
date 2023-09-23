import React from 'react';
import BtnOutlined from '../BtnOutlined/BtnOutlined';
import './style.css';
import heartIconWh from '../../images/heart_white.svg';
import carttIconWh from '../../images/cart_white.svg';
import BtnFilled from '../BtnFilled/BtnFilled';
import { Link } from 'react-router-dom'; 

export default function ProductCard({ data }) {
    return (
        <Link to={`/product/${encodeURIComponent(JSON.stringify(data))}`} className='card-body'> {/* Передача данных через параметры маршрута */}
            <img src={data.image} alt={`картинка товара ${data.name}`}/>
            <h4 className='card-header'>{data.name}</h4>
            <span className='price'>
                <p className='price_before'>{data.price_before} ₽</p>
                <h5 className='price_after'>{data.price_after} ₽</h5>
            </span>
            <BtnOutlined name_of_btn={"В избранное"} icon_for_btn={heartIconWh} />
            <BtnFilled name_of_btn={"Купить"} icon_for_btn={carttIconWh} />
        </Link>
    )
}
