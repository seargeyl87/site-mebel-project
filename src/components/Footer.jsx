import '../App.css';


function Footer() {
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
