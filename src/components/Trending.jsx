import '../App.css';
import {useState, useEffect} from 'react';
import ProductsItem from './ProductsItem';
import PostService from './PostService';
import Products from './Products';
import {useParams} from "react-router-dom";

function Trending() {
    let [listProducts, setlistProducts] = useState([]);
    let {id} = useParams()

   
    async function getData() {
       let posts = await  PostService.getAllTrend()
       setlistProducts(posts)
            }

      useEffect(() => {
       getData()
        }, [])

 

    return (
      <div className="trending">
          <div className="trending-head"><h2>TRENDING</h2></div>
          <div className="trending-filter">
             <a href="" className="trending-filter-item trending-filter-selected">Top Products</a>
             <a href="" className="trending-filter-item">New Arrivals</a>
             <a href="" className="trending-filter-item">Best Sellers</a>
          </div>

          <Products listProducts={listProducts}
                id={id}/> 

          <div className="switch">
              <div className="switch-off" style={{ backgroundImage:`url("../../switch-off.svg")`}}></div>
              <div className="switch-on" style={{ backgroundImage:`url("../../switch-on.svg")`}}></div>
          </div> 
      </div>
    );
  }
  
  export default Trending;
  