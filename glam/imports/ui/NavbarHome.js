import React, { Component } from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import { Link, animateScroll as scroll } from "react-scroll";
// App component - represents the whole app
class NavbarHome extends Component {


  render() {

    let glamIcon = { width: "100px" }
    let navbarStyle = {position:"fixed",top:0, zIndex:5,color:"#FFFFFF"}
    return (
      <div className="NavbarHome w-100" >

        <Navbar  className="w-100" style={navbarStyle} bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <img src="/images/glamIcon.png" style={glamIcon}></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
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