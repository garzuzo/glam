import React, { Component } from 'react';


// App component - represents the whole app
export default class Footer extends Component {


    render() {
        return (
            <div className="Footer text-center ">
<div id="footer" className="pt-3">
                <div className="row">

                    <div className="col-sm">
                        <ul>
                            <h6>Ubicación:</h6>
                            <li> Calle 13 Norte 8 – 36</li>
                            <li>Barrio Granada  </li>
                            <li>Cali – Colombia</li>
                        </ul>
                    </div>
                    <div className="col-sm">
                        <h3>TU HOGAR EN LA SUCURSAL DEL CIELO</h3>
                    </div>
                    <div className="col-sm">
                        <ul>
                            <h6>Teléfonos:</h6>
                            <li>(57) 316 – 4829002</li>
                            <li>(57) 393 – 9878</li>

                        </ul>
                    </div>

                </div>

                </div>

                <h6>©2019-Johnatan Garzón</h6>

            </div>
        );
    }
}