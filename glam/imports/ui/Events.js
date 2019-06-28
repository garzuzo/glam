import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
 
// App component - represents the whole app
export default class Events extends Component {
  
 
  render() {
    let carouselSize={height:"100vh"} 
    return (
      <div className="CarouselHome" id="Events" >
        <Carousel className="d-block" >
  <Carousel.Item>
    <img
      className="d-block w-100 carouselImg"
      src="https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carouselImg"
      src="https://images.pexels.com/photos/1260310/pexels-photo-1260310.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carouselImg"
      src="https://images.pexels.com/photos/1574650/pexels-photo-1574650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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