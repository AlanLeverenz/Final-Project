import React from "react";
const uuidv4 = require('uuid/v4');

function ResultList(props) {
  return (
    <ul className="list-group">
    {props.results.map(result => (
      <li className="list-group-item" key={uuidv4}>
        <div className="card">
          <div className="card-header">
            <h3>{props.result.title}
{/*}              <a className="article-link" target="_blank" rel="noopener noreferrer" href={props.results.url}>{props.result.title}</a>
              <a className="btn btn-success save">Save Article</a>
    */}
            </h3>
          </div>
          <div className="card-body"><img alt={result.query} className="img-fluid" src={result.images.original.url} />
          {props.results.score}</div>
        </div>
      </li>
    ))}
    </ul>
  );
}

export default ResultList;


