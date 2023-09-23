import './style.css';
import cartIcon from '../../images/cart.png';
import { useState } from 'react';
import ModalConfirm from '../../components/ModalConfirm/ModalConfirm';
import { useTranslation } from "react-i18next";
import { Helmet } from 'react-helmet';

export default function OrderRegistration() {
    const [modalActive, setModalActive] = useState(!true);

    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };
    return (<>

<Helmet>
        <title>{t("title2")}</title>
      </Helmet>
            <div className="body-layout_leftside">
                <h2 className="main_header">
                    {t("header5")}
                </h2>
                <form className='leftside_form'>
                    <span className='result_text'>
                        <h3 className='text_h3'>{t("order_header1")} </h3> 
                        <h4 className='text_h4'>

                        </h4>

                        <h3 className='text_h3'>{t("order_header2")}</h3> 
                        <h4 className='text_h4'>

                        </h4>
                    </span>

                    <div className='inputs_wrapper'>
                    <span className='form-wrapper'>
                        <label htmlFor="surname" className='form-label'>{t("order_label1")} *</label>
                        <input type="text" name="surname" id="surname" placeholder={t("order_label1")} className='form-input newinp'/>
                    </span>

                    <span className='form-wrapper'>
                        <label htmlFor="name" className='form-label'>{t("order_label2")}  *</label>
                        <input type="text" name="name" id="name" placeholder={t("order_label2")}  className='form-input newinp'/>
                    </span>

                    <span className='form-wrapper'>
                        <label htmlFor="phone" className='form-label'>{t("order_label3")} *</label>
                        <input type="text" name="phone" id="phone" placeholder='+7 (***) *** ** **' className='form-input newinp'/>
                    </span>

                    <span className='form-wrapper'>
                        <label htmlFor="card" className='form-label'>{t("order_label4")} *</label>
                        <input type="number" name="card" id="card" placeholder={t("order_label4")}  className='form-input newinp'
                        maxLength={19}/>
                    </span>

                    <span className='form-wrapper'>
                        <label htmlFor="card_name" className='form-label'>{t("order_label5")} *</label>
                        <input type="text" name="card_name" id="card_name" placeholder={t("order_label5")}  className='form-input newinp'/>
                    </span>

                    <span className='form-wrapper'>
                        <label htmlFor="card_date" className='form-label'>{t("order_label6")}  *</label>
                        <input type="text" name="card_date" id="card_date" placeholder='**/**' className='form-input newinp' maxLength={5}/>
                    </span>

                    <span className='form-wrapper'>
                        <label htmlFor="card_cvc" className='form-label'>CVC/CVV *</label>
                        <input type="number" name="card_cvc" id="card_cvc" placeholder='***' className='form-input newinp'
                        maxLength={3} />
                    </span>
                    </div>

                   
                        <div className='btn_with_icon'>
                            <input type='submit' value={t("order_value")}  name="submit" className='form-btn newbtn' onClick={() => setModalActive(true)} />
                            <img src={cartIcon} alt="" className='icon'/>
                        </div>
                </form>
                
            </div>

        <ModalConfirm active={modalActive} setActive={setModalActive}/>
        </>)
}