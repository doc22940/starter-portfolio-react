import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav} from 'react-bootstrap';
import './Style.css';


function Header(){

    function scroll(a){
        const anchor = document.querySelector(a)
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    return(

        <section id="home" className="headerClass">

            <div className="container-fluid">
            <div className="navClass">
                    <Navbar bg="transparent" expand="md">
                        <Navbar.Toggle className='navToggler' aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto" style={{minHeight: '3rem'}}>
                                
                                <Nav.Link onClick={()=>{scroll('#about')}} id="navabout">About</Nav.Link>
                                <Nav.Link onClick={()=>{scroll('#projects')}} id="navprojects">Projects</Nav.Link>
                                <Nav.Link onClick={()=>{scroll('#contact')}} id="navcontact">Contact</Nav.Link>                                
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    </div>  

                    <div className="intro">
                        <h1 style={{fontSize:'3.5rem'}}>Hello, I'm Arif Mohammed</h1>
                        <h4>Developer</h4>
                    </div>           
            </div>

        </section>

    );

}
export default Header;