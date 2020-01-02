import React from "react";
import "./style.css";

function SearchForm({ search, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <input
          onChange={handleInputChange}
          value={search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Enter a search phrase"
          id="search"
        />
        <button onClick={handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
