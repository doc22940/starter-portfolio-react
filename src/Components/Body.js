import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';
import propic from './images/ProPic1.jpg'
import { Projects } from './Projects';
import SecProj from './SectionProject';
import Fade from 'react-reveal/Fade';


class Body extends Component {

    constructor(props) {
        super(props);
        this.state = {
            proj: Projects
        };
    }

    render() {

        return (
            <div>
                <section id="about" className="aboutMe">
                    <Fade duration={2000}>
                        <div className="container-fluid p-0 pl-4">
                            <h1 style={{ textAlign: 'center', fontSize: '3rem' }} >ABOUT ME</h1>
                            <div className="row aboutRow col-12 mt-5"   >
                                <div className="aboutPic col-12 col-md-4 col-xl-3 ml-5">
                                    <Fade duration={1500} left cascade>
                                        <img id="profPic" src={propic} alt="Arif Mohammed" />
                                    </Fade>
                                </div>
                                <div className="aboutContent col-12 col-md-6">
                                    <Fade right >
                                        <p>I'm currently training myself to be a Full Stack Developer, and pursuing B.tech from KMEA Engineering College, Edathala.
                                        I have a great passion for programming. Watching tutorials and practicing codes,
                                        I always dive to be a good developer. Till now I have gained knowledge in Android Studio (Java),
                                        Windows Forms (C#) using Visual Studio and SQL Management, HTML5, Bootstrap, CSS, JavaScript.
                                        As of now, I'm learning React, will be a MERN Developer within no time.</p>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </section>

                <section id="projects" className="projectSection">
                    <SecProj project={this.state.proj} />
                </section>
            </div>
        );

    }

}


export default Body;