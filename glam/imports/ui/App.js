import React, { Component } from 'react';
import NavbarHome from './NavbarHome.js';
 import CarouselHome from './CarouselHome';
 import About from './About';
 import Rooms from './Rooms';
 import Contact from './Contact';
 import Footer from './Footer';
 import Events from './Events';
// App component - represents the whole app
export default class App extends Component {
  
 
  render() {
    return (
      <div className="App" id="appContainer">
         
          <NavbarHome></NavbarHome>
<CarouselHome></CarouselHome>
 <About></About>
 <Rooms></Rooms>
 <Events></Events>
 <Contact></Contact>

 <Footer></Footer>
      </div>
    );
  }
}