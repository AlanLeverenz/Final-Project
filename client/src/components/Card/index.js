<<<<<<< HEAD
import React from "react";
import Loader from 'react-loader';
import "./style.css";

function Card({ isLoaded, children }) {

  if (isLoaded === false) {

    return (
      <div className="loader-wrapper">
        <Loader loaded={isLoaded} />
      </div> 
    )
  }

  return (
    <div className="card mt-1" style={{border:"none", padding:"0"}}>
      <div className="card-body" style={{padding:"0"}}>{children}</div>

    </div>
  );
}

export default Card;

export function CardItem({ children }) {
  return <div className="col-lg-4 col-md-12 col-sm-12" style={{paddingLeft:"25px", paddingRight:"25px", border:"none"}}>{children}</div>;
}

=======
import React from "react";
import Loader from 'react-loader';
import "./style.css";

function Card({ isLoaded, children }) {

  if (isLoaded === false) {

    return (
      <div className="loader-wrapper">
        <Loader loaded={isLoaded} />
      </div> 
    )
  }

  return (
    <div className="card mt-1" style={{border:"none", padding:"0"}}>
      <div className="card-body" style={{padding:"0"}}>{children}</div>

    </div>
  );
}

export default Card;



export function CardItem({ children }) {
  return <div className="col-lg-4 col-md-12 col-sm-12" style={{paddingLeft:"25px", paddingRight:"25px", border:"none"}}>{children}</div>;
}
>>>>>>> 8d3606f5b915be0a1dec1b1b7445921771baf4ff
