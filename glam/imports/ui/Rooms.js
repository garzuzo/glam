import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
// App component - represents the whole app
export default class Rooms extends Component {


    render() {

        let styleRoom = {

            width: "700px"
        }

        return (
            <div className="Rooms " id="Rooms">

                <Carousel className="d-block w-100" style={styleRoom}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carouselImg"
                            src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940"
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
                            src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940"
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
                            src="https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <h1><T>Common.rooms.title</T></h1>



                <div className="containerRooms pb-2" >
                    <div className="row">
                        <div className="col-sm">
                            <img className="img-fluid" style={styleRoom} src="https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        </div>

                        <div className="col-sm">
                            <p><T>Common.rooms.description</T></p>
                        </div>

                        <div className="col-sm">
                            <p><T>Common.rooms.totalBeds</T></p>
                            <p><T>Common.rooms.totalPeople</T></p>

                            <ul>
                                <h5><T>Common.rooms.services.servicesTitle</T></h5>
                                <li>
                                    <T>Common.rooms.services.item1</T>


                                </li>
                                <li>
                                    <T>Common.rooms.services.item2</T>

                                </li>
                                <li>
                                    <T>Common.rooms.services.item3</T>

                                </li>
                                <li>
                                    <T>Common.rooms.services.item4</T>

                                </li>
                                <li>
                                    <T>Common.rooms.services.item5</T>

                                </li>
                                <li>
                                    <T>Common.rooms.services.item6</T>
                                </li>
                            </ul>
                            <p>
                                <T>Common.rooms.services.price</T>

                            </p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="containerRooms pb-2" >
                    <div className="row">
                        <div className="col-sm">
                            <img className="img-fluid" style={styleRoom} src="https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        </div>

                        <div className="col-sm">
                            <p><T>Common.rooms.description</T></p>
                        </div>

                        <div className="col-sm">
                            <p><T>Common.rooms.totalBeds</T></p>
                            <p><T>Common.rooms.totalPeople</T></p>

                            <ul>
                                <h5><T>Common.rooms.services.servicesTitle</T></h5>
                                <li>
                                    <T>Common.rooms.services.item1</T>


                                </li>
                                <li>
                                    <T>Common.rooms.services.item2</T>

                                </li>
                                <li>
                                    <T>Common.rooms.services.item3</T>

                                </li>
                                <li>
                                    <T>Common.rooms.services.item4</T>

                                </li>
                                <li>
                                    <T>Common.rooms.services.item5</T>

                                </li>
                                <li>
                                    <T>Common.rooms.services.item6</T>
                                </li>
                            </ul>
                            <p>
                                <T>Common.rooms.services.price</T>

                            </p>
                        </div>
                    </div>
                </div>
                <hr></hr>

            </div>
        );
    }
}