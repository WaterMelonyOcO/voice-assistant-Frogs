import './style.css';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export default function Footer() {

    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };
    return(<>
    <footer className='footer'>
        <h4 className='footer_h4'>
        &#169; НашМагазин.ru, 2023
        </h4>
        <Link to="/sitemap" role="button" className='footer_btn' title={t("footer_link_title")}>
        {t("footer_link")}
        </Link>
    </footer>
    </>)
}