import '../App.css';
import {useContext, useEffect, useState} from 'react';
import PostService from './PostService';
import {useParams} from "react-router-dom";




function FernitureItem({themeRouter}) { 
     let [state, setState] = useState([]);
     let {id} = useParams()
     console.log(state)


async function getProductInfo() {
     let responseSofa = await PostService.getProductId(Number(id));
          let [obj] = responseSofa;
          setState(obj)
}
     useEffect(() => {
          getProductInfo()
     }, [])

  return (
       <div className="container_chair">
            <h1>{state.name}</h1>
            <div className="head-img-item2">
               <img src={state.url}/>
            </div> 
            <div className="price">{state.new_price}$</div> 
            <div className="description">{state.description}</div> 
       </div>
  );
}

export default FernitureItem;
