

import SearchIcons from './SearchIcons';
import Menu from './Menu';
import ListHead from './ListHead';
import Benefits from './Benefits';
import Trending from './Trending';
import SpecialOffer from './SpecialOffer';
import OurProducts from './OurProducts';
import Comments from './Comments';
import LatestArticle from './LatestArticle';
import ButtonInfo from './ButtonInfo';
import MenuListHead from './MenuListHead';
import BenefitsPict from './BenefitsPict';


function MainPage () {

    return (<>
             <Menu item={<MenuListHead/>}/>
             <Benefits/>
             <BenefitsPict/>
             <Trending/>
             <SpecialOffer/>
             <OurProducts/>
             <Comments/>
             <LatestArticle/>
             </>                                               
    )
}


export default MainPage;