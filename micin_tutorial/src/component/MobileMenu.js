import React, { Component } from 'react';

class MobileMenu extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="mobile-menu-area acurate">
                <div className="container margin-15">
                    <div className="row ">
                        <div className="col-md-12">
                            <div className="mobile-menu">
                                <nav id="dropdown">
                                    <ul className="nav nav-pills">
                                        <li className="active"> <a href="#Profile" data-toggle="tab"><span
                                                className="flaticon-user"></span>
                                            Profile</a>
                                        {/* <ul>
                                            <li><a href="index2.html">home 2</a></li>
                                        </ul> */}
                                        </li>
                                        <li><a href="#resume" data-toggle="tab"><span
                                                    className="flaticon-application"></span> Resume</a>
                                        </li>
                                        <li><a href="#Services" data-toggle="tab"><span
                                                    className="flaticon-layers-1"></span> Services</a>
                                        </li>
                                        <li><a href="#Portfolio" data-toggle="tab"><span
                                                    className="flaticon-gallery-1"></span>
                                                Portfolio</a></li>
                                        <li><a href="#testimonial" data-toggle="tab"><span
                                                    className="flaticon-rating"></span>
                                                Testimonial</a></li>
                                        <li><a href="#contact" data-toggle="tab"><span
                                                    className="flaticon-chat"></span> Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default MobileMenu;