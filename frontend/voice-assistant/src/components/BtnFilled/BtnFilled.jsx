import './style.css';

export default function BtnFilled({name_of_btn, icon_for_btn}) {
    return (
        <button className='btn-filled'>
            <img src={icon_for_btn} alt=""/>
            {name_of_btn}
        </button>
    )
}