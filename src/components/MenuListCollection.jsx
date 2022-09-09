import '../App.css';
import MenuListFern from "./MenuListFern";
import {useState, useEffect} from 'react';
import PostService from './PostService';


function MenuListCollection() {
    let [listMenu, setListMenu] = useState([]);

    async function getDataMenu() {
        let response = await PostService.getMenu();
          setListMenu(response)
            }
      useEffect(() => {
          getDataMenu();
           }, [])

    return (
        <div className="menu__list-fern_all-collection">
          <div className="collection">
              <div className="all-collection">
                <img src="../../collection.svg"/>
                <p>ALL COLLECTIONS</p>
              </div>
          </div>
          <div className="list-fern">
            {listMenu.map((item, index) => 
            <MenuListFern item={item} 
                          key={index}/>
                          )}
          </div>
        </div>
    ) 
}

export default MenuListCollection;
