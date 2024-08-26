//REACT
import React, { useState } from "react";
import { Link } from "react-router-dom";
//Components
import EditProductForm from "./EditProductForm";
import WarningProduct from "./WarningProduct";


const ProductCard = ({ eachProduct, user, editProductId, handleDisplayEditForm, handleCancelEdit, showWarning, displayWarning, deleteProduct, idToDelete, getProducts }) => {
  return (
    <div className="product-relative">
      <Link to={`/products/${eachProduct._id}`}>
        <li className="product-card">
          <div>
            <h2>{eachProduct.title}</h2>
            <img
              src={eachProduct.imageUrl}
              alt={eachProduct.title}
            />
            <h3>{eachProduct.price}</h3>
            <button className="purchase-btn">Purchase</button>
          </div>
        </li>
      </Link>
      {user ? (
        <>
          <button
            className="edit-btn"
            onClick={() => handleDisplayEditForm(eachProduct._id)}
          >
            Edit
          </button>
          {editProductId === eachProduct._id && (
            <EditProductForm
              getProducts={getProducts}
              id={eachProduct._id}
              title={eachProduct.title}
              price={eachProduct.price}
              imageUrl={eachProduct.imageUrl}
              cancelEdit={handleCancelEdit}
            />
          )}
          <button
            className="delete-btn"
            onClick={() => displayWarning(eachProduct._id)}
          >
            Delete
          </button>
          {showWarning && idToDelete === eachProduct._id && (
            <WarningProduct
              deleteProduct={deleteProduct}
              idToDelete={idToDelete}
              setShowWarning={displayWarning}
            />
          )}
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ProductCard;