import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './HomeService.css'
const HomeService = (props) => {
    const { courseName, price, img } = props.service;
    return (
        <Col>
        <Card className='home-card'>
          <Card.Img variant="top" src={img} />
          <Card.Body>
                    <Card.Title>CourseName :  { courseName}</Card.Title>
            <Card.Text>
             Price :  {price}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default HomeService;