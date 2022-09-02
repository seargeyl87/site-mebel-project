import './App.css';
import Top from './components/Top';
import SearchIcons from './components/SearchIcons';
import Menu from './components/Menu';
import ButtonInfo from './components/ButtonInfo';
import Footer from './components/Footer';



function Chair() {
  return (
    <div className="container">
       <Top/>
       <SearchIcons/>
       <div className="container_chair">
            <h1>Office Blue Chair</h1>
            <div className="head-img-item2">
               <img src="../../chair-head-item4.png"/>
            </div> 
            <div className="price">190$</div> 
            <div className="description">this is a nice chair4</div> 
       </div>
       <ButtonInfo/>
       <Footer/>
    </div>
  );
}

export default Chair;
