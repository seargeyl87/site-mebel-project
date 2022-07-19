import '../App.css';


function Benefits() {
    return (
      <div className="benefits">
          <div className="benefits-item">
              <img src="../../benefits-item1.png"/>
              <div className="benefits-item-description">
                   <span>Free Shipping</span>
                   <p>Orders over $100</p>
              </div>
          </div>

          <div className="benefits-item">
              <img src="../../benefits-item2.png"/>
              <div className="benefits-item-description">
                   <span>Smart Gift Card</span>
                   <p>Buy $1000 to get card</p>
              </div>
          </div>
          <div className="benefits-item">
              <img src="../../benefits-item3.png"/>
              <div className="benefits-item-description">
                  <span>Quick Payment</span>
                   <p>100% secure payment</p>
              </div>
          </div>
          <div className="benefits-item">
              <img src="../../benefits-item4.png"/>
              <div className="benefits-item-description">
                  <span>24/7 Support</span>
                   <p>Quick support</p>
              </div>
          </div>
      </div>
    );
  }
  
  export default Benefits;
  