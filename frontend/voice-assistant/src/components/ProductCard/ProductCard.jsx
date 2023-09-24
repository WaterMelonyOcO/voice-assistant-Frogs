import React from 'react';
import BtnOutlined from '../BtnOutlined/BtnOutlined';
import './style.css';
import heartIconWh from '../../images/heart_white.svg';
import carttIconWh from '../../images/cart_white.svg';
import BtnFilled from '../BtnFilled/BtnFilled';
import { Link } from 'react-router-dom'; 


export default function ProductCard({ data, handleAddToCart }) {
  return (
    <div className='card-body'>
      <Link to={`/product/${encodeURIComponent(JSON.stringify(data))}`} className='card-body-link'>
        <img src={data.image} alt={`картинка товара ${data.name}`} />
        <h4 className='card-header'>{data.name}</h4>
        <span className='price'>
          <p className='price_before'>{data.price_before} ₽</p>
          <h5 className='price_after'>{data.price_after} ₽</h5>
        </span>
      </Link>
      <div className="btn-zone">
        <BtnOutlined name_of_btn={"В избранное"} icon_for_btn={heartIconWh} />
        <BtnFilled
          name_of_btn={"Купить"}
          icon_for_btn={carttIconWh}
          onClick={() => handleAddToCart(data)}
        />
      </div>
    </div>
  )
}
