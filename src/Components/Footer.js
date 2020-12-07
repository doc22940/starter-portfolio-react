import React from 'react';
import Fade from 'react-reveal/Fade';
import './Style.css';

function Footer() {

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (

        <section className="footerSec">
            <Fade bottom duration={1400}>
                <footer className="footer">
                    <span className="arrowTop" onClick={scrollTop}><i className='fas fa-angle-double-up'></i></span>
                    <div className="row socialFooter">
                        <a className="icon" rel="noopener noreferrer" target="_blank" href="https://github.com/arifmohammedpf" style={{ margin: '0rem' }}><i className='fab fa-github'></i></a>
                        <a className="icon" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/arifmohammedpf"><i className='fab fa-linkedin'></i></a>
                        <a className="icon" rel="noopener noreferrer" target="_blank" href="mailto:arifmohammedofficial@gmail.com"><i className='fab fa-google'></i></a>
                        <a className="icon" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/arifmuhammed_0"><i className='fab fa-instagram'></i></a>
                    </div>
                    <hr width='30%' style={{ borderTop: '2px solid hsla(0,0%,100%,.1)' }} />
                    <p className="footerText">© 2020 - Developed by Arif Mohammed</p>
                </footer>
            </Fade>
        </section>

    );

}
export default Footer;