import './style.css';
import closeIcon from '../../images/close2.png';
import okIcon from '../../images/success.png';
import BtnOutlined from '../BtnOutlined/BtnOutlined';
import BtnFilled from '../BtnFilled/BtnFilled';
import { useState } from 'react';
import { useEffect } from 'react';

export default function SpecialFeaturesModal({active, setActive}) {
    const [activeBtnAcc, setActiveBtnAcc] = useState(false);

    /* for contrast */
    const [contrast, setContrast] = useState(false);
    useEffect(() => {
        if (contrast) {
          document.body.classList.add('high-contrast');
        } else {
          document.body.classList.remove('high-contrast');
        }
      }, [contrast]);
      const handleContrastToggle = () => {
        setContrast(!contrast);
      };
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
                            <button className="wraper-btn">
                            Включить
                            </button>

                            <button className="wraper-btn">
                            Отключить
                            </button>
                        </span>
                    </span>

                    <span className='body-buttons_wraper'>
                        <h4 className='wraper-h4'>
                        Размер шрифта
                        </h4>
                        <span className='wrapper'>
                            <button className="wraper-btn">
                            100%
                            </button>

                            <button className="wraper-btn">
                            150%
                            </button>
                            <button className="wraper-btn">
                            200%
                            </button>
                        </span>
                    </span>

                    <span className='body-buttons_wraper'>
                        <h4 className='wraper-h4'>
                        Расстояние между буквами
                        </h4>
                        <span className='wrapper'>
                            <button className="wraper-btn">
                            Рекомендуемое
                            </button>

                            <button className="wraper-btn">
                            Большое
                            </button>
                            <button className="wraper-btn">
                            Очень большое
                            </button>
                        </span>
                    </span>

                    <span className='body-buttons_wraper'>
                        <h4 className='wraper-h4'>
                        Цвет шрифта и фона
                        </h4>
                        <span className='wrapper'>
                            <button className="wraper-btn">
                            Стандартный
                            </button>

                            <button className={active ? "wraper-btn active" : "wraper-btn no_active"} onClick={handleContrastToggle}>
                            Контрастный
                            </button>
                       </span>
                    </span>

                    <span className='body-buttons_wraper'>
                        <h4 className='wraper-h4'>
                        Изображения
                        </h4>
                        <span className='wrapper'>
                            <button className="wraper-btn">
                            Цветные
                            </button>

                            <button className="wraper-btn">
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