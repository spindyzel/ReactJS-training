import React, { Component } from 'react'

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="header-area">
                <div className="row">
                    <div className="col-md-2 col-sm-12">
                        <div className="logo-area">
                            <a>
                                <img src="assets/images/logos.png" alt="REACT WEB 3" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-10 col-sm-12 text-right">
                        <div className="menu-area">
                            <ul className="nav nav-pills">
                                <li className="active">
                                    <a href="#Profile" data-toggle="tab">
                                        <span className="flaticon-user"></span> Profile
                                    </a>
                                    {/* <ul>
                                        <li><a href="index2.html">Home 2</a></li>
                                    </ul> */}
                                </li>
                                <li><a href="#resume" data-toggle="tab">
                                        <span className="flaticon-application"></span> Resume</a>
                                </li>

                                <li><a href="#Services" data-toggle="tab">
                                        <span className="flaticon-layers-1"></span> Services</a>
                                </li>
                                <li><a href="#Portfolio" data-toggle="tab">
                                        <span className="flaticon-gallery-1"></span> Portfolio</a>
                                </li>
                                <li><a href="#testimonial" data-toggle="tab">
                                        <span className="flaticon-rating"></span> Testimonial</a>
                                </li>
                                <li><a href="#contact" data-toggle="tab">
                                        <span className="flaticon-chat"></span> Contact</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Header;