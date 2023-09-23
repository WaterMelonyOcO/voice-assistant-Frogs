import './style.css';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export default function SiteMapPage() {

    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };
    return (<>
    <div className='sitemap_body'>
        <nav className='body_left'>
            <h3 className='body_h3'>{t("header7")}</h3>
                <ul>
            <li>
                <Link to="/appliances" className='body_link'>{t("header2")}</Link>

                    <ul className='body_ul'>
                        <li><a href="/appliances">{t("l1")}</a></li>
                        <li><a href="/appliances">{t("l2")}</a></li>
                        <li><a href="/appliances">{t("l3")}</a></li>
                        <li><a href="/appliances">{t("l4")}</a></li>
                        <li><a href="/appliances">{t("l5")}</a></li>
                        <li><a href="/appliances">{t("l6")}</a></li>
                    </ul>
            </li>
            <li>
                <Link to="/smartphone" className='body_link'>{t("header3")}</Link>

                <ul className='body_ul'>
                        <li><a href="/smartphone">{t("l7")}</a></li>
                        <li><a href="/smartphone">{t("l8")}</a></li>
                        <li><a href="/smartphone">{t("l9")}</a></li>
                        <li><a href="/smartphone">{t("l10")}</a></li>
                        <li><a href="/smartphone">{t("l11")}</a></li>
                        <li><a href="/smartphone">{t("l12")}</a></li>
                    </ul>
            </li>
            <li>
                <Link to="/computers" className='body_link'>{t("header4")}</Link>

                <ul className='body_ul'>
                        <li><a href="/computers">{t("l13")}</a></li>
                        <li><a href="/computers">{t("l14")}</a></li>
                        <li><a href="/computers">{t("l15")}</a></li>
                        <li><a href="/computers">{t("l16")}</a></li>
                        <li><a href="/computers">{t("l17")}</a></li>
                        <li><a href="/computers">{t("l18")}</a></li>
                    </ul>
            </li>
            </ul>

        </nav>

        <nav className='body_right'>
        <h3 className='body_h3'>{t("l22")}</h3>
                <ul >
                    <ul className='body_ul_two'>
                    <li><a href="/">{t("profile")}</a></li>
                    <li><a href="favourites">{t("heart")}</a></li>
                    <li><a href="/cart">{t("cart")}</a></li>
                    <li>{t("l19")}</li>
                    <li><a href="cart/order">{t("l20")}</a></li>
                    <li>{t("l21")}</li>
                    </ul>
                
                </ul>


        </nav>
        
    </div>

</> )
}