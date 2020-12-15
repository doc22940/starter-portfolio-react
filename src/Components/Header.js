import React from 'react';
import Fade from 'react-reveal/Fade';
import './Header.css';


function Header() {

    return (

        <section id="home" className="headerClass">

            <div className="container-fluid headerDiv">
                <Fade delay={1300} cascade>
                    <div className="intro">
                        <h1 className="introHead">Hello, I'm Arif Mohammed</h1>
                        <h4>Developer</h4>
                    </div>
                </Fade>
                <Fade delay={1800} bottom duration={1400}>
                    <div className="row socialFooter">
                        <a className="icon" rel="noopener noreferrer" target="_blank" href="https://github.com/arifmohammedpf" style={{ margin: '0rem' }}><i className='fab fa-github'></i></a>
                        <a className="icon" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/arifmohammedpf"><i className='fab fa-linkedin'></i></a>
                        <a className="icon" rel="noopener noreferrer" target="_blank" href="mailto:arifmohammedofficial@gmail.com"><i className='fab fa-google'></i></a>
                        <a className="icon" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/arifmuhammed_0"><i className='fab fa-instagram'></i></a>
                    </div>
                </Fade>
            </div>

        </section>

    );

}
export default Header;