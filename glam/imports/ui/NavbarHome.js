import React, { Component } from 'react';
import { Button, Navbar, Nav, NavDropdown, MenuItem, Form, FormControl, Dropdown } from 'react-bootstrap'
import { Link, animateScroll as scroll } from "react-scroll";

import i18n from 'meteor/universe:i18n';
i18n.setLocale('es-ES');
const T = i18n.createComponent();
// App component - represents the whole app
class NavbarHome extends Component {

  constructor(props) {
    super(props);



  }



  handleSelect(eventKey) {

    event.preventDefault();
    switch (eventKey) {
      case "5.1":
        i18n.setLocale('es-ES');
        console.log(i18n.__("Common", "hola"))
        break;
      case "5.2":
        i18n.setLocale('en-US');
        console.log(i18n.getLocale())
        break;
      default:
        i18n.setLocale('es-ES');
        break;
    }
  }
  render() {

    let glamIcon = { width: "100px" }
    let navbarStyle = {}// {position:"fixed",top:0, zIndex:5,color:"#FFFFFF" }
    return (
      <div className="NavbarHome"  >

        <Navbar collapseOnSelect expand="lg" fixed="top" id="navbarHome" bg="light">

     
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto pl-5 text-center">
            <Nav.Link >
              <Link
                activeClass="active"
                to="AboutUs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <T>Common.navbar.aboutUs</T>

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
                <T>Common.navbar.rooms</T>
              </Link>

            </Nav.Link>

            </Nav>


          <Navbar.Brand className="mr-center  text-center ">
            <img className="brandNavbar img-fluid text-center"  src="/images/glamIcon.png"></img>
         
                <h5>Barrio Granada  </h5>
                
            
          </Navbar.Brand>
          <Nav className="">
          <Nav.Link >
              <Link
                activeClass="active"
                to="Events"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>

                <T>Common.navbar.events</T>
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

                <T>Common.navbar.contact</T>
              </Link>

            </Nav.Link>



          </Nav>

          <Nav className="ml-auto text-center">
            <NavDropdown eventKey={5} title={<T>Common.navbar.selectLanguage</T>} id="nav-dropdown" onSelect={this.handleSelect.bind(this)}>
              <Dropdown.Item eventKey={5.1}><img src="./icons/es.png" />ES</Dropdown.Item>
              <Dropdown.Item eventKey={5.2} ><img src="./icons/en.png" />EN</Dropdown.Item>

            </NavDropdown>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavbarHome;