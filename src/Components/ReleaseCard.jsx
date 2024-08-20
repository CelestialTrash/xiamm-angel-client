import EditReleaseForm from "../Components/EditReleaseForm"
import './ReleaseCard.css'

function ReleaseCard({title, producer, imageUrl}) {
    return(
        <li className="release-card">
            <img src={imageUrl} alt="" />
            <h2>{title}</h2>
            <h3>{producer}</h3>
            <button>Edit</button>
            {/* <EditReleaseForm /> */}
        </li>
    )
}

export default ReleaseCard