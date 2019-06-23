import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

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
                            className="d-block w-100"
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
                            className="d-block w-100"
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
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <h1>¡Encuentra la habitación que necesitas!</h1>



                <div className="containerRooms pb-2" >
                    <div className="row">
                        <div className="col-sm">
                            <img className="img-fluid" style={styleRoom} src="https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        </div>

                        <div className="col-sm">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet tortor risus. Vivamus et tellus urna. Curabitur id lorem finibus, gravida urna vitae, elementum quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque lacinia gravida sapien, vitae venenatis nisl faucibus vitae. Vivamus fringilla metus leo, at rhoncus metus euismod nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec mollis nunc nisl, sit amet hendrerit magna congue eget. Sed ullamcorper cursus orci at efficitur. Sed odio lorem, bibendum sed interdum id, aliquam vitae quam. Praesent eget mi porttitor, consectetur felis et, elementum eros.</p>
                        </div>

                        <div className="col-sm">
                            <p>  Número de Camas:
                                2 Matrimoniales</p>
                            <p>Número de Personas: 4</p>

                            <ul>
                                <h5>Servicios y Comodidades:</h5>
                                <li>
                                    •	Desayuno P.A.M


                            </li>
                                <li>
                                    •	Aire Acondicionado (A.A.)

</li>
                                <li>
                                    •	Wifi – Ilimitado

</li>
                                <li>
                                    •	Smart TV con Netflix

</li>
                                <li>
                                    •	Baño Privado

</li>
                                <li>
                                    •	Llamadas Nacionales Ilimitadas
</li>
                            </ul>
                            <p>Desde $90.000</p>
                        </div>
                    </div>
                </div>
          

<hr></hr>
                <div className="containerRooms">
                    <div className="row">
                        <div className="col-sm">
                            <img className="img-fluid" style={styleRoom} src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        </div>

                        <div className="col-sm">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet tortor risus. Vivamus et tellus urna. Curabitur id lorem finibus, gravida urna vitae, elementum quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque lacinia gravida sapien, vitae venenatis nisl faucibus vitae. Vivamus fringilla metus leo, at rhoncus metus euismod nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec mollis nunc nisl, sit amet hendrerit magna congue eget. Sed ullamcorper cursus orci at efficitur. Sed odio lorem, bibendum sed interdum id, aliquam vitae quam. Praesent eget mi porttitor, consectetur felis et, elementum eros.</p>
                        </div>

                        <div className="col-sm">

                            <p>  Número de Camas:
                                2 Matrimoniales</p>
                            <p>Número de Personas: 4</p>

                            <ul>
                                <h5>Servicios y Comodidades:</h5>
                                <li>
                                    •	Desayuno P.A.M


                            </li>
                                <li>
                                    •	Aire Acondicionado (A.A.)

</li>
                                <li>
                                    •	Wifi – Ilimitado

</li>
                                <li>
                                    •	Smart TV con Netflix

</li>
                                <li>
                                    •	Baño Privado

</li>
                                <li>
                                    •	Llamadas Nacionales Ilimitadas
</li>
                            </ul>
                            <p>Desde $90.000</p>
                        </div>
                    </div>
                </div>




            </div>
        );
    }
}