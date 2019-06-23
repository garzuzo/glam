import React, { Component } from 'react';
import NavbarHome from './NavbarHome.js';
 import CarouselHome from './CarouselHome';
 import About from './About';
 import Rooms from './Rooms';
 import Contact from './Contact';
 import Footer from './Footer';
// App component - represents the whole app
export default class App extends Component {
  
 
  render() {
    return (
      <div className="App" id="appContainer">
         
          <NavbarHome></NavbarHome>
<CarouselHome></CarouselHome>
 <About></About>
 <Rooms></Rooms>
 <Contact></Contact>

 <Footer></Footer>
      </div>
    );
  }
}