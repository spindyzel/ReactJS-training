import React, { Component } from 'react';

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="tab-pane pt-page-moveFromLeft" id="contact">
                <div className="contact-area">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="contact-left">
                            
                                <div className="map-area">
                                    <div id="map"></div>
                                </div>
                                
                                <div className="about-info">
                                    <ul>
                                        <li><i className="flaticon-user"></i> <span>Name :</span> Allen
                                            Alex</li>
                                        <li><i className="flaticon-calendar"></i> <span>Date of birth
                                                :</span>June 8, 1980</li>
                                        <li><i className="flaticon-placeholder"></i> <span>Address :
                                            </span>San Francisco CA 94105 USA
                                        </li>
                                        <li><i className="flaticon-phone-call"></i> <span>Phone :
                                            </span> +1-222-333-4050</li>
                                        <li><i
                                                className="flaticon-message"></i><span>Email:</span>themeforest@gmail.com
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="contact-form">
                                <h3>Let's Keep in Touch</h3>
                                <form action="#">
                                    <div className="input-grup">
                                        <input type="text" placeholder="Enter your Name" id="name"
                                            name="Enter your Name"/>
                                        <input type="text" placeholder="Company " id="Company"
                                            name="Companyname"/>
                                        <input type="email" placeholder="Enter Your Email address "
                                            id="email" name="email"/>
                                        <input type="text" placeholder="Enter your phone Number"
                                            id="phonenumber" name="phonenumber"/>
                                    </div>
                                    <div className="checkbox-grup">
                                        <div className="single-check">
                                            <input type="checkbox" id="Webdesign"/>
                                            <label htmlFor="Webdesign">Web design</label>
                                        </div>
                                        <div className="single-check">
                                            <input type="checkbox" id="Graphicdesign"/>
                                            <label htmlFor="Graphicdesign">Graphic design</label>
                                        </div>
                                        <div className="single-check">
                                            <input type="checkbox" id="uxdesign"/>
                                            <label htmlFor="uxdesign">UX Design</label>
                                        </div>
                                        <div className="single-check">
                                            <input type="checkbox" id="Gamedesign"/>
                                            <label htmlFor="Gamedesign">Game design</label>
                                        </div>
                                        <div className="single-check">
                                            <input type="checkbox" id="WebDevelopment"/>
                                            <label htmlFor="WebDevelopment">Web Development</label>
                                        </div>
                                        <div className="single-check">
                                            <input type="checkbox" id="UIDesign"/>
                                            <label htmlFor="UIDesign">UI Design</label>
                                        </div>
                                    </div>
                                    <div className="messages-area">
                                        <textarea name="message" id="message" cols="30" rows="10"
                                            placeholder="Write your message"></textarea>
                                    </div>
                                    <div className="submit-btn text-right">
                                        <button className="btn ">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Contact;