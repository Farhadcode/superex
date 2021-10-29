import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar className="navbar" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand to="/home" className="logo-style"> <span className="log-name">super</span><span className="log-name-end">Ex</span></Navbar.Brand>
                    <Navbar.Toggle className="toggle" />
                    <Navbar.Collapse className="justify-content">
                        <Nav className="nav-style">
                            <Link to="/home">Home</Link>
                            <Link to="/services">serveses</Link>
                            <Link to="/booking">Booking</Link>
                            <Link to="/contect">Contect Us</Link>
                            {/* {user?.email ?
                                <Link to="/home"> <Button onClick={logOut} className="main-btn rounded-pill"> LogOut</Button></Link> :
                                <Link to="/login"> <Button className="main-btn rounded-pill">Login </Button></Link>
                            }
                            // <br /> */}
                            {/* // <Navbar.Text>

                            //     <Link to="/home">{user?.displayName}</Link>
                            // </Navbar.Text> */}
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;