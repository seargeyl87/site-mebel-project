import '../App.css';


function SpecialOffer() {
    return (
      <div className="special-offer">
            <div className="special-offer-head">
                <h2>SPECIAL OFFER</h2>
            </div>

            <div className="special-offer-products">
                 <div className="special-offer-products-living-room">
                       <div className="special-offer-products-living-room-into" style={{ backgroundImage:`url("../../living-room.svg")`}}>
                            <div  className="discount">
                                <div className="discount-right">40% off</div>
                            </div>
                                
                            <div className="special-offer-products-living-room-into-info">
                                    <div className="heading">Living Room Furniture</div>
                                    <div className="description">You don't have a chair. Are you ready for growth? Shop with us 40% discount!</div>
                                    <div className="price-button">
                                                <div className="price-old-new">
                                                          <div className="price-new">
                                                              &#36;150
                                                          </div>
                                                          <div className="price-old">
                                                              &#36;250
                                                          </div>
                                                </div>
                                                <div className="button">
                                                      <button>shop now</button>
                                                </div>
                                    </div>
                                    <div className="timer">
                                          <div>
                                              <div className="round">
                                                  <div className="count">10</div>
                                                  <div className="unit">days</div>
                                             </div>
                                          </div>
                                          <div>
                                              <div className="round">
                                                  <div className="count">15</div>
                                                  <div className="unit">hrs</div>
                                              </div>
                                          </div>
                                          <div>
                                              <div className="round">
                                                  <div className="count">30</div>
                                                  <div className="unit">min</div>
                                              </div>
                                          </div>
                                          <div>
                                              <div className="round">
                                                  <div className="count">22</div>
                                                  <div className="unit">secs</div>
                                              </div>
                                          </div>
                                    </div>
                            </div>            
                          </div>
                      </div>



                 <div className="special-offer-products-modern-chair">
                       <div className="special-offer-products-modern-chair-into" style={{ backgroundImage:`url("../../modern-chair.svg")`}}>
                       <div  className="discount">
                                <div className="discount-right">50% off</div>
                            </div>
                                
                            <div className="special-offer-products-modern-chair-into-info">
                                    <div className="heading">Modern chair</div>
                                    <div className="description">Hot chairs of the modern era are now available in our stock.</div>
                                    <div className="price-button">
                                                <div className="price-old-new">
                                                          <div className="price-new">
                                                              &#36;75
                                                          </div>
                                                          <div className="price-old">
                                                              &#36;150
                                                          </div>
                                                </div>
                                                <div className="button">
                                                      <button>shop now</button>
                                                </div>
                                    </div>
                                    <div className="timer">
                                        <div>
                                              <div className="round">
                                                  <div className="count">10</div>
                                                  <div className="unit">days</div>
                                             </div>
                                         </div>
                                         <div>
                                              <div className="round">
                                                  <div className="count">15</div>
                                                  <div className="unit">hrs</div>
                                              </div>
                                         </div>
                                         <div>
                                              <div className="round">
                                                  <div className="count">30</div>
                                                  <div className="unit">min</div>
                                              </div>
                                          </div>
                                          <div>
                                              <div className="round">
                                                  <div className="count">22</div>
                                                  <div className="unit">secs</div>
                                              </div>
                                          </div>
                                    </div>
                            </div>            
                       </div>
                 </div>
            </div>
      </div>
    );
  }
  
  export default SpecialOffer;
  