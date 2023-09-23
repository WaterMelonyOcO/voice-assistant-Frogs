import './style.css';
import closeIcon from '../../images/close2.png';
import okIcon from '../../images/success.png';
import BtnOutlined from '../BtnOutlined/BtnOutlined';
import BtnFilled from '../BtnFilled/BtnFilled';
import { useState } from 'react';

export default function SpecialFeaturesModal({active, setActive}) {
    const [activeBtnAcc, setActiveBtnAcc] = useState(false);
    return(
        <div className={active ? "modal active" : "modal"}>
            <div className="modal_content" onClick={e => e.stopPropagation()}>
            <div className='modal_header'>
                <h2>Специальные возможности</h2>
                    <button onClick={() => setActive(false)} className='header-close_btn'> 
                        <img src={closeIcon} alt=""/>
                    </button>
            </div>

                    <div className='modal_body'>
                        <p className='body-p'>
                        Данные настройки помогут Вам изменить сайт так, как Вам будет удобно.
                        </p>

                    <span className='body-buttons_wraper'>
                        <h4 className='wraper-h4'>
                        Специальный режим
                        </h4>
                        <span className='wrapper'>
                            <button className={activeBtnAcc ? "wraper-btn active" : "wraper-btn no_active"} onClick={() => setActiveBtnAcc(!false)}>
                            Включить
                            </button>

                            <button className={activeBtnAcc ? "wraper-btn active" : "wraper-btn no_active"} onClick={() => setActiveBtnAcc(!false)}>
                            Отключить
                            </button>
                        </span>
                    </span>

                    <span className='body-buttons_wraper'>
                        <h4 className='wraper-h4'>
                        Размер шрифта
                        </h4>
                        <span className='wrapper'>
                            <button className={active ? "wraper-btn active" : "wraper-btn no_active"} onClick={() => setActiveBtnAcc(!false)}>
                            100%
                            </button>

                            <button className={active ? "wraper-btn active" : "wraper-btn no_active"} onClick={() => setActiveBtnAcc(!false)}>
                            150%
                            </button>
                            <button className={active ? "wraper-btn active" : "wraper-btn no_active"} onClick={() => setActiveBtnAcc(!false)}>
                            200%
                            </button>
                        </span>
                    </span>

                    <span className='body-buttons_wraper'>
                        <h4 className='wraper-h4'>
                        Расстояние между буквами
                        </h4>
                        <span className='wrapper'>
                            <button className={active ? "wraper-btn active" : "wraper-btn no_active"} onClick={() => setActiveBtnAcc(!false)}>
                            Рекомендуемое
                            </button>

                            <button className={active ? "wraper-btn active wordspacing1" : "wraper-btn no_active wordspacing1"} onClick={() => setActiveBtnAcc(!false)}>
                            Большое
                            </button>
                            <button className={active ? "wraper-btn active wordspacing2" : "wraper-btn no_active wordspacing2"} onClick={() => setActiveBtnAcc(!false)}>
                            Очень большое
                            </button>
                        </span>
                    </span>

                    <span className='body-buttons_wraper'>
                        <h4 className='wraper-h4'>
                        Цвет шрифта и фона
                        </h4>
                        <span className='wrapper'>
                            <button className={active ? "wraper-btn active" : "wraper-btn no_active"} onClick={() => setActiveBtnAcc(!false)}>
                            Стандартный
                            </button>

                            <button className={active ? "wraper-btn active" : "wraper-btn no_active"} onClick={() => setActiveBtnAcc(!false)}>
                            Контрастный
                            </button>
                       </span>
                    </span>

                    <span className='body-buttons_wraper'>
                        <h4 className='wraper-h4'>
                        Изображения
                        </h4>
                        <span className='wrapper'>
                            <button className={active ? "wraper-btn active" : "wraper-btn no_active"} onClick={() => setActiveBtnAcc(!false)}>
                            Цветные
                            </button>

                            <button className={active ? "wraper-btn active" : "wraper-btn no_active"} onClick={() => setActiveBtnAcc(!false)}>
                            Отключить
                            </button>
                       </span>
                    </span>
                    </div>

                    <span className='wrapper'>
        <BtnOutlined name_of_btn={"Отменить"} icon_for_btn={closeIcon}/> 
        <BtnFilled name_of_btn={"Сохранить"} icon_for_btn={okIcon}/>
        </span>
            </div>
        </div>
    )
}