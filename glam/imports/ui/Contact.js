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
            reservePicker: [],
            showReserve: false,
            name:"",
            phone:"",
            totalPeople:"",
            comments:""
        }
        this.handleReserve = this.handleReserve.bind(this);
    }


    handleEmail(){

let subject=this.state.name+" tiene una duda para Glam Hoteles";
let message="nombre:"+this.state.name+"\n telefono:"+this.state.phone+"\n correo:"+this.state.email+"\n número de personas:"+totalPeople+"Fecha de reserva:"+this.state.startDate+"-"+this.state.endDate+"\n Comentarios:"+this.state.message;
        
        Meteor.call('sendEmail',"garzuxo@gmail.com", this.state.email, subject, message);
    }
    handleReserve() {


        this.setState({ showReserve: !this.state.showReserve });

    }
    handleOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    componentDidMount() {

        this.state.reservePicker.push(
            <div id="reserve" key="reserve">
                <div className="">
                    <label htmlFor="datepickerStart"><T>Common.contact.sinceDate</T></label>
                    <DatePicker id="datepickerStart" className="form-control" value={this.state.startDate}  onChange={this.handleOnChange.bind(this)} required />
                </div>
                <div className="">
                    <label htmlFor="datepickerEnd"><T>Common.contact.untilDate</T></label>
                    <DatePicker id="datepickerEnd" className="form-control" value={this.state.endDate} onChange={this.handleOnChange.bind(this)} required />
                </div>
            </div>
        );

    }


    render() {
        



        return (
            <div className="container pb-2" id="Contact" >
                <h1><T>Common.contact.title</T></h1>

                <form>
                <div className="form-group">
                        <label htmlFor="name"><T>Common.contact.name</T></label>
                        <input  className="form-control" id="name"  value={this.state.name} onChange={this.handleOnChange.bind(this)} required />
                          </div>
                          <div className="form-group">
                        <label htmlFor="phone"><T>Common.contact.phone</T></label>
                        <input  className="form-control" id="phone"  value={this.state.phone} onChange={this.handleOnChange.bind(this)}  />
                          </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1"><T>Common.contact.email</T></label>
                        <input type="email" className="form-control" id="exampleInputEmail1" value={this.state.email} onChange={this.handleOnChange.bind(this)}  required />
                         </div>
                    <div className="form-group">
                        <label htmlFor="numberPeople"><T>Common.contact.totalPeople</T></label>
                        <input type="number" className="form-control" id="numberPeople" value={this.state.totalPeople} onChange={this.handleOnChange.bind(this)}  />
                    </div>
                    <br></br>
                    <div className="form-check">
                        <input type="checkbox" data-toggle="collapse" className="form-check-input" id="exampleCheck1" href="#reserve"onChange={this.handleReserve} />
                        <label className="form-check-label" htmlFor="exampleCheck1"><T>Common.contact.reserveDate</T></label>
                    </div>
                    {this.state.showReserve ? this.state.reservePicker : null}
                    <br></br>  <br></br>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1"><T>Common.contact.comments</T></label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state.coments} onChange={this.handleOnChange.bind(this)} ></textarea>
                    </div>
                    <button type="submit" className="btn btn-success"><T>Common.contact.send</T></button>
                </form>
            </div>
        );
    }
}