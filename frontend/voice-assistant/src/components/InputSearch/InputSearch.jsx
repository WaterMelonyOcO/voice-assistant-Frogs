import searchIcon from "../../images/search.svg";
import "./style.css";

import { useTranslation } from "react-i18next";

export default function InputSearch() {

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };
    return(
        <div className="input-with-icon">
        <span className='input-icon'>
            <img src={searchIcon} alt={t("alt_search")}/>
        </span>
        <input type='serach' name="search-input" placeholder={t('placeholder')}className='search_input'></input>
    </div>
    )
}