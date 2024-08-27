//COMPONENTS
import ReleaseCard from "../Components/ReleaseCard";
import CreateReleaseForm from "../Components/CreateReleaseForm";
import Loader from "../Components/Loader";
//CSS
import "../Components/ReleaseCard.css";
import "./ReleasesPage.css";
//REACT
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/user.context";
//AXIOS
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function ReleasesPage() {
  const [displayForm, setDisplayForm] = useState(false);
  const [releases, setReleases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editReleaseId, setEditReleaseId] = useState(null);
  const [releaseWarning, setReleaseWarning] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");
  const authToken = localStorage.getItem("Authorization");

  const handleDisplayCreateForm = () => {
    return setDisplayForm(!displayForm);
  };

  const handleCancelCreate = () => {
    setDisplayForm(false);
  };

  const handleDisplayEditForm = (releaseId) => {
    return setEditReleaseId(releaseId);
  };

  const handleCancelEdit = () => {
    setEditReleaseId(null);
  };

  function getReleases() {
    setIsLoading(true);
    axios
      .get(`${API_URL}/api/releases`)
      .then((response) => {
        setReleases(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error?.response.data.message);
      });
  }

  useEffect(() => {
    getReleases();
  }, []);

  function deleteRelease(id) {
    axios
      .delete(`${API_URL}/api/releases/${id}`, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then(() => getReleases())
      .catch((error) => {
        console.error(error?.response.data.message);
      });
  }

  const displayWarning = (id) => {
    setReleaseWarning(true);
    setIdToDelete(id);
  };

  //User checker
  const { user } = useContext(AuthContext);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section id="releases-page">
          {user ? (
            <div id="release-form-container">
              <button className="add-btn" onClick={handleDisplayCreateForm}>
                Make Release
              </button>
              {displayForm && (
                <CreateReleaseForm
                  onClick={handleDisplayCreateForm}
                  getReleases={getReleases}
                  cancelCreate={handleCancelCreate}
                />
              )}
            </div>
          ) : (
            <div></div>
          )}
          <ul id="card-container">
            {releases &&
              releases.map(({ _id, title, producer, imageUrl, date }) => {
                return (
                  <li className="card" key={_id}>
                    <ReleaseCard
                      user={user}
                      _id={_id}
                      title={title}
                      producer={producer}
                      imageUrl={imageUrl}
                      date = {date}
                      handleDisplayEditForm={handleDisplayEditForm}
                      displayWarning={displayWarning}
                      handleCancelEdit={handleCancelEdit}
                      editReleaseId={editReleaseId}
                      deleteRelease={deleteRelease}
                      releaseWarning={releaseWarning}
                      setReleaseWarning={setReleaseWarning}
                      idToDelete={idToDelete}
                      getReleases = {getReleases}
                    />
                  </li>
                );
              })}
          </ul>
        </section>
      )}
    </>
  );
}

export default ReleasesPage;
