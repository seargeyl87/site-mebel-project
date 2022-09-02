import '../App.css';
import {useState} from 'react';

function Rating({itemRating}) {
  let [state, setState] = useState([1, 2, 3, 4, 5])

    return (
    <div className="rating">
       {state.map((item, index) => 
       <div className={item <= itemRating ? "products-item-rating-green" : "products-item-rating"} key={index}></div>)}
    </div>
    )
 }

export default Rating;