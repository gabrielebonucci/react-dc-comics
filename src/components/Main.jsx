import digComics from '../assets/img/buy-comics-digital-comics.png';
import merchandise from '../assets/img/buy-comics-merchandise.png';
import subscription from '../assets/img/buy-comics-subscriptions.png';
import locationShop from '../assets/img/buy-comics-shop-locator.png';
import power from '../assets/img/buy-dc-power-visa.svg';

export default function Main() { 
    return (
    <main>
        <div>
            <h1>products</h1>
        </div>
        <div>
            <ul>
                <li> <span>DIGITAL COMICS</span> <img src={digComics} alt="Digital comics" /> </li>
                <li> <span>DC MERCHANDISE</span>   <img src={merchandise} alt="merchandise" /> </li>
                <li> <span>SUBSCRITION</span>  <img src={subscription} alt="subscription" /> </li>
                <li> <span>COMIC SHOP LOCATOR</span> <img src={locationShop} alt="locationShop" /></li>
                <li> <span>DC POWER VISA</span> <img src={power} alt="power" /></li>
            </ul>
        </div>
    </main>
); 
}
