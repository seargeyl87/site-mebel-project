import '../App.css';
import MenuListCollection from './MenuListCollection';
import MenuListHead from './MenuListHead';




function Menu(props) {

    return (
      <div className="menu">
          <MenuListCollection/>
          {props.item}
      </div>
        );
      }
  
  export default Menu;
  