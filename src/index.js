import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Context from './components/Context';





function MainFunc() {
  let [theme, setTheme] = useState(false);

  return (
   <React.StrictMode>
            <BrowserRouter>
              <Context.Provider value={{theme, setTheme }}>
                     <App/>  
              </Context.Provider>
            </BrowserRouter>
   </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <MainFunc/> 
  );

