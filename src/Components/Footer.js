import React from 'react';

function Footer(){

    const scrollTop = ()=>{
        window.scrollTo({top: 0, behavior: 'smooth' });
    }

    return(

        <section className="footerSec">
            <footer className="footer">
                <a className="arrowTop" onClick={scrollTop}><i class='fas fa-angle-double-up'></i></a>
                <div className="row socialFooter">
                    <a className="icon" target="_blank" href="https://github.com/arifmohammedpf" style={{margin:'0rem'}}><i class='fab fa-github'></i></a>
                    <a className="icon" target="_blank" href="https://www.linkedin.com/in/arifmohammedpf"><i class='fab fa-linkedin'></i></a>
                    <a className="icon" target="_blank" href="mailto:arifmohammedofficial@gmail.com"><i class='fab fa-google'></i></a>
                    <a className="icon" target="_blank" href=""><i class='fab fa-instagram'></i></a> 
                </div>
                <hr width='30%' style={{borderTop:'2px solid hsla(0,0%,100%,.1)'}}/>
                <p className="footerText">© 2020 - Developed by Arif Mohammed</p>
            </footer>
        </section>

    );

}
export default Footer;