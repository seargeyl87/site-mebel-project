import '../App.css';
import {useState} from 'react';


function Comments() {
let [state, setState] = useState(0);

let prevSlider = () => {
  if(state >= 0) {
    setState(-1632);
  } else {
    setState(state + 816);
  }
}

  let nextSlider = () => {
    if(state <= -1632) {
      setState(0)
    } else {
      setState(state - 816);
    }
  }

    return (
      <div className="comments">
                <div className="comments-head" id="head11">
                       <h2>What Our Customer Says</h2>
                </div>           
                <div className="comments-block">
                    <button  onClick={prevSlider} className="arrow-left" style={{ backgroundImage:`url("../../arrow-left.svg")`}}></button>  
                    <div className="container-slide">
                        <div className="slider-comments-block" style={{ left: state + 'px'}}>
                              <div className="comments-block-item" id="slide1">
                                <div className="comments-pict" style={{ backgroundImage:`url("../../img/angelina.svg")`}}></div>
                                <div className="comment">I like Furniking.com and as compared to other company it's polices and customers support is very good easy to reach., also many time they unable to delivered. The ultricies are pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel facilisist amet.</div>
                                <div className="comment-name">Angelina Joly</div>
                                <div className="comment-prof">Co-founder</div>
                              </div>
                              <div className="comments-block-item" id="slide2">
                                <div className="comments-pict" style={{ backgroundImage:`url("../../img/angelina.svg")`}}></div>
                                <div className="comment"> Мне нравится Furniking.com, и по сравнению с другими компаниями, его политика и поддержка клиентов очень хорошо доступны, и часто они не могут доставить. Ультрисы беременны, а квис приостановлен. Risus commodo viverra maecenas accumsan lacus vel facilisist amet.</div>
                                <div className="comment-name">Angelina Joly2</div>
                                <div className="comment-prof">Co-founder2</div>
                              </div>
                              <div className="comments-block-item" id="slide3">
                                <div className="comments-pict" style={{ backgroundImage:`url("../../img/angelina.svg")`}}></div>
                                <div className="comment">Мені подобається Furniking.com, і, порівняно з іншими компаніями, її політика та служба підтримки клієнтів дуже хороша, легко доступна. Крім того, часто вони не можуть доставити. Ultricies вагітні, а quis призупинено. Risus commodo viverra maecenas accumsan lacus vel facilisist amet.</div>
                                <div className="comment-name">Angelina Joly3</div>
                                <div className="comment-prof">Co-founder3</div>
                              </div>
                        </div>
                    </div>
                    <button className="arrow-right"  onClick={nextSlider}  style={{ backgroundImage:`url("../../arrow-right.svg")`}}></button>
                </div>
          </div>
         );
        }
    

  
  export default Comments;
  