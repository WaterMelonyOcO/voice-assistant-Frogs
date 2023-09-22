import { Link } from 'react-router-dom';
import './style.css';

export default function LoginPage() {
    return(
        //action="" method='post'
        <form className="form">
            <span className='form-wrapper'>
                <label for="login" className='form-label'>Телефон или email</label>
                <input type="text" name="login" id="login" placeholder='Введите телефон или email' className='form-input'/>
            </span>
            
        <span className='form-wrapper'>
            <label for="password" className='form-label'>Пароль</label>
                <input type="password" name="password" maxlength="8" id="password" placeholder='Введите пароль' className='form-input'/>
        </span>

        <Link to="/main"><input type='submit' value="Войти" name="submit" className='form-btn'></input></Link>
            
        </form>
    )
}