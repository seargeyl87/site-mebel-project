import '../App.css';
import {Link} from 'react-router-dom';
import PostService from './PostService';
import {useState, useContext} from 'react';
import Context from "./Context";

function MenuListFern({item}) {
    let {theme, setTheme} = useContext(Context);
    

    function func() {
         setTheme((theme)=> !theme)
        console.log(theme)
    }

    return (
        <div className="list-fern-item" onClick={func}>
            <Link to={item.link}> <p>{item.name}</p></Link>
        </div>
    )
}

export default MenuListFern;