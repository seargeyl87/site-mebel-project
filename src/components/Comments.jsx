import '../App.css';


function Comments() {
    return (
      <div className="comments">
                <div className="comments-head">
                       <h2>What Our Customer Says</h2>
                </div>
                <div className="comments-pict" style={{ backgroundImage:`url("../../angelina.svg")`}}></div>
                <div className="comments-block">
                    <div className="arrow-left" style={{ backgroundImage:`url("../../arrow-left.svg")`}}></div>
                    <div className="comments-block-item">
                       <div className="comment">I like Furniking.com and as compared to other company it's polices and customers support is very good easy to reach., also many time they unable to delivered. The ultricies are pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel facilisist amet.</div>
                       <div className="comment-name">Angelina Joly</div>
                       <div className="comment-prof">Co-founder</div>
                    </div>
                    <div className="arrow-right" style={{ backgroundImage:`url("../../arrow-right.svg")`}}></div>
                </div>
      </div>
    );
  }
  
  export default Comments;
  