import React from "react";
import { CardItem } from "../Card";
import { Row, Col } from "../Grid";
import "./style.css";

function ArticleCard({ title, source, description, url, urlToImage, id, hml, query, author, publishedAt, content, type, score, Button}) {
  return (
    <CardItem>
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
          {/* <p>ID: {id}</p> */}
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
    </CardItem>
  );
}

export default ArticleCard;
