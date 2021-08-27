import React from 'react'
import { Navbar,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div>
        <Navbar expand="lg" variant="light" bg="light">
        <Container>
            <Link to='/'><Navbar.Brand >Contact List</Navbar.Brand></Link>
            <Link to='/signUp'> <Navbar.Brand >S'enregister</Navbar.Brand></Link>
            <Link to='/signIn'><Navbar.Brand >Se connecter</Navbar.Brand></Link>
            {/* <Navbar.Brand href="#">Se déconnecter</Navbar.Brand> */}
        </Container>
        </Navbar>
        </div>
    )
}
