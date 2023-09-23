import './style.css';

export default function BtnOutlined({name_of_btn, icon_for_btn, action}) {
    return (
        <button className='btn-outlined' onClick={action}>
            <img src={icon_for_btn} alt=""/>
            {name_of_btn}
        </button>
    )
}