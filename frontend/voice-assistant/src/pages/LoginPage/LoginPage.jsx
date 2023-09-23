import { Link } from 'react-router-dom';
import './style.css';
import prof from '../../images/profilw.png';
import { useTranslation } from "react-i18next"; 

export default function LoginPage() {

    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };
    return(

        
        //action="" method='post'
        <form className="form">
            <span className='form-wrapper'>
                <label for="login" className='form-label'>{t("form-label1")}</label>
                <input type="text" name="login" id="login" placeholder={t("form-placehold1")} className='form-input'/>
            </span>
            
        <span className='form-wrapper'>
            <label for="password" className='form-label'>{t("form-label2")}</label>
                <input type="password" name="password" maxlength="8" id="password" placeholder={t("form-placehold1")}  className='form-input'/>
        </span>

        
            <span className='btn_with_icon'>
            <Link to="/main">
                <input type='submit' value={t("value2")}  name="submit" className='form-btn'/>
                <img src={prof} alt="" className='icon'/>
                </Link>
            </span>
            
            
        </form>
    )
}