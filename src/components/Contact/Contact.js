import React from 'react';
import './Contact.css'
const Contact = () => {
    
    return (
        <div>
            <section>
                <div className='contact-title'>
                    <h3>Contact</h3>
                <p>Get a premium support now!
                </p>
                </div>
        </section>
            <section className='contact-mid-part-border'>
                <div className='contact-mid-part'>
                    <div>
                        <div className='contact-title-top'>
                        <h5>Location :
                            </h5>
                            <div ></div>
                        </div>
                        <div>
                            <h5>Australia
                            </h5>
                            <p>Envato INC 22 Elizabeth St.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='contact-title-top'>
                        <h5>Email :
                        </h5>
                        </div>
                        <div>
                            <h5>Info@Yoursite.Com
                            </h5>
                            <p>Contact with us when you need anything.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='contact-title-top'>
                        <h5 >Phone :
                        </h5>
                        </div>
                        <div>
                            <h5>+90 1234 567 89
                            </h5>
                            <p>Also contact with us on skype : @edupress.
                            </p>
                        </div>
                    </div>                    
                </div>
            </section>
            <section>                
                <div className='touch-container'>
                    <div className='touch-container-title'>
                        <h3>GET IN TOUCH</h3>
                        <p>English learner” means a child who does not speak English or whose native language is not <br /> English and who is not  currently able to perform ordinary classroom work in English, also known <br /> as a "Limited English Proficiency" or LEP child</p>   
                    </div>
                    <div className='contact-form'>
                        <div>
                         <input placeholder='First Name ' type="text" />   
                         <input placeholder='Last Name ' type="text" />   
                        </div>
                        <div>
                         <input placeholder='Email ' type="text" />   
                         <input placeholder='number' type="text" />   
                        </div>
                        <div>
                         <textarea placeholder='Description' name="" id="" cols="30" rows="10"></textarea>  
                        </div>
                        <div>
                        <button>Send</button>
                        </div>
                    </div>                    
                </div>       
            </section>
         </div>
    );
};

export default Contact;