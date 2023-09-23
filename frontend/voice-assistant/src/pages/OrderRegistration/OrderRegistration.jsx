import './style.css';
import Header from '../../components/Header/Header';
import Catalog from '../../components/Catalog/Catalog';
import cartIcon from '../../images/cart.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ModalConfirm from '../../components/ModalConfirm/ModalConfirm';

export default function OrderRegistration() {
    const [modalActive, setModalActive] = useState(true);
    return (<>
        <Header />

        <div className="body-layout">
            <Catalog />

            <div className="body-layout_leftside">
                <h2 className="main_header">
                    Оформление заказа
                </h2>
                <form className='leftside_form'>
                    <span className='result_text'>
                        <h3 className='text_h3'>Всего товаров: </h3> 
                        <h4 className='text_h4'>

                        </h4>

                        <h3 className='text_h3'>Сумма: </h3> 
                        <h4 className='text_h4'>

                        </h4>
                    </span>

                    <div className='inputs_wrapper'>
                    <span className='form-wrapper'>
                        <label htmlFor="surname" className='form-label'>Фамилия *</label>
                        <input type="text" name="surname" id="surname" placeholder='Фамилия' className='form-input newinp'/>
                    </span>

                    <span className='form-wrapper'>
                        <label htmlFor="name" className='form-label'>Имя *</label>
                        <input type="text" name="name" id="name" placeholder='Имя' className='form-input newinp'/>
                    </span>

                    <span className='form-wrapper'>
                        <label htmlFor="phone" className='form-label'>Номер телефона *</label>
                        <input type="text" name="phone" id="phone" placeholder='+7 (***) *** ** **' className='form-input newinp'/>
                    </span>

                    <span className='form-wrapper'>
                        <label htmlFor="card" className='form-label'>Номер карты *</label>
                        <input type="number" name="card" id="card" placeholder='Номер карты' className='form-input newinp'
                        maxLength={19}/>
                    </span>

                    <span className='form-wrapper'>
                        <label htmlFor="card_name" className='form-label'>Имя на карте *</label>
                        <input type="text" name="card_name" id="card_name" placeholder='Имя на карте' className='form-input newinp'/>
                    </span>

                    <span className='form-wrapper'>
                        <label htmlFor="card_date" className='form-label'>Срок действия *</label>
                        <input type="text" name="card_date" id="card_date" placeholder='**/**' className='form-input newinp' maxLength={5}/>
                    </span>

                    <span className='form-wrapper'>
                        <label htmlFor="card_cvc" className='form-label'>CVC/CVV *</label>
                        <input type="number" name="card_cvc" id="card_cvc" placeholder='***' className='form-input newinp'
                        maxLength={3} />
                    </span>
                    </div>

                   
                        <div className='btn_with_icon'>
                            <input type='submit' value="Оплатить" name="submit" className='form-btn newbtn' onClick={() => setModalActive(true)}/>
                            <img src={cartIcon} alt="" className='icon'/>
                        </div>
                    
                </form>
                <ModalConfirm active={modalActive} setActive={setModalActive}/>
            </div>
        </div>
        </>)
}