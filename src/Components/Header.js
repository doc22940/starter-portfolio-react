import React from 'react';
import './Header.css';


function Header() {

    return (

        <section id="home" className="headerClass">

            <div className="container-fluid headerDiv">

                <div className="intro"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1200"
                    data-aos-once="false"
                >
                    <h1 className="introHead">Hello, I'm <span style={{ color: "#fc8621" }}>Arif Mohammed</span>.</h1>
                    <h4>Developer</h4>
                </div>


                <div className="row socialFooter"
                    data-aos="fade-down"
                    data-aos-delay="500"
                    data-aos-duration="1200"
                    data-aos-once="false"
                >
                    <a className="icon" rel="noopener noreferrer" target="_blank" href="https://github.com/arifmohammedpf" style={{ margin: '0rem' }}><i className='fab fa-github'></i></a>
                    <a className="icon" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/arifmohammedpf"><i className='fab fa-linkedin'></i></a>
                    <a className="icon" rel="noopener noreferrer" target="_blank" href="mailto:arifmohammedofficial@gmail.com"><i className='fab fa-google'></i></a>
                    <a className="icon" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/arifmuhammed_0"><i className='fab fa-instagram'></i></a>
                </div>

            </div>

        </section>

    );

}
export default Header;