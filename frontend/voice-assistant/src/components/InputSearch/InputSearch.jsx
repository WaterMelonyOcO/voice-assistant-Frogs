import searchIcon from "../../images/search.svg";
import "./style.css";

export default function InputSearch() {
    return(
        <div className="input-with-icon">
        <span className='input-icon'>
            <img src={searchIcon} alt="нажмите на это поле для поиска"/>
        </span>
        <input type='serach' name="search-input" placeholder='Поиск по странице' className='search_input'></input>
    </div>
    )
}