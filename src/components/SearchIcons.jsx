import '../App.css';


function SearchIcons() {
    return (
      <div className="search-icons">
          <div className="head-ferniking">
            <img src="../../icon1.svg"/>
            <p>Furniking</p>
            
          </div>
          <div className="search">
            <input name="Search" placeholder="Search here"/>
            <select>
                  <option>Categories 1</option>
                  <option>Categories 2</option>
            </select>
            <button><img src="../../search.svg"/></button>
          </div>
          <div className="icons">
              <div className="icons-not" style={{ backgroundImage:`url("../../bag.svg")`}}></div>
              <div className="not">4</div>
              <img src="../../notification.svg"/>
              <img src="../../person.svg"/>
          </div>
    
      </div>
    );
  }
  
  export default SearchIcons;
  