import React from 'react';
import { Card, Col } from 'react-bootstrap';

const AboutCard = (props) => {
    const { img,title,name,teaching } = props.aboutCard;
    return (
        <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Text>
                       Name : { name}
                    </Card.Text>
            <Card.Text>
                        {teaching}
                    </Card.Text>
                    <Card.Title>{ title}</Card.Title>

          </Card.Body>
        </Card>
      </Col>
    );
};

export default AboutCard;