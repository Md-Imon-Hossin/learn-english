import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import HomeService from '../HomeService/HomeService';
import './Home.css'
const Home = () => {
    const [homeServices, setHomeServices] = useState([])
    useEffect(() => {
        fetch('./home.json')
            .then(res => res.json())
        .then(data=>setHomeServices(data))
    },[])
    return (
        // Home top first section 
        <div >
            <div className='home-bg'>
            <div className='home-top'>
           <div className='home-top-left'>
                <h2>Learn Quality <br /> English <span>Online</span> </h2>
                <p>Unicoach is an effective service for learning language . <br /> Try before you buy ! Book a free 30 minute trial lesson .</p>
                <input type="email" placeholder='Your Email' />
                <button>Book Now</button>
            </div>
                <div>
            <img src="https://media.istockphoto.com/photos/english-with-woman-holding-a-speech-bubble-picture-id973534152?b=1&k=20&m=973534152&s=170667a&w=0&h=LWFRIIl5X1h8aqPB3yjtIVz4EDiLPEi3Ed-3XIE0Lmg=" alt="" />
                        </div>
            </div> 
            </div>
           
            <div className='home-bottom'>
                <h2>A Powerful Course
                </h2>
                <Row xs={1} md={4} className="g-4">
                    {
                        homeServices.map(service => <HomeService
                         key= {service.price} 
                        service={service}
                        ></HomeService>)     
                }
                </Row>
            </div> 
        </div>        
    );
};

export default Home;