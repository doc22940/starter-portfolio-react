import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';
import propic from './images/ProPic1.jpg'
import {Projects} from './Projects';
import SecProj from './SectionProject';
import Fade from 'react-reveal/Fade';


class Body extends Component{

    constructor(props){
        super(props);
        this.state = {
            proj : Projects
        };
    }

    render(){

        return(
            <div>
            <section id="about" className="aboutMe">
                <Fade duration={2000}>
                <div className="container-fluid p-0 pl-4">
                        <h1  style={{textAlign: 'center',fontSize:'3rem'}} >ABOUT ME</h1>
                    <div className="row aboutRow col-12 mt-5">
                        <div className="aboutPic col-12 col-md-4 col-xl-3 ml-auto">
                        <Fade duration={1500} left cascade>
                        <img style={{borderRadius:'1.5rem',boxShadow: '0 1rem 3rem rgba(4, 4, 6, 0.82)'}} src={propic} width="100%" height="100%" alt="Arif"/>
                        </Fade>
                        </div>
                        <div className="aboutContent col-12 col-md-6">
                        <Fade right >
                        <p>I'm currently pursuing B.tech in KMEA Engineering College, Edathala.<br/> 
                            Even though I'm not good in academics; by watching tutorials<br/> and practicing codes, 
                            I always try to become a good developer.<br/> Till now I have gained knowledge in Android Studio (Java), 
                            <br/>Windows Forms (C#) using Visual Studio and SQL Management Studio,<br/>HTML5, Bootstrap, CSS, JavaScript. 
                            As of now, I'm learning React, <br/>and this website is my first practice.</p>
                        </Fade>
                        </div>
                    </div>
                </div>
                </Fade>
            </section>

            <section id="projects" className="projectSection">
                <SecProj project={this.state.proj}/>
            </section>
            </div>
        );

    }

}   


export default Body;