//CSS
import "./ReleaseCard.css";
//COMPONENTS
import EditReleaseForm from "./EditReleaseForm";
import WarningRelease from "./WarningRelease";
import { Link } from "react-router-dom";

function ReleaseCard({
  user,
  _id,
  title,
  producer,
  imageUrl,
  displayWarning,
  releaseWarning,
  handleCancelEdit,
  deleteRelease,
  setReleaseWarning,
  idToDelete,
  editReleaseId,
  handleDisplayEditForm,
  getReleases,
  date,
  linkToPlatform,
}) {
  return (
    <div className="card-info">
      <Link target="_blank" to={linkToPlatform}>
        <img src={imageUrl} alt={title} />{" "}
      </Link>
      <h3>{title}</h3>
      <small>Produced by</small>
      <p>{producer}</p>

      {user ? (
        <div className="card-btn-container">
          <button
            className="edit-btn"
            onClick={() => handleDisplayEditForm(_id)}
          >
            Edit
          </button>
          {editReleaseId === _id && (
            <EditReleaseForm
              id={_id}
              title={title}
              producer={producer}
              date={date}
              linkToPlatform={linkToPlatform}
              imageUrl={imageUrl}
              cancelEdit={handleCancelEdit}
              getReleases={getReleases}
            />
          )}
          <button className="delete-btn" onClick={() => displayWarning(_id)}>
            Delete
          </button>
          {releaseWarning && idToDelete === _id && (
            <WarningRelease
              deleteRelease={deleteRelease}
              setReleaseWarning={setReleaseWarning}
              idToDelete={_id}
            />
          )}
        </div>
      ) : (
        <div></div>
      )}

      <div className="corners">
        <div className="top">
          <div className="top-left"></div>
        </div>
        <div className="bottom">
          <div className="bottom-right"></div>
        </div>
      </div>
    </div>
  );
}

export default ReleaseCard;
