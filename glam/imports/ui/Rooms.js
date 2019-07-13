import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
// App component - represents the whole app
export default class Rooms extends Component {


    render() {

        let styleCarousel = {

            width: "500px"
        }
        let styleRoom = {
            height: "317px",
            width: "353px",
            borderRadius:"10px"
        }

        return (
            <div className="Rooms " id="Rooms">

                <Carousel className="d-block w-100" style={styleCarousel}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carouselImg"
                            src="./images/roomscarousel/catroom.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3><T>Common.carouselRooms.title1</T></h3>
                            <p><T>Common.carouselRooms.subtitle1</T></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carouselImg"
                            src="./images/roomscarousel/secondfloor.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3><T>Common.carouselRooms.title2</T></h3>
                            <p><T>Common.carouselRooms.subtitle2</T></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carouselImg"
                            src="./images/roomscarousel/thirdfloor.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3><T>Common.carouselRooms.title3</T></h3>
                            <p><T>Common.carouselRooms.subtitle3</T></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <div className="container" >
                    <h1><T>Common.rooms.title</T></h1>

                    <br></br>

                    <div className="containerRooms pb-2" >
                        <div className="row">

                            <div className="col-lg-4">
                                <h5><T>Common.rooms.room1.title</T></h5>
                                <img className="img-fluid" style={styleRoom} src="./images/rooms/cabingreen.jpg" />
                            </div>

                            <div className="col-lg-4">
                                <p><T>Common.rooms.room1.description</T></p>
                            </div>

                            <div className="col-lg-4">
                                <p><T>Common.rooms.room1.totalBeds</T></p>
                                <p><T>Common.rooms.room1.totalPeople</T></p>

                                <ul>
                                    <h5><T>Common.rooms.room1.services.servicesTitle</T></h5>
                                    <li>
                                        <T>Common.rooms.room1.services.item1</T>


                                    </li>
                                    <li>
                                        <T>Common.rooms.room1.services.item2</T>

                                    </li>
                                    <li>
                                        <T>Common.rooms.room1.services.item3</T>

                                    </li>
                                   
                                </ul>
                                <p>
                                    <T>Common.rooms.room1.services.price</T>

                                </p>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="containerRooms pb-2" >
                        <div className="row">
                            <div className="col-sm">
                                <h5><T>Common.rooms.room2.title</T></h5>
                                <img className="img-fluid" style={styleRoom} src="./images/rooms/cabinblue.jpg" />
                            </div>

                            <div className="col-sm">
                                <p><T>Common.rooms.room2.description</T></p>
                            </div>

                            <div className="col-sm">
                                <p><T>Common.rooms.room2.totalBeds</T></p>
                                <p><T>Common.rooms.room2.totalPeople</T></p>

                                <ul>
                                    <h5><T>Common.rooms.room2.services.servicesTitle</T></h5>
                                    <li>
                                        <T>Common.rooms.room2.services.item1</T>


                                    </li>
                                    <li>
                                        <T>Common.rooms.room2.services.item2</T>

                                    </li>
                                    <li>
                                        <T>Common.rooms.room2.services.item3</T>

                                    </li>
                                   
                                </ul>
                                <p>
                                    <T>Common.rooms.room2.services.price</T>

                                </p>
                            </div>
                        </div>
                    </div>
                    <hr></hr>



                    <div className="containerRooms pb-2" >
                        <div className="row">
                            <div className="col-sm">
                                <h5><T>Common.rooms.room3.title</T></h5>
                                <img className="img-fluid" style={styleRoom} src="./images/rooms/cat.jpg" />
                            </div>


                            <div className="col-sm">
                                <p><T>Common.rooms.room3.description</T></p>
                            </div>

                            <div className="col-sm">
                                <p><T>Common.rooms.room3.totalBeds</T></p>
                                <p><T>Common.rooms.room3.totalPeople</T></p>

                                <ul>
                                    <h5><T>Common.rooms.room3.services.servicesTitle</T></h5>
                                    <li>
                                        <T>Common.rooms.room3.services.item1</T>


                                    </li>
                                    <li>
                                        <T>Common.rooms.room3.services.item2</T>

                                    </li>
                                    <li>
                                        <T>Common.rooms.room3.services.item3</T>

                                    </li>
                                    <li>
                                        <T>Common.rooms.room3.services.item4</T>

                                    </li>
                                    <li>
                                        <T>Common.rooms.room3.services.item5</T>

                                    </li>
                                    
                                </ul>
                                <p>
                                    <T>Common.rooms.room3.services.price</T>

                                </p>
                            </div>
                        </div>
                    </div>
                    <hr></hr>




                    <div className="containerRooms pb-2" >
                        <div className="row">
                            <div className="col-sm">

                                <h5><T>Common.rooms.room4.title</T></h5>
                                <img className="img-fluid" style={styleRoom} src="./images/rooms/cristorey.jpg" />
                            </div>

                            <div className="col-sm">
                                <p><T>Common.rooms.room4.description</T></p>
                            </div>

                            <div className="col-sm">
                                <p><T>Common.rooms.room4.totalBeds</T></p>
                                <p><T>Common.rooms.room4.totalPeople</T></p>

                                <ul>
                                    <h5><T>Common.rooms.room4.services.servicesTitle</T></h5>
                                    <li>
                                        <T>Common.rooms.room4.services.item1</T>


                                    </li>
                                    <li>
                                        <T>Common.rooms.room4.services.item2</T>

                                    </li>
                                    <li>
                                        <T>Common.rooms.room4.services.item3</T>

                                    </li>
                                    <li>
                                        <T>Common.rooms.room4.services.item4</T>

                                    </li>
                                    <li>
                                        <T>Common.rooms.room4.services.item5</T>

                                    </li>
                                   
                                </ul>
                                <p>
                                    <T>Common.rooms.room4.services.price</T>

                                </p>
                            </div>
                        </div>
                    </div>
                    <hr></hr>



                    <div className="containerRooms pb-2" >
                        <div className="row">
                            <div className="col-sm">
                                <h5><T>Common.rooms.room5.title</T></h5>
                                <img className="img-fluid" style={styleRoom} src="./images/rooms/belalcazar.jpg" />
                            </div>


                            <div className="col-sm">
                                <p><T>Common.rooms.room5.description</T></p>
                            </div>

                            <div className="col-sm">
                                <p><T>Common.rooms.room5.totalBeds</T></p>
                                <p><T>Common.rooms.room5.totalPeople</T></p>

                                <ul>
                                    <h5><T>Common.rooms.room5.services.servicesTitle</T></h5>
                                    <li>
                                        <T>Common.rooms.room5.services.item1</T>


                                    </li>
                                    <li>
                                        <T>Common.rooms.room5.services.item2</T>

                                    </li>
                                    <li>
                                        <T>Common.rooms.room5.services.item3</T>

                                    </li>
                                    <li>
                                        <T>Common.rooms.room5.services.item4</T>

                                    </li>
                                    <li>
                                        <T>Common.rooms.room5.services.item5</T>

                                    </li>
                                    
                                </ul>
                                <p>
                                    <T>Common.rooms.room5.services.price</T>

                                </p>
                            </div>
                        </div>
                    </div>
                    <hr></hr>




                </div>
                <hr></hr>





            </div >
        );
    }
}