import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';
import Propic from './images/1.jpg';
import {Projects} from './Projects';
import SecProj from './SectionProject';

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
                <div className="container-fluid p-0 pl-4">
                        <h1  style={{textAlign: 'center',fontSize:'3rem'}} >ABOUT ME</h1>
                    <div className="row aboutRow col-12 mt-5">
                        <div className="aboutPic col-12 col-md-3 ml-auto">
                        <img src={Propic} width="100%" height="100%" alt="Pro-pic"/>
                        </div>
                        <div className="aboutContent col-12 col-md-6">
                        <p>I'm currently pursuing B.tech in KMEA Engineering College, Edathala.<br/> 
                            Even though I'm not good in academics; by watching tutorials<br/> and practicing codes, 
                            I always try to become a good developer.<br/> Till now I have gained knowledge in Android Studio (Java), 
                            <br/>Windows Forms (C#) using Visual Studio and SQL Management Studio,<br/>HTML5, Bootstrap, CSS, JavaScript. 
                            As of now, I'm learning React, <br/>and this website is my first practice.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="projectSection">
                <SecProj project={this.state.proj}/>
            </section>
            </div>
        );

    }

}   


export default Body;