import React from 'react';
import { Link } from 'react-router-dom';
import { Container, FormControl, Navbar, NavDropdown, Button, Nav, Form } from 'react-bootstrap';

import './topNav.css';
class TopNav extends React.Component { 
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg" className="top-nav">
                    <Container>
                        <Navbar.Brand>
                            <Link to="/" className="navbar-logo-text">Kokoon.cloud</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default TopNav;