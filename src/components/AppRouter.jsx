import { Routes, Route} from 'react-router-dom';
import Chair from './Chair';
import About from './About';
import SearchIcons from './SearchIcons';
import Menu from './Menu';
import Benefits from './Benefits';
import Trending from './Trending';
import SpecialOffer from './SpecialOffer';
import OurProducts from './OurProducts';
import Comments from './Comments';
import LatestArticle from './LatestArticle';
import BenefitsPict from './BenefitsPict';
import Page from './Page';

import MenuListCollection from './MenuListCollection';
import MenuListHead from './MenuListHead';
import FernitFilter from './FernitFilter';





function AppRouter() {
    return (
        <div>
            <Routes>

                <Route path='/chair' element={<Page 
                                                     menu={<Menu item={<Chair/>}/>}/>} />                                          
                <Route path='/:id' element={<Page 
                                                     menu={<Menu item={<FernitFilter/>}/>}/>} />
                                                     
                <Route path='/' element={ <Page   searchIcons={<SearchIcons/>} 
                                                  menu={<Menu item={<MenuListHead/>}/>}
                                                  benefits={ <Benefits/>}
                                                  benefitsPict={<BenefitsPict/>}
                                                  trending={<Trending/>}
                                                  specialOffer={<SpecialOffer/>}
                                                  ourProducts={<OurProducts/>}
                                                  comments={<Comments/>}
                                                  latestArticle={<LatestArticle/>}
                      />} />
                                                                                                          
            </Routes>
        </div>
    )
}





export default AppRouter;