import digComics from '../assets/img/buy-comics-digital-comics.png';
import merchandise from '../assets/img/buy-comics-merchandise.png';
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
                <li> <img src={digComics} alt="Digital comics" /> </li>
                <li> <img src={merchandise} alt="Digital comics" /> </li>
                <li> <img src={locationShop} alt="Digital comics" /></li>
                <li> <img src={power} alt="Digital comics" /></li>
            </ul>
        </div>
    </main>
); 
}
