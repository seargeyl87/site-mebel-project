import '../App.css';
import {useState, useEffect} from 'react';
import FernitFilterItem from './FernitFilterItem';
import PostService from './PostService';
import ProductsItem from './ProductsItem';
import {useParams} from "react-router-dom";

function FernitFilter() {


    let [listSofa, setListListSofa] = useState([]);
    let {id} = useParams()

  async function getData() {
    let response = await PostService.getSofa(id);
    setListListSofa(response)    
        }




  useEffect(() => {
           getData();
    }, [])

    return (
      <div className="container_chair">
                      <div className="our-products">
                        <div className="our-products-head">
                              <h2>{id}</h2>
                        </div>
                      <div className="our-products-products">
                          {listSofa.map((item, index) =>
                              <ProductsItem id={id} item={item} key={index}/>
                          )}
                  </div>   
              </div>
      </div>


      );

}

export default FernitFilter;