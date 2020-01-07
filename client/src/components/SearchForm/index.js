import React from "react";
import "./style.css";

function SearchForm({ search, handleInputChange, handleFormSubmit }) {
  return (
    <div className="container clearfix">
    <br/>
	<div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <form className="card card-sm">
                                <div className="card-body row no-gutters align-items-center">
                                
                                    <div className="col">
                                        <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search 30,000 News Sources"/>
                                        <button className="btn btn-lg btn-light" type="submit"><i className="fa fa-search"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
</div>
</div>
  )};
export default SearchForm;
