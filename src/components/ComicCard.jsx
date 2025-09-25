export default function ComicCard({thumb, series}) {
    return (
        <div className="comic-card">
            <div className="card-image">
                <img src={thumb} alt="{series}" />
            </div>
            <h4>{series.toUpperCase()}</h4>
        </div>
    )
    
}