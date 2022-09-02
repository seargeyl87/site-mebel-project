import { Routes, Route} from 'react-router-dom';
import Chair from '../Chair';
import About from './About';
import App from '../App';





function AppRouter() {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<App/>} />
                <Route exact path='/chair' element={<Chair/>} />
                <Route exact path='/about' element={<About/>} />
            </Routes>
        </div>
    )
}





export default AppRouter;