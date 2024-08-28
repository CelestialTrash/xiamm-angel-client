//REACT
import { useState } from "react";
//CSS
import './SearchProduct.css'

function SearchProducts({ products, setDisplayedProducts }) {
  const [searchProducts, setSearchProducts] = useState("");

    function trim(ditto){
        return(
        ditto.toLowerCase().split(' ').join('')
        )
    }

  function handleSearch(event) {
    const query = trim(event.target.value);
    setSearchProducts(query);

    if (query === "") { 
      setDisplayedProducts(products);//reverting to full products when the query is empty
      return;
    } else {
      //filtering products based on the query
      const filteredProducts = products.filter((product) =>
        trim(product.title).includes(searchProducts)
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
    </>
  );
}
export default SearchProducts;
