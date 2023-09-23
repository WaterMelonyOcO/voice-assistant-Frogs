// VoiseAssistant.jsx
import React from 'react';
import styles from './VoiseAssistant.module.css';
import CloseButton from '../../images/ModalCloseButton.svg';
import Help from '../../images/IoHelpBuoy.svg'

const VoiseAssistant = ({ active, setActive }) => {
    return (
        <div className={active ? `${styles.modalOverlay} ${styles.active}` : styles.modalOverlay}>
            <div className={styles.voiseContainer}>
                <div className={styles.container_voise_h2}>
                    <h2 className={styles.voise_h2}>Голосовой помощник</h2>
                    <img src={CloseButton} alt="закрыть" onClick={() => setActive(false)} />
                </div>
                <div className={styles.container_voise_function}>
                    <h3>Помощник поможет Вам:</h3>
                    <div className={styles.functions}>
                        <span>Найти товар</span>
                        <span>Перейти на страницу товара</span>
                        <span>Добавить товар в избранное</span>
                        <span>Заказать товар</span>
                    </div>
                    <div className={styles.voise_button_container}>
                        <p>Нажмите на кнопку ниже для диктовки запроса:</p>
                        
                            <button className={styles.ellipse}>
                                <img src={Help} alt="Задать вопрос"/>
                            </button>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VoiseAssistant;
