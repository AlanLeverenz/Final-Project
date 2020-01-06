import React from "./node_modules/react";
import { Card } from "../Card";
import { Row, Col } from "../Grid";
import "./style.css";

function topCard({ title, source, description, url, urlToImage, publishedAt, content, type, score, Button, uuid}) {
  return (
    <Card>
      <Row className="flex-wrap-reverse">
        <Col size="md-4">
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
        {/*} eslint-disable-next-line */}
          <p className="font-italic small" className={type}>Type: {type}</p>
        </Col>
        <Col size="md-4">
          <p className="font-italic small">Score: {score}</p>
        </Col>
       
      </Row>
      <Row>
        <Col size="6 sm-4 md-3">
          <img className="img-thumbnail img-fluid w-100" src={urlToImage} alt={title} />
        </Col>
        <Col size="6 sm-8 md-9">
          <p>{description}</p>
        </Col>
      </Row>
    </Card>
  );
}

export default TopCard;