import '../App.css';
import ListHead from "./ListHead";

function Menu() {
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
          <div className="list-fern-item"><p>All</p></div>
          <div className="list-fern-item"><p>New Arrivals</p></div>
          <div className="list-fern-item"><p>Hot Sale</p></div>
          <div className="list-fern-item"><p>Furniture</p></div>
          <div className="list-fern-item"><p>Amrature</p></div>
          <div className="list-fern-item"><p>Tabble</p></div>
          <div className="list-fern-item"><p>Chair</p></div>
          <div className="list-fern-item"><p>Sofa</p></div>
          <div className="list-fern-item"><p>Mirrors</p></div>
          <div className="list-fern-item"><p>Stools</p></div>
          <div className="list-fern-item"><p>Benches</p></div>
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
                <p>Get 50% off all products</p>
                <button>SHOP NOW</button>
            </div>
            <div className="head-img-item2">
               <img src="../../chair-head.png"/>
            </div>
           
            <div className="head-img-item3">
                <div className="head-img-chair-price">
                   <img src="../../chair-head-item1.png"/>
                   <span>$120</span>
                   <p>Office Desk Chair</p>
                </div>
                <div className="head-img-chair-price">
                   <img src="../../chair-head-item2.png"/>
                   <span>$120</span>
                   <p>Office Desk Chair</p>
                </div>
                <div className="head-img-chair-price">
                   <img src="../../chair-head-item3.png"/>
                   <span>$120</span>
                   <p>Office Desk Chair</p>
                </div>
            </div>



          </div>
     
      </div>
        </div>
      </div>
    );
  }
  
  export default Menu;
  