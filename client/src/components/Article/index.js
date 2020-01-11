import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function Article({ title, source, description, url, query, id, hml, urlToImage, publishedAt, content, type, score, Button}) {
  return (
    <ListItem>

      <Row>
        <Col size="col-4">
          <img className="img-thumbnail img-fluid" src={urlToImage} alt={title}/>
        </Col>
      </Row>

      <Row className="flex-wrap-reverse">
        <Col size="col-12">

        <h3 className=""><a target="_blank" rel="noopener noreferrer" style={{color:"#0c1429"}} href={url}>{title}</a></h3>
          
        {source && <h5 className="">{source}</h5>}

        </Col>
      </Row>

      <Row>
        <Col size="col-12">
          <h5 style={{fontStyle:"italic",color:"blue"}}>{query}</h5>
        </Col>
      </Row>
  
      <Row>
        <Col size="col-12" className="tinyLine">
          <p style={{fontSize:"1.25rem"}} className={hml}>{type.toUpperCase()}: {score}</p>
        </Col>
      </Row>

      <Row>
        <Col size="col-12">
          <p>{description}</p>
        </Col>
      </Row>

      <Row>
        <Col size="col-12">
          <Button />
        </Col>
      </Row>

  </ListItem>
  );
}

export default Article;
