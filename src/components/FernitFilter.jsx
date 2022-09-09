import '../App.css';
import {useState, useEffect} from 'react';
import FernitFilterItem from './FernitFilterItem';
import PostService from './PostService';
import {useParams} from "react-router-dom";

function FernitFilter() {


    let [listSofa, setListListSofa] = useState([]);
    let {id} = useParams()

  async function getData() {
    let response = await PostService.getSofa(id);
    setListListSofa(response)    
        }

        console.log(listSofa)
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
                              <FernitFilterItem itemFernit={item} key={index}/>
                          )}
                  </div>   
              </div>

      </div>


      );

}

export default FernitFilter;