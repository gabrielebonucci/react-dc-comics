import digComics from '../assets/img/buy-comics-digital-comics.png';
import merchandise from '../assets/img/buy-comics-merchandise.png';
import subscription from '../assets/img/buy-comics-subscriptions.png';
import locationShop from '../assets/img/buy-comics-shop-locator.png';
import power from '../assets/img/buy-dc-power-visa.svg';

export default function Main() { 
    return (
    <main>
    <div className='jumbotronProducts'>
        <div className='services-banner'>
            <ul>
                <li> <img src={digComics} alt="Digital comics" /> <span>DIGITAL COMICS</span>  </li>
                <li>  <img src={merchandise} alt="merchandise" />  <span>DC MERCHANDISE</span>  </li>
                <li> <img src={subscription} alt="subscription" /> <span>SUBSCRITION</span>   </li>
                <li> <img src={locationShop} alt="locationShop" /> <span>COMIC SHOP LOCATOR</span> </li>
                <li> <img src={power} alt="power" /> <span>DC POWER VISA</span> </li>
            </ul>
        </div>
     </div>

    </main>
); 
}
