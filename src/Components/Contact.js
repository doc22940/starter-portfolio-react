import React,{Component} from 'react';
import ContactForms from './Forms';

class Contact extends Component{

    render(){

        return(

            <section id="contact" className="contactSection">
                <div className="container-fluid">
                    <h1 className="contactTitle">CONTACT ME</h1>
                    <div className="row">
                        <div className="contactDescription col-12 col-md-5">
                            <h2>Hey Guys!</h2>
                            <p style={{fontSize:'1.4rem'}}>Any message for me ?<br/>
                            Any suggestions to improve me ?<br/>
                            Feel free to submit your precious good advices.
                        </p>
                        </div>
                        <ContactForms/>
                    </div>
                </div>
            </section>

        );

    }

}
export default Contact;