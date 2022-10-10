import '../App.css';
import MenuListCollection from './MenuListCollection';
import MenuListHead from './MenuListHead';




function Menu({item}) {

    return (
      <div className="menu">
          <MenuListCollection/>
          {item}
      </div>
        );
      }
  
  export default Menu;
  