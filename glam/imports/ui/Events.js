import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
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
      src="./images/eventscarousel/events1.jpeg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3><T>Common.carouselEvents.title1</T></h3>
      <p><T>Common.carouselEvents.subtitle1</T></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carouselImg"
      src="https://images.pexels.com/photos/1260310/pexels-photo-1260310.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3><T>Common.carouselEvents.title2</T></h3>
      <p><T>Common.carouselEvents.subtitle2</T></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carouselImg"
      src="https://images.pexels.com/photos/1574650/pexels-photo-1574650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3><T>Common.carouselEvents.title3</T></h3>
      <p><T>Common.carouselEvents.subtitle3</T></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 
      </div>
    );
  }
}