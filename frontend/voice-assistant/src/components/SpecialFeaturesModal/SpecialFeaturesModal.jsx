import './style.css';
import closeIcon from '../../images/close2.png';
import okIcon from '../../images/success.png';
import BtnOutlined from '../BtnOutlined/BtnOutlined';
import BtnFilled from '../BtnFilled/BtnFilled';
import { useState } from 'react';
import { useEffect } from 'react';


export default function SpecialFeaturesModal({active, setActive}) {
    const [activeBtnAcc, setActiveBtnAcc] = useState(false);

    /* кнопка шрифта на 100% */
    const [textHighlighted0, setTextHighlighted0] = useState(false);

    const handleButtonClicked0 = () => {
      if (!textHighlighted) {
        const allTextElements = document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6, li, td, a');
        allTextElements.forEach(element => {
          element.style.setProperty('--base-font-size', '16px'); // Здесь меняем размер шрифта на 16px
        });
      } else {
        const allTextElements = document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6, li, td, a');
        allTextElements.forEach(element => {
          element.style.color = 'inherit';
          element.style.removeProperty('--base-font-size');
        });
      }
  
      setTextHighlighted0(prevState => !prevState);
    };


   /* кнопка увеличения шрифта на 150% */
const [textHighlighted, setTextHighlighted] = useState(false);

  const handleButtonClicked = () => {
    if (!textHighlighted) {
      const allTextElements = document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6, li, td, a');
      allTextElements.forEach(element => {
        element.style.setProperty('--base-font-size', '20px'); // Здесь меняем размер шрифта на 20px
      });
    } else {
      const allTextElements = document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6, li, td, a');
      allTextElements.forEach(element => {
        element.style.color = 'inherit';
        element.style.removeProperty('--base-font-size');
      });
    }

    setTextHighlighted(prevState => !prevState);
  };


    /* кнопка увеличения шрифта на 200% */
const [textHighlighted1, setTextHighlighted1] = useState(false);

const handleButtonClicked1 = () => {
  if (!textHighlighted1) {
    const allTextElements = document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6, li, td, a');
    allTextElements.forEach(element => {
      element.style.setProperty('--base-font-size', '24px'); // Здесь меняем размер шрифта на 24px
    });
  } else {
    const allTextElements = document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6, li, td, a');
    allTextElements.forEach(element => {
      element.style.color = 'inherit';
      element.style.removeProperty('--base-font-size');
    });
  }

  setTextHighlighted1(prevState => !prevState);
};



  /* кнопка расстояния между буквами 1*/
  const increaseLetterSpacing = () => {
    document.documentElement.style.setProperty('--letter-spacing', '2px');
  };



    /* кнопка расстояния между буквами 2*/
    const increaseLetterSpacing2 = () => {
        document.documentElement.style.setProperty('--letter-spacing', '4px');
      };
    
/* кнопка увеличения контрастности */
const increaseContrast = () => {
    document.documentElement.style.setProperty('--contrast', '1.5');
  };

  /* кнопка уменьшения контрастности */
const deleteContrast = () => {
    document.documentElement.style.setProperty('--contrast', '1');
  };

/* кнопка отключения картинок */


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
                            <button className={textHighlighted ? "wraper-btn active" : "wraper-btn no_active" } onClick={handleButtonClicked0}>
                            100%
                            </button>

                            <button className={textHighlighted ? "wraper-btn active" : "wraper-btn no_active" } onClick={handleButtonClicked}>
                            150%
                            </button>
                            <button className={textHighlighted ? "wraper-btn active" : "wraper-btn no_active" } onClick={handleButtonClicked1}>
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

                            <button className="wraper-btn" onClick={increaseLetterSpacing}>
                            Большое
                            </button>
                            <button className="wraper-btn" onClick={increaseLetterSpacing2}>
                            Очень большое
                            </button>
                        </span>
                    </span>

                    <span className='body-buttons_wraper'>
                        <h4 className='wraper-h4'>
                        Цвет шрифта и фона
                        </h4>
                        <span className='wrapper'>
                            <button className="wraper-btn" onClick={deleteContrast}>
                            Стандартный
                            </button>
                            <button className="wraper-btn" onClick={increaseContrast}>
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

                            <button className="wraper-btn" >
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