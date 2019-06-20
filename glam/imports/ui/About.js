import React, { Component } from 'react';

 
// App component - represents the whole app
export default class About extends Component {
  
 
  render() {

    let style={
        backgroundColor:"#7C5CFF"
    }
    return (
      <div className="container" id="AboutUs" style={style}>
       <h1>Sobre nosotros</h1>
 

 <div className="row">
<div className="col-sm">

<p>Si estás pensando en Confort, Economía y Diversión, ¡Hotel GLAM es tu mejor opción!

Situado en el distinguido sector de Granada a pocos pasos de la zona mejor Zona Gastronómica de Cali, Boutiques de los más reconocidos diseñadores de Colombia, con los mejores Sitios de Rumba y Diversión  
</p>

</div>

<div className="col-sm">
<p>Atención personalizada a nuestros Huéspedes
Habitaciones completamente nuevas, confortables para su Relajación y Confort

Internet Wifi Ilimitado – Banda Ancha
Netflix para tu Diversión las 24 Horas
Llamadas Nacionales Ilimitadas – Sin Costo
Programas de Diversión - Sitios de Interés Recepción y Seguridad las 24 Horas
</p>
    
</div>

<div className="col-sm">
<p>Restaurante y Bar dentro del Hotel
Servicio de Lavandería 
</p>
    
</div>


 </div>


      </div>
    );
  }
}