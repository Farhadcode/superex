import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import useAuth from '../../../../hooks/useAuth';
import useFirebase from '../../../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, handleLogout } = useFirebase();
    // console.log(user);
    return (
        <>
            <Navbar className="navbar" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className="logo-style"><Link to="/home"> <span className="log-name">super</span><span className="log-name-end">Ex</span></Link></Navbar.Brand>
                    <Navbar.Toggle className="toggle" />
                    <Navbar.Collapse className="justify-content">
                        <Nav className="nav-style">
                            <Link to="/home">Home</Link>
                            <Link to="/services">Serveses</Link>
                            {user?.email ?
                                <Link to="/admin">Admin</Link>
                                : ' '
                            }
                            {user?.email ?
                                <Link to="/myOrder">MyOrder</Link>
                                : ' '
                            }
                            {/* <Link to="/myOrder">MyOrder</Link> */}
                            {user?.email ?
                                <Link to="/home"> <button onClick={handleLogout} className="main-btn rounded-pill"> LogOut</button></Link> :
                                <Link to="/login"> <button className="main-btn rounded-pill">Login </button></Link>
                            }
                            <br />
                            <Navbar.Text>

                                <div className="user-style">
                                    <img src={user?.photoURL} alt="" />
                                    <p > {user?.displayName}</p>

                                </div>




                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;