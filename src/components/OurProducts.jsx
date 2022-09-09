import '../App.css';
import {useState, useEffect} from 'react';
import OurProductsItem from './OurProductsItem';
import PostService from './PostService';


function OurProducts() {
let [listOurProducts, setListOurProducts] = useState([]);


  async function getData() {
    let response = await PostService.getOurProduct();
     setListOurProducts(response)    
        }

  // useEffect(() => {
  //          getData();
  //   }, [])

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
  