import React from "react";
import "../styles/searchresults.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p className="card-no-result" style={({ textAlign: "center", fontWeight: "bold", fontSize: "20px" })}>No results</p>;
  } else {
    return (
      <div className="card-image-parent">
        {results.map((image, index) => (
          <img className="card-image" src={image} alt="space" key={index} />
        ))}
      </div>
    );
  }
};

export default SearchResults;
