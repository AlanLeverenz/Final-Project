import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function Article({ title, source, description, url, urlToImage, publishedAt, content, type, score, ratio, Button }) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="font-italic">{title}</h3>
          {source && <h5 className="font-italic">{source}</h5>}
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={url}>
              View
            </a>
            <Button />
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-4">
          <p className="font-italic small">Type: {type}</p>
        </Col>
        <Col size="md-4">
          <p className="font-italic small">Score: {score}</p>
        </Col>
        <Col size="md-4">
          <p className="font-italic small">Ratio: {ratio}</p>
        </Col>
      </Row>
      <Row>
        <Col size="12 sm-4 md-3">
          <img className="img-thumbnail img-fluid w-100" src={urlToImage} alt={title} />
        </Col>
        <Col size="12 sm-8 md-9">
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Article;
