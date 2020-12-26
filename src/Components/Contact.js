import React, { Component } from 'react';
import ContactForms from './Forms';
import './Style.css';
import contactPic from './images/contactformPic.png';

class Contact extends Component {

    render() {

        return (

            <section id="contact" className="contactSection">
                <div className="container-fluid">

                    <h1 className="contactTitle">CONTACT ME</h1>

                    <div className="row">

                        <div className="contactDescription col-12 col-md-4"
                            data-aos="zoom-out-down"
                            data-aos-delay="300"
                            data-aos-duration="1200"
                            data-aos-once="false"
                            data-aos-mirror="true"
                        >
                            <img style={{ width: "inherit" }} src={contactPic} alt="Contact" />
                        </div>


                        <ContactForms />

                    </div>
                </div>
            </section>

        );

    }

}
export default Contact;