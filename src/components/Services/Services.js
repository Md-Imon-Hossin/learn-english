import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
        .then(data=>setServices(data))
    },[])
    
    return (
        <div>
            <h2 style={{margin : '25px 0',fontSize: '45px'}}>Featured Courses</h2>
            <Row xs={1} md={3} className="g-4">
            {
                    services.map(service => <Service
                    key={service.price}
                service={service}
                ></Service>)
            }
                </Row>

            
        </div>
    );
};

export default Services;