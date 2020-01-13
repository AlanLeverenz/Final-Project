import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function Article({ title, source, description, url, query, id, hml, urlToImage, publishedAt, content, type, score, Button}) {
  return (

  <ListItem>

    <Row className="flex-wrap-reverse">
      <Col size="col-12">

      <h3 className=""><a target="_blank" rel="noopener noreferrer" style={{color:"#0c1429"}} href={url}>{title}</a></h3>
        
      {source && <h5 className="">{source}</h5>}

      </Col>
    </Row>

    <Row>
      <Col size="col-12">
        <h5 style={{fontStyle:"italic",color:"blue",fontSize:"1.5rem"}}>{query}</h5>
      </Col>
    </Row>

    <Row>
      <Col size="col-12" className="tinyLine">
        <p style={{fontSize:"1.25rem"}} className={hml}>{type.toUpperCase()}: {score}</p>
      </Col>
    </Row>

    <Row>
      <Col size="12 sm-4 md-3" className="no-padding">
        <img className="img-fluid" src={urlToImage} alt={title} />
      </Col>
      <Col size="12 sm-8 md-9">
        <p>{description}</p>
      </Col>
    </Row>   
    
    <Row>
      <Col size="col-12">
        <div className="btn-container">
          <Button />
        </div>
      </Col>
    </Row>

    </ListItem>

  );
}

export default Article;
