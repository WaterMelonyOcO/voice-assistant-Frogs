import './style.css';
import closeIcon from '../../images/close2.png';
import okIcon from '../../images/success.png';
import BtnOutlined from '../BtnOutlined/BtnOutlined';
import BtnFilled from '../BtnFilled/BtnFilled';
import { useState } from 'react';
import { useEffect } from 'react';
import { useImageToggle } from '../ImageToggleContext/ImageToggleContext';
import { useTranslation } from "react-i18next";

export default function SpecialFeaturesModal({active, setActive}) {

    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };

    const [activeBtnAcc, setActiveBtnAcc] = useState(false);

    const [activeBtn1, setActiveBtn1] = useState(false);
    const [activeBtn2, setActiveBtn2] = useState(false);
    const [activeBtn3, setActiveBtn3] = useState(false);

    const [activeBtn4, setActiveBtn4] = useState(false);
    const [activeBtn5, setActiveBtn5] = useState(false);
    const [activeBtn6, setActiveBtn6] = useState(false);

    const [activeBtn7, setActiveBtn7] = useState(false);
    const [activeBtn8, setActiveBtn8] = useState(false);

    const [activeBtn9, setActiveBtn9] = useState(false);
    const [activeBtn10, setActiveBtn10] = useState(false);

/* кнопка расстояния между буквами 0*/
const deleteLetterSpacing = () => {
    document.documentElement.style.setProperty('--letter-spacing', 'normal');
    setActiveBtn4(true);
    setActiveBtn5(false);
    setActiveBtn6(false);
  };

  /* кнопка расстояния между буквами 1*/
  const increaseLetterSpacing = () => {
    document.documentElement.style.setProperty('--letter-spacing', '2px');
    setActiveBtn4(false);
    setActiveBtn5(true);
    setActiveBtn6(false);
  };

    /* кнопка расстояния между буквами 2*/
    const increaseLetterSpacing2 = () => {
        document.documentElement.style.setProperty('--letter-spacing', '4px');
        setActiveBtn4(false);
    setActiveBtn5(false);
    setActiveBtn6(true);
      };

  /* шрифт на 100% */
  const getBtnSize = () => {
    document.documentElement.style.setProperty('--base-font-size', '16px');
    setActiveBtn1(true);
    setActiveBtn2(false);
    setActiveBtn3(false);
  };

  /* шрифт на 150% */
  const getBtnSize1 = () => {
    document.documentElement.style.setProperty('--base-font-size', '20px');
    setActiveBtn1(false);
  setActiveBtn2(true);
  setActiveBtn3(false);
  };

   /* шрифт на 200% */
   const getBtnSize2 = () => {
    document.documentElement.style.setProperty('--base-font-size', '24px');
    setActiveBtn1(false);
    setActiveBtn2(false);
    setActiveBtn3(true);
  };

    
/* кнопка увеличения контрастности */
const increaseContrast = () => {
    document.documentElement.style.setProperty('--contrast', '1.5');
    setActiveBtn7(false);
    setActiveBtn8(true);
  };

  /* кнопка уменьшения контрастности */
const deleteContrast = () => {
    document.documentElement.style.setProperty('--contrast', '1');
    setActiveBtn7(true);
    setActiveBtn8(false);
  };

/* кнопка отключения картинок */

    const { toggleImages } = useImageToggle();

    const { resetImages } = useImageToggle();


    return(
        <div className={active ? "modal active" : "modal"}>
            <div className="modal_content" onClick={e => e.stopPropagation()}>
            <div className='modal_header'>
                <h2>{t("header8")}</h2>
                    <button onClick={() => setActive(false)} className='header-close_btn'> 
                        <img src={closeIcon} alt=""/>
                    </button>
            </div>

                    <div className='modal_body'>
                        <p className='body-p'>
                        {t("special_p")}
                        </p>

                    {/* <span className='body-buttons_wraper'>
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
                    </span> */}

                    <span className='body-buttons_wraper'>
                        <h4 className='wraper-h4'>
                        {t("special_header1")}
                        </h4>
                        <span className='wrapper'>
                        <button className={ activeBtn1 ? "wraper-btn active" : "wraper-btn no_active"} onClick={getBtnSize}>
                            100%
                        </button>

                        <button className={ activeBtn2 ? "wraper-btn active" : "wraper-btn no_active"} onClick={getBtnSize1}>
                            150%
                        </button>
                        <button className={ activeBtn3 ? "wraper-btn active" : "wraper-btn no_active"} onClick={getBtnSize2}>
                            200%
                        </button>
                        </span>
                    </span>

                    <span className='body-buttons_wraper'>
                        <h4 className='wraper-h4'>
                        {t("special_header2")}
                        </h4>
                        <span className='wrapper'>
                            <button className={ activeBtn4 ? "wraper-btn active" : "wraper-btn no_active"} onClick={deleteLetterSpacing}>
                            {t("special_desc1")}
                            </button>

                            <button className={ activeBtn5 ? "wraper-btn active" : "wraper-btn no_active"} onClick={increaseLetterSpacing}>
                            {t("special_desc2")}
                            </button>
                            <button className={ activeBtn6 ? "wraper-btn active" : "wraper-btn no_active"} onClick={increaseLetterSpacing2}>
                            {t("special_desc3")}
                            </button>
                        </span>
                    </span>

                    <span className='body-buttons_wraper'>
                        <h4 className='wraper-h4'>
                        {t("special_header3")}
                        </h4>
                        <span className='wrapper'>
                            <button className={ activeBtn7 ? "wraper-btn active" : "wraper-btn no_active"} onClick={deleteContrast}>
                            {t("special_desc4")}
                            </button>
                            <button className={ activeBtn8 ? "wraper-btn active" : "wraper-btn no_active"} onClick={increaseContrast}>
                            {t("special_desc5")}
                            </button>
                       </span>
                    </span>

                    <span className='body-buttons_wraper'>
                        <h4 className='wraper-h4'>
                        {t("special_header4")}
                        </h4>
                        <span className='wrapper'>
                            <button className={ activeBtn9 ? "wraper-btn active" : "wraper-btn no_active"} onClick={() => { resetImages(); setActiveBtn9(true); setActiveBtn10(false); }}>
                            {t("special_desc6")}
                            </button>

                            <button className={ activeBtn10 ? "wraper-btn active" : "wraper-btn no_active"} onClick={() => { toggleImages(); setActiveBtn9(false); setActiveBtn10(true); }}>
                            {t("special_desc7")}
                            </button>
                       </span>
                    </span>
                    </div>

                    <span className='wrapper'>
        {/* <BtnOutlined name_of_btn={"Отменить"} icon_for_btn={closeIcon}/> 
        <BtnFilled name_of_btn={"Сохранить"} icon_for_btn={okIcon}/> */}
        </span>
            </div>
        </div>
    )
}