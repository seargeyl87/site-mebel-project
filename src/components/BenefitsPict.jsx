import { useTransition } from 'react';
import '../App.css';


function BenefitsPict() {
    return (
      <div className="benefitsPict">
          <div className="benefits-pict-item1">
          <div className="pict1" style={{ backgroundImage:`url("../../benefits-pict1.png")`}}>          
               <div className="txt">
                  <h4>Modern Furniture Collections</h4>
                  <span>Starting from $500</span>
                  <div className="read-more-arrow">
                       <div className="read-more">Read more</div>
                       <div className="arrow" style={{ backgroundImage:`url("../../arrow.svg")` , backgroundSize: 'fill'}}></div>
                  </div>
               </div>
             </div>
          </div>
          <div className="benefits-pict-item2">
              <div className="pict2" style={{ backgroundImage:`url("../../benefits-pict2.png")` , backgroundSize: 'fill'}}>          
                    <div className="txt">
                      <h4>Geometric Bookcase</h4>
                      <span>Up to 20% discount</span>
                      <div className="read-more-arrow">
                       <div className="read-more">Read more</div>
                       <div className="arrow" style={{ backgroundImage:`url("../../arrow.svg")` , backgroundSize: 'fill'}}></div>
                  </div>
                    </div>
              </div>
                 
              <div className="pict2"  style={{ backgroundImage:`url("../../benefits-pict3.png")`, backgroundSize: 'fill' }}>   
                    <div className="txt">
                        <h4>Minimal Sofa collections</h4>
                        <span>Sale upto 40% discount</span>
                        <div className="read-more-arrow">
                             <div className="read-more">Read more</div>
                            <div className="arrow" style={{ backgroundImage:`url("../../arrow.svg")` , backgroundSize: 'fill'}}></div>
                       </div>
                    </div>
              </div>
          </div>
      </div>
    );
  }
  
  export default BenefitsPict;
  
