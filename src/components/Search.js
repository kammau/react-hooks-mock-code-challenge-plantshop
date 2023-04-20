import React, { useState } from "react";

function Search({searchFor, onPlantSearch}) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchFor}
        onChange={(event) => onPlantSearch(event.target.value)}
      />
    </div>
  );
}

export default Search;
