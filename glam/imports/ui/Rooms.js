import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

// App component - represents the whole app
export default class Rooms extends Component {


    render() {

        let styleRoom = {
            
            width: "700px"  
        }
       
        return (
            <div className="Rooms text-center" id="Rooms">
                <h1>Habitaciones</h1>
                <Carousel className="d-block w-100" style={styleRoom}>
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

<h2>¡Encuentra lo que necesitas!</h2>



                <div className="containerRooms" >
                    <div className="row">
                        <div className="col-sm">
                            <img className="img-fluid" style={styleRoom} src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        </div>

                        <div className="col-sm">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet tortor risus. Vivamus et tellus urna. Curabitur id lorem finibus, gravida urna vitae, elementum quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque lacinia gravida sapien, vitae venenatis nisl faucibus vitae. Vivamus fringilla metus leo, at rhoncus metus euismod nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec mollis nunc nisl, sit amet hendrerit magna congue eget. Sed ullamcorper cursus orci at efficitur. Sed odio lorem, bibendum sed interdum id, aliquam vitae quam. Praesent eget mi porttitor, consectetur felis et, elementum eros.</p>
                        </div>

                        <div className="col-sm">
                            <p>Desde $90.000</p>
                        </div>
                    </div>
                </div>
<br></br>


                <div className="containerRooms">
                    <div className="row">
                        <div className="col-sm">
                            <img className="img-fluid" style={styleRoom} src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        </div>

                        <div className="col-sm">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet tortor risus. Vivamus et tellus urna. Curabitur id lorem finibus, gravida urna vitae, elementum quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque lacinia gravida sapien, vitae venenatis nisl faucibus vitae. Vivamus fringilla metus leo, at rhoncus metus euismod nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec mollis nunc nisl, sit amet hendrerit magna congue eget. Sed ullamcorper cursus orci at efficitur. Sed odio lorem, bibendum sed interdum id, aliquam vitae quam. Praesent eget mi porttitor, consectetur felis et, elementum eros.</p>
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