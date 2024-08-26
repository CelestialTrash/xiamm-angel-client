//CSS
import "./WarningStyles.css"

function WarningProduct({ setShowWarning, idToDelete, deleteProduct }) {
    return (
      <div className="warning-layout">
        <div className="warning-card">
            <h2> Warning!</h2>
          <p>Are you sure you want to delete this product?</p>
          <small> This action cannot be undone</small>
          {<button className="yes-btn" onClick={() =>deleteProduct(idToDelete)}>Yes</button> }
          <button className="no-btn" onClick={() => setShowWarning(false)}>No</button>
        </div>
      </div>
    );
  }

  export default WarningProduct;