import '../App.css';


function LatestArticle() {
    return (
      <div className="latest-article">
                <div className="latest-article-head">
                       <h2>Our Latest Articles</h2>
                </div>
                <div className="latest-article-pict">
                     <div className="latest-article-pict-article">
                          <div className="latest-article-pict-article-into" style={{ backgroundImage:`url("../../card-1.svg")`}}>
                               <div className="name-date">
                                  <div className="name">Furniture</div>
                                  <div className="date">23 September 2022</div>
                               </div>
                               <div className="description">Begineer guide buying minimal sofa</div>
                               <div className="read-more">Read more</div>
                          </div>
                     </div>
                     <div className="latest-article-pict-article">
                          <div className="latest-article-pict-article-into" style={{ backgroundImage:`url("../../card-2.svg")`}}>
                               <div className="name-date">
                                  <div className="name">Table</div>
                                  <div className="date">25 September 2022</div>
                               </div>
                               <div className="description">Buying best minimal computer table</div>
                               <div className="read-more">Read more</div>
                          </div>
                     </div>
                     <div className="latest-article-pict-article">
                          <div className="latest-article-pict-article-into" style={{ backgroundImage:`url("../../card-3.svg")`}}>
                               <div className="name-date">
                                  <div className="name">Bench</div>
                                  <div className="date">23 March 2022</div>
                               </div>
                               <div className="description">How to choose best modern bench</div>
                               <div className="read-more">Read more</div> 
                          </div>
                     </div>
                     <div className="latest-article-pict-article">
                          <div className="latest-article-pict-article-into" style={{ backgroundImage:`url("../../card-4.svg")`}}>
                               <div className="name-date">
                                  <div className="name">Furniture</div>
                                  <div className="date">23 March 2022</div>
                               </div>
                               <div className="description">Best Summer Outfit Style in this Country</div>
                               <div className="read-more">Read more</div>
                          </div>
                     </div>
                </div>

      </div>
    );
  }
  
  export default LatestArticle;
  