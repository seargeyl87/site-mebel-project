import '../App.css';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import PostService from './PostService';
import MenuPicts from "./MenuPicts";




function MenuListHead() {

 let [pictMenu, setPictMenu] = useState([]);
 let [changePict, setChangePict] = useState( '../../chair-head-item4.png');

 function func(url) {
    setChangePict(url.target.src)
    console.log(url)
    console.log(url.target.src)
  }
  
   async function getDataPict() {
     let response = await PostService.getPict();
     setPictMenu(response.slice(0, 3))
              }

    useEffect(() => {
          getDataPict();
     }, [])
  

 return   (
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
  )
  

}

export default MenuListHead;