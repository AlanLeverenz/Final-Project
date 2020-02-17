<<<<<<< HEAD
import React from "react";
import "./style.css";

function SearchForm({ search, handleInputChange, handleFormSubmit }) {
  return (
    <div className="container clearfix text-center justify-content-center">
    <br/>
    <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
              <form className="form-inline justify-content-center">
                <span className="input-group-btn">
                  <div className="row max-width search-row">
                    <input onChange={handleInputChange}
                            value={search}
                            name="search"
                            type="text"
                            className="form-control form-control-lg form-control-borderless" 
                            type="search" 
                            placeholder="Search News"
                            id="search"/>
                    <button onClick={handleFormSubmit} className="btn btn-lg btn-light" type="submit"><i className="fa fa-search"></i></button>
                  </div>
                </span>
            </form>
        </div>
    </div>
  </div>
)};
  
export default SearchForm;
=======
import React from "react";
import "./style.css";

function SearchForm({ search, handleInputChange, handleFormSubmit }) {
  return (
    <div className="container clearfix text-center justify-content-center">
    <br/>
    <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
              <form className="form-inline justify-content-center">
                <span className="input-group-btn">
                  <div className="row max-width search-row">
                    <input onChange={handleInputChange}
                            value={search}
                            name="search"
                            type="text"
                            className="form-control form-control-lg form-control-borderless" 
                            type="search" 
                            placeholder="Search News"
                            id="search"/>
                    <button onClick={handleFormSubmit} className="btn btn-lg btn-light" type="submit"><i className="fa fa-search"></i></button>
                  </div>
                </span>
            </form>
        </div>
    </div>
  </div>
)};
  
export default SearchForm;
>>>>>>> 8d3606f5b915be0a1dec1b1b7445921771baf4ff
