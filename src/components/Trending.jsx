import '../App.css';
import {useState, useEffect} from 'react';
import TrendingItem from './TrendingItem';
import PostService from './PostService';

function Trending() {
    let [listTrending, setListTrending] = useState([]);

   
    async function getData() {
       let posts = await  PostService.getAllTrend()
          setListTrending(posts)
            }

      // useEffect(() => {
      //  getData()
      //   }, [])



    return (
      <div className="trending">
          <div className="trending-head"><h2>TRENDING</h2></div>
          <div className="trending-filter">
             <a href="" className="trending-filter-item trending-filter-selected">Top Products</a>
             <a href="" className="trending-filter-item">New Arrivals</a>
             <a href="" className="trending-filter-item">Best Sellers</a>
          </div>
          <div className="trending-products">
              {listTrending.map((item, index) => <TrendingItem item={item} key={index}/>)}
          </div>
          <div className="switch">
              <div className="switch-off" style={{ backgroundImage:`url("../../switch-off.svg")`}}></div>
              <div className="switch-on" style={{ backgroundImage:`url("../../switch-on.svg")`}}></div>
          </div> 
      </div>
    );
  }
  
  export default Trending;
  