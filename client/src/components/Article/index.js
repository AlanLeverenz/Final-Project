import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function Article({ title, source, description, url, id, hml, urlToImage, publishedAt, content, type, score, Button}) {
  return (
    <ListItem>

      <Row>
        <Col size="col-4">
          <img className="img-thumbnail img-fluid" src={urlToImage} alt={title}/>
        </Col>
      </Row>

      <Row className="flex-wrap-reverse">
        <Col size="col-12">
      
      <h3 className="font-italic"><a target="_blank" rel="noopener noreferrer" href={url}>{title}</a></h3>
        
      {source && <h5 className="font-italic">{source}</h5>}

        </Col>
      </Row>
  
      <Row>
        <Col size="col-12">
          <p className={hml}>{type}: {score}</p>
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
