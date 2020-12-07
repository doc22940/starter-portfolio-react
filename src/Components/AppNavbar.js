import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import './AppNavbar.css'

function scrollFunction(a) {
    const anchor = document.querySelector(a)
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

function AppNavbar() {
    return (
        <Navbar bg="dark" variant="dark" className="app-navbar" expand="md" >
            <div className="container">
                <Navbar.Brand className="nav-brand" onClick={() => { scrollFunction("#home") }}>ARIF MOHAMMED</Navbar.Brand>
                <Navbar.Toggle className='navToggler' aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" style={{ minHeight: '3rem' }}>

                        <Nav.Link onClick={() => { scrollFunction('#about') }} id="navabout">About</Nav.Link>
                        <Nav.Link onClick={() => { scrollFunction('#projects') }} id="navprojects">Projects</Nav.Link>
                        <Nav.Link onClick={() => { scrollFunction('#contact') }} id="navcontact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default AppNavbar
