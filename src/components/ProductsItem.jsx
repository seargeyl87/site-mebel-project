import '../App.css';
import Rating from './Rating';
import {Link} from 'react-router-dom';
import PostService from './PostService';
import { useState, useContext } from 'react';
import TwoContext from './TwoContext';


function ProductsItem({item}) {

    let {themeRouter, setThemeRouter} = useContext(TwoContext);

    async function getProductId() {
        // let responseSofa = await PostService.getProductId(item.id);
        // let [obj] = responseSofa;
        setThemeRouter(item.id);
        console.log(item.id)
      }

    return ( 

        <div className="products-item" onClick={getProductId}>
           <Link to={`/products/${item.id}`}> <div className="products-item-pict" style={{ backgroundImage:`url(${item.url})`}}> 
             {typeof item.status === "number" ? <div className={item.style}>-{item.status}%</div> : <div className={item.style}>{item.status}</div>}
              <div className="hover">
                   <div className="hover-feature">
                           <div className="hover-feature-casing">
                               <div className="hover-feature-item" style={{ backgroundImage:`url("../../label-heart.svg")`}}></div>
                           </div>
                           <div className="hover-feature-casing">
                               <div className="hover-feature-item" style={{ backgroundImage:`url("../../label-shop.svg")`}}></div>
                           </div>
                           <div className="hover-feature-casing">
                               <div className="hover-feature-item" style={{ backgroundImage:`url("../../label-refresh.svg")`}}></div>
                           </div>
                           <div className="hover-feature-casing">
                               <div className="hover-feature-item" style={{ backgroundImage:`url("../../label-view.svg")`}}></div>
                           </div>
                       </div>
               </div>
        </div></Link>
        <div className="products-item-name">{item.name}</div>
        <div className="products-item-description">{item.description}</div>
         <div className="products-item-pricing-rating">
             <div className="products-item-pricing">
                 <div className="products-item-pricing-new">
                       &#36;{item.new_price}
                 </div>
                 <div className="products-item-pricing-old">
                       &#36;{item.old_price}
                 </div>
             </div>
             <Rating itemRating={item.rating}/>
         </div>
   </div>
    )
}

export default ProductsItem;