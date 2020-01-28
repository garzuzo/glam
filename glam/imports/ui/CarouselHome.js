import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
// App component - represents the whole app
export default class CarouselHome extends Component {
  
 
  render() {
    let carouselSize={width:"700px"}
    return (
      <div className="CarouselHome" id="CarouselHome" >
        <Carousel className="d-block w-100">
  <Carousel.Item>
    <img
      className="d-block w-100 carouselImg"
      src="./images/carousel/balcony2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    <h3><T>Common.carouselAboutUs.title1</T></h3>
      <p><T>Common.carouselAboutUs.subtitle1</T></p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 carouselImg"
      src="./images/carousel/livingfull.jpeg"
      alt="Second slide"
    />
    <Carousel.Caption>
    <h3><T>Common.carouselAboutUs.title1</T></h3>
      <p><T>Common.carouselAboutUs.subtitle1</T></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carouselImg"
      src="./images/carousel/livingroom1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3><T>Common.carouselAboutUs.title2</T></h3>
      <p><T>Common.carouselAboutUs.subtitle2</T></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carouselImg"
      src="./images/carousel/terrace1.jpg"
      alt="Fourt slide"
    />

    <Carousel.Caption>
    <h3><T>Common.carouselAboutUs.title3</T></h3>
      <p><T>Common.carouselAboutUs.subtitle3</T></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 
      </div>
    );
  }
}