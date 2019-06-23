import React, { Component } from 'react';


// App component - represents the whole app
export default class About extends Component {


    render() {


        return (
            <div className="containerAbout" id="AboutUs" >
                <h1>Sobre nosotros</h1>


                <div className="row">
                    <div className="col-sm">

                        <p>Si estás pensando en Confort, Economía y Diversión, ¡Hotel GLAM es tu mejor opción!
                        </p>
                        <p>
                        Situado en el distinguido sector de Granada a pocos pasos de la zona mejor Zona Gastronómica de Cali, Boutiques de los más reconocidos diseñadores de Colombia, con los mejores Sitios de Rumba y Diversión
</p>

                    </div>

                    <div className="col-sm">

                        <ul > 
                        <h5>Nuestros Servicios Incluidos</h5>
                            <li>
                                <img className="pr-1" src="./icons/waiter.png"/>
                            Atención personalizada a nuestros Huéspedes
                            </li>

                            <li>
                            <img className="pr-1" src="./icons/bed.png"/>
                            Habitaciones completamente nuevas y confortables
                    
                            </li>
                            <li>
                            <img className="pr-1" src="./icons/wifi.png"/>
                            Internet Wifi Ilimitado – Banda Ancha
                            </li>
                            <li>
                            <img className="pr-1" src="./icons/netflix.png"/>
                            Netflix para tu Diversión las 24 Horas
                            </li>
                            <li>
                            <img className="pr-1" src="./icons/call.png"/>
                            Llamadas Nacionales Ilimitadas – Sin Costo
                            </li>
                            <li> 
                            <img className="pr-1" src="./icons/todo.png"/>
                                Programas de Diversión - Sitios de Interés 
                            </li>
                            <li>
                            <img className="pr-1" src="./icons/valet.png"/>
                            Recepción y Seguridad las 24 Horas
                            </li>
                        </ul>
                      

                    </div>

                    <div className="col-sm">
                   
                    <ul>
                    <h5>Servicios Adicionales</h5>
                        <li>
                        <img className="pr-1" src="./icons/bar.png"/>
                        Restaurante y Bar dentro del Hotel
                        </li>
                        <li>
                        <img className="pr-1" src="./icons/washingmachine.png"/>
                        Servicio de Lavandería
                            </li>
                    </ul>
                   

                    </div>


                </div>


            </div>
        );
    }
}