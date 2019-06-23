import React, { Component } from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import { Link, animateScroll as scroll } from "react-scroll";
// App component - represents the whole app
class NavbarHome extends Component {


  render() {

    let glamIcon = { width: "80px" }
    let navbarStyle ={}// {position:"fixed",top:0, zIndex:5,color:"#FFFFFF" }
    return (
      <div className="NavbarHome"  >

        <Navbar fixed="top" id="navbarHome"  bg="light" expand="lg">
          <Navbar.Brand >
            <img src="/images/glamIcon.png" style={glamIcon}></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link >
                <Link
                  activeClass="active"
                  to="AboutUs"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Sobre nosotros
                </Link>
              </Nav.Link>
              <Nav.Link >

                <Link
                  activeClass="active"
                  to="Rooms"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Habitaciones
                </Link>

              </Nav.Link>
              <Nav.Link >

                <Link
                  activeClass="active"
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Contactanos
</Link>

              </Nav.Link>

            </Nav>
          
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavbarHome;