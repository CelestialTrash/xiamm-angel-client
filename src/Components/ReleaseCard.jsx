import './ReleaseCard.css'

function ReleaseCard({title, producer, imageUrl}) {
    return(
        <div className="card-info">
            <img src={imageUrl} alt={title} />
            <h2>{title}</h2>
            <h3>{producer}</h3>
        </div>
    )
}

export default ReleaseCard