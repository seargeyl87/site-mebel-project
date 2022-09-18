import '../App.css';
import Rating from './Rating';
import {Link} from 'react-router-dom';


function ProductsItem({item}) {


    function func() {
        console.log(item)
      }

    return ( 
        <div className="products-item" onClick={func}>
           <Link to="/chair"> <div className="products-item-pict" style={{ backgroundImage:`url(${item.url})`}}>
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