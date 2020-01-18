import React from "react";
import { CardItem } from "../Card";
import { Row, Col } from "../Grid";
import "./style.css";

function PreviewCard({ title, source, description, url, urlToImage , author, publishedAt, content}) {
  return (
    <CardItem>
      <Row>
         <Col size="col-4 col-md-12 col-sm-12">
          <img className="img-fluid" src={urlToImage} alt={title}/>
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

export default PreviewCard;
