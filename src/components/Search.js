// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../styles/search.css";
import "../requests/getImages";
import getImages from "../requests/getImages";

const Search = ({ setSearchResults }) => {

    const [ value, setValue ] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchResults(getImages(value));
    }

  return (
    <>
    <form className="search-form" onSubmit={handleSubmit}>
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