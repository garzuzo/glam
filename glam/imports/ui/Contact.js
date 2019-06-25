import React, { Component } from 'react';
import DatePicker from 'react-date-picker'
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
// App component - represents the whole app
export default class Contact extends Component {


    constructor(props) {

        super(props);

        this.state = {
            startDate: new Date(),
            endDate: new Date(),
        
            showReserve: false,
            name: "",
            phone: "",
            totalPeople: "",
            comments: ""
        }
        this.handleReserve = this.handleReserve.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleStartDate = this.handleStartDate.bind(this);
        this.handleEndDate = this.handleEndDate.bind(this);
    }


    handleEmail() {

        let subject = this.state.name + " tiene una duda para Glam Hoteles";
        let message = "nombre:" + this.state.name + "\n telefono:" + this.state.phone + "\n correo:" + this.state.email + "\n número de personas:" + totalPeople + "Fecha de reserva:" + this.state.startDate + "-" + this.state.endDate + "\n Comentarios:" + this.state.message;

        Meteor.call('sendEmail', "garzuxo@gmail.com", this.state.email, subject, message);
    }
    handleReserve() {


        this.setState({ showReserve: !this.state.showReserve });

    }
    handleOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleStartDate(startDate) {
        this.setState({
            startDate: startDate
        });
    }
    handleEndDate(endDate) {
        this.setState({
            endDate: endDate
        });
    }
   


    render() {




        return (
            <div className="container pb-2" id="Contact" >
                <h1><T>Common.contact.title</T></h1>

                <form>
                    <div className="form-group">
                        <label htmlFor="name"><T>Common.contact.name</T></label>
                        <input className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleOnChange.bind(this)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone"><T>Common.contact.phone</T></label>
                        <input className="form-control" id="phone" name="phone" value={this.state.phone} onChange={this.handleOnChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email"><T>Common.contact.email</T></label>
                        <input type="email" className="form-control" id="email" name="email" value={this.state.email} onChange={this.handleOnChange.bind(this)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="totalPeople"><T>Common.contact.totalPeople</T></label>
                        <input type="number" className="form-control" id="totalPeople" name="totalPeople" min="1" value={this.state.totalPeople} onChange={this.handleOnChange.bind(this)} />
                    </div>
                    <br></br>
                    <div className="form-check">
                        <input type="checkbox" data-toggle="collapse" className="form-check-input" id="exampleCheck1" href="#reserve" onChange={this.handleReserve} />
                        <label className="form-check-label" htmlFor="exampleCheck1"><T>Common.contact.reserveDate</T></label>
                    </div>
                    {this.state.showReserve ?
                        <div id="reserve" key="reserve">
                            <div className="">
                                <label htmlFor="startDate"><T>Common.contact.sinceDate</T></label>
                                <DatePicker id="startDate" className="form-control" value={this.state.startDate} onChange={this.handleStartDate.bind(this)} required />
                            </div>
                            <div className="">
                                <label htmlFor="endDate"><T>Common.contact.untilDate</T></label>
                                <DatePicker id="endDate" className="form-control" value={this.state.endDate} onChange={this.handleEndDate.bind(this)} required />
                            </div>
                        </div>
                        : null}
                    <br></br>  <br></br>
                    <div className="form-group">
                        <label htmlFor="comments"><T>Common.contact.comments</T></label>
                        <textarea className="form-control" id="comments" rows="3" name="comments" value={this.state.coments} onChange={this.handleOnChange.bind(this)} ></textarea>
                    </div>
                    <button type="submit" className="btn btn-success"><T>Common.contact.send</T></button>
                </form>
            </div>
        );
    }
}