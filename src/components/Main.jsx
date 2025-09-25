import comics from '../data/comics.js'
import ComicCard from './ComicCard.jsx';

export default function Main() { 
    return (
    <main>
    <div className='jumbotron'> </div>

        <div className='content-section'>
            <div className='container'>
                <div className='series-label'>Current Series</div>
                <div className='comics-grid'>
                    {comics.map((comic) => (
                        <ComicCard 
                        key={comic.id}
                        thumb={comic.thumb}
                        series={comic.series}
                        />
                    ))}
                </div>
                <div className="button-container">
                <button className="load-more-btn">Load More</button>
                </div>
            </div>
        </div>
    </main>
); 
}
