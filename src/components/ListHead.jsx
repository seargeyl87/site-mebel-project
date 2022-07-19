import '../App.css';


function ListHead() {
    return (
      <div className="list-head">
          <div className="list-fern">
          <div className="list-fern-item">All</div>
          <div className="list-fern-item">New Arrivals</div>
          <div className="list-fern-item">Hot Sale</div>
          <div className="list-fern-item">Furniture</div>
          <div className="list-fern-item">Amrature</div>
          <div className="list-fern-item">Tabble</div>
          <div className="list-fern-item">Chair</div>
          <div className="list-fern-item">Sofa</div>
          <div className="list-fern-item">Mirrors</div>
          <div className="list-fern-item">Stools</div>
          <div className="list-fern-item">Benches</div>
          </div>

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
    );
  }
  
  export default ListHead;
  