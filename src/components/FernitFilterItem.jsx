
import '../App.css';
import Rating from './Rating';

function FernitFilterItem({itemFernit}) {
    console.log(itemFernit)
    return (
        <div className="our-products-products-item">
            <div className="our-products-products-item-pict"  style={{ backgroundImage:`url(${itemFernit.url})`}}>
             {typeof itemFernit.status === "number" ? <div className={itemFernit.style}>-{itemFernit.status}%</div> : <div className={itemFernit.style}>{itemFernit.status}</div>}
            </div>
            <div className="products-item-name">{itemFernit.name}</div>
            <div className="products-item-description">{itemFernit.description}</div>
            <div className="products-item-pricing-rating">
                <div className="products-item-pricing">
                    <div className="products-item-pricing-new">
                        &#36;{itemFernit.new_price}
                    </div>
                    <div className="products-item-pricing-old">
                        &#36;{itemFernit.old_price}
                    </div>
                </div>
                  <Rating itemRating={itemFernit.rating}/>
            </div>
        </div>
      )   
 }
 
 export default FernitFilterItem;