import '../App.css';


function SearchIcons() {
    return (
      <div className="search-icons">
          <div className="head-ferniking">
            <img src="../../icon1.png"/>
            <p>Furniking</p>
            
          </div>
          <div className="search">
            <input name="Search" value="Search here"/>
            <select>
                  <option>Categories 1</option>
                  <option>Categories 2</option>
            </select>
            <button><img src="../../search.png"/></button>
          </div>
          <div className="icons">
              <img src="../../bag.png"/>
              <img src="../../notification.png"/>
              <img src="../../person.png"/>
          </div>
    
      </div>
    );
  }
  
  export default SearchIcons;
  