import React from "react";
import { Row, Col } from "react-bootstrap";

function RichTextComponent({components}) {

  return (
    <div className="content">
      <Row>
        {components.map((component, index) => {
          return (
            <Col sm={12} className={`col-${component.col}`} key={index}>
              <h2 className="content__title">{component.metadata.title}</h2>
              <div className="content__text" dangerouslySetInnerHTML={{__html: component.metadata.text}}></div>
            </Col>
          )
        })}
      </Row>
    </div>
  );
}

export default RichTextComponent;
