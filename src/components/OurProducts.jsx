import '../App.css';
import {useState, useEffect} from 'react';
import OurProductsItem from './OurProductsItem';


function OurProducts() {
let [listOurProducts, setListOurProducts] = useState([]);

let arr = [23, 45, 23, 44, 34];

arr.sort((a, b) => {
  if(a>b) {
    return 1
  } else return -1
})

console.log(arr)

async function getOurProducts() {
    let response = await fetch('ourProducts.json?id=1')
          .then(response => response.json())
          // .then(result2 => result2.slice(0, 8))
          .then(result => setListOurProducts(result))
          .catch(error => console.log(error))
        }
  useEffect(() => {
           getOurProducts();
    }, [])

    return (
      <div className="our-products">
                <div className="our-products-head">
                       <h2>OUR PRODUCTS</h2>
                </div>
                  <div className="our-products-filter">
                      <a href="" className="our-products-filter-item select">All Products</a>
                      <a href="" className="our-products-filter-item">Best Sellers</a>
                      <a href="" className="our-products-filter-item">New Arrivals</a>
                      <a href="" className="our-products-filter-item">Todays Deals</a>
              </div>
              <div className="our-products-products">
                  {listOurProducts.map((item, index) =>
                      <OurProductsItem itemProducts={item} key={index}/>
                  )}
          </div>   
         <div className="pagination">
           <button>Next page</button>
         </div>
      </div>
    );
  }
  
  export default OurProducts;
  