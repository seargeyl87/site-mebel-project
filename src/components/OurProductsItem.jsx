import '../App.css';
import Rating from './Rating';


function OurProductsItem({itemProducts}) {

  return (
    <div className="our-products-products-item">
        <div className="our-products-products-item-pict"  style={{ backgroundImage:`url(${itemProducts.url})`}}>
         {typeof itemProducts.status === "number" ? <div className={itemProducts.style}>-{itemProducts.status}%</div> : <div className={itemProducts.style}>{itemProducts.status}</div>}
        </div>
        <div className="products-item-name">{itemProducts.name}</div>
        <div className="products-item-description">{itemProducts.description}</div>
        <div className="products-item-pricing-rating">
            <div className="products-item-pricing">
                <div className="products-item-pricing-new">
                    &#36;{itemProducts.new_price}
                </div>
                <div className="products-item-pricing-old">
                    &#36;{itemProducts.old_price}
                </div>
            </div>
              <Rating itemRating={itemProducts.rating}/>
        </div>
    </div>
  )    
}


export default OurProductsItem;