import '../App.css';
import MenuListFern from "./MenuListFern";
import MenuPicts from "./MenuPicts";
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';




function Menu() {

  let [listMenu, setListMenu] = useState([]);
  let [pictMenu, setPictMenu] = useState([]);

  let [changePict, setChangePict] = useState( '../../chair-head-item4.png');


  function func(url) {
    setChangePict(url.target.src)
    console.log(url.target.src);
    console.log(changePict);

  }
  
  async function getMenu() {
    let response = await fetch('https://apimocha.com/seargeyl87/mebel/list_menu')
          .then(response => response.json())
          .then(result => setListMenu(result))
          .catch(error => console.log(error))
        }

        async function getPict() {
          let response = await fetch('https://apimocha.com/seargeyl87/mebel/pict_menu')
                .then(response => response.json())
                .then(arr => arr.slice(0, 3))
                .then(result => setPictMenu(result))
                .catch(error => console.log(error))
              }

        useEffect(() => {
          getMenu();
        }, [])

        useEffect(() => {
          getPict();
        }, [])

    return (
      <div className="menu">

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
    
        <div className="list-menu-head">
            <div className="list-menu">
              <p>HOME</p>
              <p>SHOP</p>
              <p>BLOG</p>
              <p>ABOUT</p>
              <p>CONTACT US</p>
            </div>
            <div className="list-head">
          <div className="head-img">
            <div className="head-img-item1">
                <span>TOP COLLECTIONS 2022</span>
                <h1>We Serve Your Dream Furniture</h1>
                <div className="discount">Get 50% off all products</div>
                <Link to="chair"><button>SHOW NOW</button></Link>
            </div>
            <div className="head-img-item2">
         
               <img src={changePict}/>
        
               <div className="points">
                  <div className="point" style={{ backgroundImage:`url("../../point.svg")`}}></div>
                  <div className="point" style={{ backgroundImage:`url("../../point.svg")`}}></div>
                  <div className="point-choose" style={{ backgroundImage:`url("../../point-choose.svg")`}}></div>
                  <div className="point" style={{ backgroundImage:`url("../../point.svg")`}}></div>
               </div>
            </div>
            <div className="head-img-item3">
            {pictMenu.map((item, index) => 
               < MenuPicts item={item}
                           key={index}
                           func={func}
                           />
            )}
              </div>
          </div>
      </div>
    </div>
  </div>
    );
  }
  
  export default Menu;
  