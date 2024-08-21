function WarningRelease({  }) {
    return (
      <div className="warning-layout">
        <div className="warning-card">
            <h2> Warning!</h2>
          <p>Are you sure you want to delete this item?</p>
          <p> This action cannot be undone</p>
          {<button onClick={() =>deleteProduct(idToDelete)}>Yes</button> }
          <button onClick={() => setShowWarning(false)}>No</button>
        </div>
      </div>
    );
  }

  export default WarningRelease;