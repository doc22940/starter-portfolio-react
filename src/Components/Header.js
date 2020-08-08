import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav} from 'react-bootstrap';
import './Style.css';


function Header(){

    return(

        <section className="headerClass">

            <div className="container-fluid">
                <div className="nextStyle">
                    <div className="navClass">
                    <Navbar bg="transparent" expand="md">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="#intro" style={{color:"white"}}>Home</Nav.Link>
                                <Nav.Link href="#link" style={{color:"white"}}>About</Nav.Link>
                                <Nav.Link href="#link" style={{color:"white"}}>Projects</Nav.Link>
                                <Nav.Link href="#link" style={{color:"white"}}>Contact</Nav.Link>                                
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    </div>  

                    <div className="intro">
                        <img />
                        <h1 style={{fontSize:'3.5rem'}}>Hello, I'm Arif Mohammed</h1>
                        <h4>Developer</h4>
                    </div>  

                </div>            
            </div>

        </section>

    );

}
export default Header;