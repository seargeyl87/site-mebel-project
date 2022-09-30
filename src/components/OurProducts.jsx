import '../App.css';
import {useState, useEffect} from 'react';
import PostService from './PostService';
import {useParams} from "react-router-dom";
import Products from './Products';


function OurProducts() {
let [listProducts, setListOurProducts] = useState([]);
let {id} = useParams()
  async function getData() {
    let response = await PostService.getOurProduct(id);
     setListOurProducts(response)    
        }

  useEffect(() => {
           getData();
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
            <Products listProducts={listProducts}
                      id={id}/> 
         <div className="pagination">
           <button>Next page</button>
         </div>
      </div>
    );
  }
  
  export default OurProducts;
  