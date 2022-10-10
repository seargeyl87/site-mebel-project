import { Routes, Route} from 'react-router-dom';
import FernitureItem from './FernitureItem';
import Menu from './Menu';
import FernitFilter from './FernitFilter';
import MainPage from './MainPage';




function AppRouter() {
    return (
        <div>
            <Routes>
                <Route path='/products/:id' element={<Menu item={<FernitureItem/>}/>} />                                          
                <Route path='/:id' element={<Menu item={<FernitFilter/>}/>} />  
                <Route path='/' element={ <MainPage/>}/>                                                                                          
            </Routes>
        </div>
    )
}





export default AppRouter;