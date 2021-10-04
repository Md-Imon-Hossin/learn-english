import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { CourseName, price, img } = props.service;
    return (
        <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
                    <Card.Title>CourseName : { CourseName}</Card.Title>
            <Card.Text>
             Price : {price}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Service;