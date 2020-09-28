import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Button, Nav, Form } from 'react-bootstrap';

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
                        <Nav className="mr-auto">
                        </Nav>
                        <Form inline>
                            <Link to="/" className="sign-in">Sign in</Link>
                            <Button className="sign-up">Sing up</Button>
                        </Form>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default TopNav;