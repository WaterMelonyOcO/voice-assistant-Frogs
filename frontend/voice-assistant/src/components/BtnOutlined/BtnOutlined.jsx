import './style.css';

export default function BtnOutlined({name_of_btn, icon_for_btn}) {
    return (
        <button className='btn-outlined'>
            <img src={icon_for_btn} alt="иконка для кнопки"/>
            {name_of_btn}
        </button>
    )
}