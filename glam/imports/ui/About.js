import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

// App component - represents the whole app
export default class About extends Component {


    render() {


        return (
            <div className="container About" id="AboutUs" >
                <h1><T>Common.about.title</T></h1>


                <div className="row">
                    <div className="col-sm-3">

                        <p>
                        <T>Common.about.intro.firstParagraph</T>
                        </p>
                        <p>
                        <T>Common.about.intro.secondParagraph</T>
</p>

                    </div>

                    <div className="col-sm-6">

                        <ul > 
                        <h5>
                        <T>Common.about.ourIncludedServices.title</T>
                        </h5>
                            <li>
                                <img className="pr-1" src="./icons/waiter.png"/>
                                <T>Common.about.ourIncludedServices.item1</T>
                            </li>

                            <li>
                            <img className="pr-1" src="./icons/bed.png"/>
                            <T>Common.about.ourIncludedServices.item2</T>
                    
                            </li>
                            <li>
                            <img className="pr-1" src="./icons/wifi.png"/>
                            <T>Common.about.ourIncludedServices.item3</T>
                            </li>
                            <li>
                            <img className="pr-1" src="./icons/netflix.png"/>
                            <T>Common.about.ourIncludedServices.item4</T>
                            </li>
                            <li>
                            <img className="pr-1" src="./icons/call.png"/>
                            <T>Common.about.ourIncludedServices.item5</T>
                            </li>
                            <li> 
                            <img className="pr-1" src="./icons/todo.png"/>
                            <T>Common.about.ourIncludedServices.item6</T>
                            </li>
                            <li>
                            <img className="pr-1" src="./icons/valet.png"/>
                            <T>Common.about.ourIncludedServices.item7</T>
                            </li>
                        </ul>
                      

                    </div>

                    <div className="col-sm-3">
                   
                    <ul>
                    <h5>
                    <T>Common.about.aditionalServices.title</T>
                    </h5>
                        <li>
                        <img className="pr-1" src="./icons/bar.png"/>
                        <T>Common.about.aditionalServices.item1</T>
                        </li>
                        <li>
                        <img className="pr-1" src="./icons/washingmachine.png"/>
                        <T>Common.about.aditionalServices.item2</T>
                            </li>
                    </ul>
                   

                    </div>


                </div>


            </div>
        );
    }
}