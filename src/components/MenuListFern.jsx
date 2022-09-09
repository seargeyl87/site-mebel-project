import '../App.css';
import {Link} from 'react-router-dom';

function MenuListFern({item}) {
    return (
        <div className="list-fern-item">
            <Link to={item.link}> <p>{item.name}</p></Link>
        </div>
    )
}

export default MenuListFern;