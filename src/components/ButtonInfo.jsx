import '../App.css';


function ButtonInfo() {
    return (
      <div className="button-info">
          <div className="furniking">
              <div className="furniking-icon-heading">
                  <div className="icon" style={{ backgroundImage:`url("../../icon1.svg")`}}></div>
                  <div className="heading">Furniking</div>
              </div>
              <div className="description">Funking is the a popular Ecommerce site. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
              <div className="icons-networks">
                  <div className="icons-facebook" style={{ backgroundImage:`url("../../facebook.svg")`}}></div>
                  <div className="icons-twitter" style={{ backgroundImage:`url("../../twitter.svg")`}}></div>
                  <div className="icons-insta" style={{ backgroundImage:`url("../../instagram.svg")`}}></div>
                  <div className="icons-pinterset" style={{ backgroundImage:`url("../../pinterset.svg")`}}></div>
              </div>
          </div>
          <div className="help">
                   <div className="help-heading">Help</div>
                   <div className="help-list">Privacy Policy</div>
                   <div className="help-list">Shipping&Delivery</div>
                   <div className="help-list">Refund Policy</div>
                   <div className="help-list">Track Your Order</div>
              </div>
              <div className="store">
                  <div className="store-heading">Store</div>
                  <div className="store-list">Furniture</div>
                  <div className="store-list">Tabble</div>
                  <div className="store-list">Sofa</div>
                  <div className="store-list">Other</div>
              </div>
              <div className="supports">
                  <div className="supports-heading">Supports</div>
                  <div className="supports-list">Feedbcak</div>
                  <div className="supports-list">Contact us</div>
                  <div className="supports-list">Download app</div>
                  <div className="supports-list">Terms conditins</div>
           </div>
      </div>
    );
  }
  
  export default ButtonInfo;
  