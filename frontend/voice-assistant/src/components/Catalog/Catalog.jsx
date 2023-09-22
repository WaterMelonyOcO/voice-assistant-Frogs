import './style.css'
import { Link } from 'react-router-dom';
import oneIcon from '../../images/oneIcon.png';
import twoIcon from '../../images/twoIcon.png';
import threeIcon from '../../images/threeIcon.png';

export default function Catalog() {
    return (
        <div className='sidebar'>
            <h3 className='sidebar__h3'>Каталог</h3>
            <Link to="" className='sidebar_link'>
                <img src={oneIcon} alt=""/>
                Бытовая техника

            </Link>
            <Link to="" className='sidebar_link'>
            <img src={twoIcon} alt=""/>
            Смартфоны и фототехника
                
            </Link>
            <Link to="" className='sidebar_link'>
            <img src={threeIcon} alt=""/>
            ПК, ноутбуки, переферия
                
            </Link>
        </div>

    )
}