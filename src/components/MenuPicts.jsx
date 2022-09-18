import '../App.css';

function MenuPicts({item, func}) { 

    return (
        <div className="head-img-chair-price">
           <img src={item.url} onClick={func}/>
           <span>${item.price}</span>
           <p>{item.description}</p>
        </div>
    )
}


export default MenuPicts;