import React from "react";

function Card({ icon, title, children }) {
  return (
    <div className="card mt-1" style={{border:"none", padding:"0"}}>
 {/*}     <div className="card-header">
        <h3>
          <strong>
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
  */}
      <div className="card-body" style={{padding:"0"}}>{children}</div>
    </div>
  );
}

export default Card;

export function CardItem({ children }) {
  return <div className="col-lg-4 col-md-12 col-sm-12" style={{paddingLeft:"25px", paddingRight:"25px", border:"none"}}>{children}</div>;
}

