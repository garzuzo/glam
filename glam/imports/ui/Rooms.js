import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

// App component - represents the whole app
export default class Rooms extends Component {


    render() {

        let styleRoom = {
            
            width: "700px"  
        }
        let styleRoomBG = {
            backgroundColor: "#5FFF63",
            
        }
        return (
            <div className="Rooms text-center" id="Rooms">
                <h1>Habitaciones</h1>
                <Carousel style={styleRoom}>
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





                <div className="container" style={styleRoomBG}>
                    <div className="row">
                        <div className="col-sm">
                            <img className="img-fluid" style={styleRoom} src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        </div>

                        <div className="col-sm">
                            <p>Habitacion con los servicios blabla</p>
                        </div>

                        <div className="col-sm">
                            <p>Desde $90.000</p>
                        </div>
                    </div>
                </div>



                <div className="container" style={styleRoomBG}>
                    <div className="row">
                        <div className="col-sm">
                            <img className="img-fluid" style={styleRoom} src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        </div>

                        <div className="col-sm">
                            <p>Habitacion con los servicios blabla</p>
                        </div>

                        <div className="col-sm">
                            <p>Desde $90.000</p>
                        </div>
                    </div>
                </div>




            </div>
        );
    }
}