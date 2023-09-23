import './style.css';
import closeIcon from '../../images/close2.png';
import okIcon from '../../images/success.png';
import BtnOutlined from '../BtnOutlined/BtnOutlined';
import BtnFilled from '../BtnFilled/BtnFilled';
import { useState } from 'react';

export default function ModalConfirm({active, setActive}) {

    const [activeBtnAcc, setActiveBtnAcc] = useState(false);
    return(<>
    <div className={active ? "modal active" : "modal"}>
            <div className="modal_content" onClick={e => e.stopPropagation()}>
            <div className='modal_header'>
                <h2>Подтверждение действия</h2>
                    <button onClick={() => setActive(false)} className='header-close_btn'> 
                        <img src={closeIcon} alt=""/>
                    </button>
            </div>

                    <div className='modal_body'>
                        <p className='body-p'>
                        Вы уверены, что хотите оплатить покупку?
                        </p>
                    </div>

                    <span className='wrapper'>
        <BtnOutlined name_of_btn={"Отмена"} icon_for_btn={closeIcon}/> 
        <BtnFilled name_of_btn={"Да, оплатить"} icon_for_btn={okIcon}/>
        </span>
            </div>
        </div>
    </>)
}