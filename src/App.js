import './App.css';
import AppRouter from './components/AppRouter';
import ButtonInfo from './components/ButtonInfo';
import Footer from './components/Footer';
import Top from './components/Top';
import Menu from './components/Menu';
import {useContext} from 'react';
import Context from './components/Context';


function App() {

  let {theme, setTheme} =  useContext(Context);
  console.log(theme);

  return (
    <div className="container">
             <Top/>
             <AppRouter/>
             <ButtonInfo/>
             <Footer/>
    </div>
  );
}

export default App;
