import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import AboutCard from '../AboutCard/AboutCard';
import './About.css';
const About = () => {
    const [aboutsCard, setAboutsCard] = useState([])
    useEffect(() => {
        fetch('./abouts.json')
            .then(res => res.json())
        .then(data=>setAboutsCard(data))
    },[])
    return (
        <div>

            <section  className='about-top'>
                <h2>About Us </h2>
                <h4>Hello there, this is English Learning System .</h4>
            </section>
            <section>
                <div className='learning-expert'>
                    <div>
                        <h1>44</h1>
                        <h3>Expert Teacher</h3>
                        <p>We have hundreds of happy students
                    </p>
                    </div>
                    <div>
                        <h1>2412</h1>
                        <h3>Experienced Staff
                        </h3>
                        <p>We have hundreds of happy students

                        </p>
                    </div>
                    <div>
                        <h1>3422
                        </h1>
                        <h3>Online Courses

                        </h3>
                        <p>We have hundreds of happy students
                        </p>
                    </div>
                </div>
            </section>
            
            <section>
            <h1 className='edu-title'>The Experts OF EduPress</h1>
                <div className='eduPress'>
                    {/* <h2>{aboutsCard.length}</h2> */}

                    <Row xs={1} md={4} className="g-4">
                    {
                        aboutsCard.map(aboutCard => 
                            <AboutCard
                                key= {aboutCard.name}
                            aboutCard = {aboutCard}
                            ></AboutCard>
                        )
}
</Row>
                   
                </div>
            </section>
            
            <section>
                <div className='signUp'>
                <h1>Sign Up To Receive Free Updates
                    </h1>
                    <div className='signup-container'>

                        <div>
                            <p>First Name :</p>
                            <input placeholder='First Name' type="text" />
                    </div>
                        <div>
                            <p>Last Name :</p>
                            <input placeholder='Last Name' type="text" />
                    </div>
                        <div>
                            <p>Email Address :</p>
                            <input placeholder='Email' type="email" />
                    </div>
                        <div>
                            <button>Sign up For Free</button>
                    </div>
                    </div>

                </div>
                
            </section>

            {/*  */}
        </div>
    );
};

export default About;