import '../App.css';
import ProductsItem from './ProductsItem';
import {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import PostService from './PostService';




function Products({listProducts, id}) {

    return (  
        <div className="our-products-products">
            {listProducts.map((item, index) =>
              <ProductsItem id={id} item={item} key={index}/>
          )}   
       </div> 
    )
}

export default Products;