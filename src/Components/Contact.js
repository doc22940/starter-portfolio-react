import React, { Component } from 'react';
import ContactForms from './Forms';
import Fade from 'react-reveal/Fade';
import './Style.css';
import contactPic from './images/contactformPic.png';

class Contact extends Component {

    render() {

        return (

            <section id="contact" className="contactSection">
                <div className="container-fluid">
                    <Fade duration={1500}>
                        <h1 className="contactTitle">CONTACT ME</h1>
                    </Fade>
                    <div className="row">
                        <Fade duration={1300} left>
                            <div className="contactDescription col-12 col-md-4">
                                <img style={{ width: "inherit" }} src={contactPic} alt="Contact" />
                            </div>
                        </Fade>

                        <ContactForms />

                    </div>
                </div>
            </section>

        );

    }

}
export default Contact;