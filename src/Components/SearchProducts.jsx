import { useState } from "react";

function SearchProducts({products, setDisplayedProducts}) {
    const [searchProducts, setSearchProducts] = useState("");

function handleSearch(event){
    const query = event.target.value;
        setSearchProducts(query);
        console.log(`Search query updated to: ${query}`);
    /* if (query === "") {
      setDisplayedProducts([]);
      return;
    } */
}
return (
  <>

    <input onChange={handleSearch} id="search-input" type="search" placeholder="Search robot" />
    <span id="magni-icon">🔍</span>
   
    
    <p>{searchProducts}</p>
  </>
);
}
export default SearchProducts;