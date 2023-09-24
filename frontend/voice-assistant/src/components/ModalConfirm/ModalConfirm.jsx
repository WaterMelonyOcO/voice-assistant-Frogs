import './style.css';
import closeIcon from '../../images/close2.png';
import okIcon from '../../images/success.png';
import { useTranslation } from "react-i18next";

export default function ModalConfirm({active, setActive}) {


    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };
    return(<>
    <div className={active ? "modal active" : "modal"}>
            <div className="modal_content" onClick={e => e.stopPropagation()}>
            <div className='modal_header'>
                <h2>{t("header9")}</h2>
                    <button onClick={() => setActive(false)} className='header-close_btn'> 
                        <img src={closeIcon} alt=""/>
                    </button>
            </div>

                    <div className='modal_body'>
                        <p className='body-p'>
                        {t("confirm_p")}
                        </p>
                    </div>

                    <span className='wrapper'>

                    {/* onClick={() => setActive(false)} */}
        <button className='btn-outlined' >
            <img src={closeIcon} alt="иконка для кнопки"/>
            {t("confirm_action1")}
        </button>

        {/* onClick={() => setActive(false)} */}
        <button className='btn-filled'>
            <img src={okIcon} alt="иконка для кнопки"/>
            {t("confirm_action2")}
        </button>
        </span>
            </div>
        </div>
    </>)
}