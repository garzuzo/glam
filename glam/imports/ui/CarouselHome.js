import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
 
// App component - represents the whole app
export default class CarouselHome extends Component {
  
 
  render() {
    let carouselSize={width:"700px"}
    return (
      <div className="CarouselHome" id="CarouselHome" >
        <Carousel className="d-block w-100">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/1531672/pexels-photo-1531672.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 
      </div>
    );
  }
}