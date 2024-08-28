//REACT
import { useState } from "react";
//CSS
import './SearchProduct.css'

function SearchProducts({ products, setDisplayedProducts }) {
  const [searchProducts, setSearchProducts] = useState("");

  function handleSearch(event) {
    const query = event.target.value;
    setSearchProducts(query);

    if (query === "") { 
      setDisplayedProducts(products);//reverting to full products when the query is empty
      return;
    } else {
      //filtering products based on the query
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );

      setDisplayedProducts(filteredProducts);
    }
  }
  return (
    <>
      <input className="search-input"
        onChange={handleSearch}
        id="search-input"
        type="search"
        placeholder="Search Product"
      />
      {/* <span className="search-icon" id="magni-icon">🔍</span> */}

     {/*  <p>{searchProducts}</p> */}
    </>
  );
}
export default SearchProducts;
