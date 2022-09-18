

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
import Footer from './Footer';
import BenefitsPict from './BenefitsPict';


function Page (props) {

    return (
        <>           
                {props.searchIcons}
                {props.menu}
                {props.benefits}
                {props.benefitsPict}
                {props.trending}
                {props.specialOffer}
                {props.ourProducts}
                {props.comments}
                {props.latestArticle}       
        </>
    )
}


export default Page;