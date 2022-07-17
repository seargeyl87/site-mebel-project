import './App.css';
import Top from './components/Top';
import SearchIcons from './components/SearchIcons';
import Menu from './components/Menu';
import ListHead from './components/ListHead';
import Benefits from './components/Benefits';
import Trending from './components/Trending';
import SpecialOffer from './components/SpecialOffer';
import OurProducts from './components/OurProducts';
import Comments from './components/Comments';
import LatestArticle from './components/LatestArticle';
import ButtonInfo from './components/ButtonInfo'


function App() {
  return (
    <div className="container">
       <Top/>
       <SearchIcons/>
       <Menu/>
       <ListHead/>
       <Benefits/>
       <Trending/>
       <SpecialOffer/>
       <OurProducts/>
       <Comments/>
       <LatestArticle/>
       <ButtonInfo/>
    </div>
  );
}

export default App;
