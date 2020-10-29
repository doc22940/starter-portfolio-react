import React from 'react'
import logo from '../Components/images/brandlogo.png'
import { Navbar, Nav } from 'react-bootstrap';
import './AppNavbar.css'

function scrollFunction(a) {
    const anchor = document.querySelector(a)
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

function AppNavbar() {
    return (
        <Navbar className="app-navbar" expand="md" >
            <Navbar.Brand className="ml-5">
                <img
                    onClick={() => { scrollFunction('#home') }}
                    src={logo}
                    alt="Arif Mohammed logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle className='navToggler' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" style={{ minHeight: '3rem' }}>

                    <Nav.Link onClick={() => { scrollFunction('#about') }} id="navabout">About</Nav.Link>
                    <Nav.Link onClick={() => { scrollFunction('#projects') }} id="navprojects">Projects</Nav.Link>
                    <Nav.Link onClick={() => { scrollFunction('#contact') }} id="navcontact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default AppNavbar
