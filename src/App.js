import './App.css';
import AppRouter from './components/AppRouter';
import ButtonInfo from './components/ButtonInfo';
import Footer from './components/Footer';
import Top from './components/Top';

function App() {
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
