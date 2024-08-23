import './ReleaseCard.css'

function ReleaseCard({title, producer, imageUrl}) {
    return(
        <div className="card-info">
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <small>Produced by</small>
            <p>{producer}</p>
        </div>
    )
}

export default ReleaseCard