import './style.css';
import closeIcon from '../../images/close2.png';
import okIcon from '../../images/success.png';

export default function ModalConfirm({active, setActive}) {

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

                    {/* onClick={() => setActive(false)} */}
        <button className='btn-outlined' >
            <img src={closeIcon} alt="иконка для кнопки"/>
            Отмена
        </button>

        {/* onClick={() => setActive(false)} */}
        <button className='btn-filled'>
            <img src={okIcon} alt="иконка для кнопки"/>
            Да, оплатить
        </button>
        </span>
            </div>
        </div>
    </>)
}