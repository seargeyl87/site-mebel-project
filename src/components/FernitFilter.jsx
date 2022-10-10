import '../App.css';
import {useState, useEffect, useContext} from 'react';
import PostService from './PostService';
import ProductsItem from './ProductsItem';
import {useParams} from "react-router-dom";
import Products from './Products';
import Context from "./Context";


function FernitFilter() {
  let {theme, setTheme} = useContext(Context);
    let [listProducts, setListSofa] = useState([]);
    let {id} = useParams();
    console.log(id)

    async function getDataSofa() {
      let responseSofa;
      id==="sofa" ? responseSofa = await PostService.getSofa() :  responseSofa = await PostService.getChairs();
      setListSofa(responseSofa)
    }

    useEffect(() => {
     getDataSofa();
      }, [theme])

    return (
      <div className="container_fernit_filter" onClick={getDataSofa}>
                      <div className="our-products">
                        <div className="our-products-head">
                              <h2>{id}</h2>
                        </div>

      <Products listProducts={listProducts}
                id={id}/> 
              </div>
      </div>
      );

}

export default FernitFilter;