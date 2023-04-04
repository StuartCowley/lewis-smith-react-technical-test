// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../styles/search.css";

const Search = () => {

    const { value, setValue} = useState();

  return (
    <>
    <form className="search-form">
        <input 
            className="search-input"
            onChange={(e) => setValue(e.target.value)}
            type="text" 
        />
        <button className="search-button" type="submit">Search</button>
    </form>
   </>
   );
};

export default Search