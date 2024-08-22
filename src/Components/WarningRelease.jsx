function WarningRelease({ deleteRelease, setReleaseWarning, idToDelete }) {
    return (
        <div className="warning-layout">
            <div className="warning-card">
                <h2> Warning!</h2>
                <p>Are you sure you want to delete this item?</p>
                <p> This action cannot be undone</p>
                {<button className="yes-btn" onClick={() => deleteRelease(idToDelete)}>Yes</button>}
                <button className="no-btn" onClick={() => setReleaseWarning(false)}>No</button>
            </div>
        </div>
    );
}

export default WarningRelease;