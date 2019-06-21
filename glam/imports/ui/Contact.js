import React, { Component } from 'react';
import DatePicker from 'react-date-picker'

// App component - represents the whole app
export default class Contact extends Component {


    constructor(props) {

        super(props);

        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            reservePicker: [],
            showReserve: false
        }
        this.handleReserve = this.handleReserve.bind(this);
    }

    handleReserve() {


        this.setState({ showReserve: !this.state.showReserve });

    }

    componentDidMount() {

        this.state.reservePicker.push(
            <div id="reserve" key="reserve">
                <div className="">
                    <label htmlFor="datepickerStart">Desde</label>
                    <DatePicker id="datepickerStart" className="form-control" value={this.state.startDate} required />
                </div>
                <div className="">
                    <label htmlFor="datepickerEnd">Hasta</label>
                    <DatePicker id="datepickerEnd" className="form-control" value={this.state.endDate} required />
                </div>
            </div>
        );

    }


    render() {
        



        return (
            <div className="containerContact" id="Contact" >
                <h1>Contactanos</h1>

                <form>
                <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input  className="form-control" id="name"  placeholder="Ingresa tu nombre" required />
                          </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Correo electrónico</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"  placeholder="Ingresa tu correo" required />
                         </div>
                    <div className="form-group">
                        <label htmlFor="numberPeople">Número de personas</label>
                        <input type="number" className="form-control" id="numberPeople"  />
                    </div>
                    <br></br>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={this.handleReserve} />
                        <label className="form-check-label" htmlFor="exampleCheck1">Fecha de reserva</label>
                    </div>
                    {this.state.showReserve ? this.state.reservePicker : null}
                    <br></br>  <br></br>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">¡Cuentamos!</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        );
    }
}