import '../App.css';
import {useState, useContext} from 'react';
import Context from "./Context";


function Footer() {

  let {theme, setTheme} = useContext(Context);
  console.log(theme);


    return (
      <div className="footer">
          <div className="footer-line" style={{ backgroundImage:`url("../../footer-line.svg")`}}></div>
          <div className="footer-info">
               <div className="years">© 2021 Funking - All rights reserved.</div>
               <div className="privacy-security-terms">
                  <div>Privacy</div>
                  <div>Security</div>
                  <div>Terms</div>
               </div>
          </div>
      </div>
    );
  }
  
  export default Footer;
