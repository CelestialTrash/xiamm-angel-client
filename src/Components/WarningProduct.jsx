function WarningProduct({ setShowWarning, idToDelete, deleteProduct }) {
    return (
      <div className="warning-layout">
        <div className="warning-card">
            <h2> Warning!</h2>
          <p>Are you sure you want to delete this product?</p>
          <p> This action cannot be undone</p>
          {<button onClick={() =>deleteProduct(idToDelete)}>Yes</button> }
          <button onClick={() => setShowWarning(false)}>No</button>
        </div>
      </div>
    );
  }

  export default WarningProduct;