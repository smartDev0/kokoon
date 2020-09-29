import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Button, Nav, Form, NavDropdown } from 'react-bootstrap';

import './topNav.css';
class TopNav extends React.Component {
    state = {
        auth:false
    }
    componentDidMount() {
        console.log(this.props);
        if (this.props.location.pathname === '/landing') {
            this.setState({ auth: false });
        } else {
            this.setState({ auth: true });
        }
    }
    render() {
        const { auth } = this.state;
        return (
            <div>
                {auth ? (
                    <Navbar bg="light" expand="lg" className="auth-top-nav">
                        <Container>
                            <Navbar.Brand>
                                <Link to="/" className="navbar-logo-text">Kokoon.cloud</Link>
                            </Navbar.Brand>
                            <Nav className="mr-auto">
                            </Nav>
                            <Form inline>
                                <NavDropdown title="John Doe (jdoe@blue-dot.io)" className="auth-user" id="collasible-nav-dropdown" >
                                    <NavDropdown.Item onClick={() => this.props.history.push('/')}><i className="fa fa-power-off" aria-hidden="true"></i> Sign Out</NavDropdown.Item>
                                </NavDropdown>
                            </Form>
                        </Container>
                    </Navbar>
                ) : (
                    <Navbar bg="light" expand="lg" className="top-nav">
                        <Container>
                            <Navbar.Brand>
                                <Link to="/" className="navbar-logo-text">Kokoon.cloud</Link>
                            </Navbar.Brand>
                            <Nav className="mr-auto">
                            </Nav>
                            <Form inline>
                                <Link to="/auth/signin" className="sign-in">Sign in</Link>
                                <Button className="sign-up" onClick={() => this.props.history.push('/auth/signup')}>Sing up</Button>
                            </Form>
                        </Container>
                    </Navbar>
                    )}
                
            </div>
        );
    }
}

export default TopNav;