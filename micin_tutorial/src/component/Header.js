import React, { Component } from 'react';
import { Link,NavLink,Route } from 'react-router-dom';

import Profile from './Profile';
import Resume from './Resume';
import Service from './Service';
import Portofolio from './Portofolio';
import Testimonial from './Testimonial';
import Contact from './Contact';
import MobileMenu from './MobileMenu';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
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
                                    <Link to="/profile" data-toggle="tab">
                                        <span className="flaticon-user"></span> Profile
                                    </Link>
                                </li>
                                <li><Link to="/resume" data-toggle="tab">
                                        <span className="flaticon-application"></span> Resume</Link>
                                </li>

                                <li><NavLink to="/service" data-toggle="tab">
                                        <span className="flaticon-layers-1"></span> Services</NavLink>
                                </li>
                                <li><NavLink to="portofolio" data-toggle="tab">
                                        <span className="flaticon-gallery-1"></span> Portofolio</NavLink>
                                </li>
                                <li><NavLink to="testimonial" data-toggle="tab">
                                        <span className="flaticon-rating"></span> Testimonial</NavLink>
                                </li>
                                <li><NavLink to="contact" data-toggle="tab">
                                        <span className="flaticon-chat"></span> Contact</NavLink>
                                </li>                           
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
                <MobileMenu/>
                
                <main>
                <div className="pencil-content-area">
                    <div className="tab-content clearfix">
                        <Route path="/profile" component={Profile}/>
                        <Route path="/resume" component={Resume}/>
                        <Route path="/service" component={Service}/>
                        <Route path="/portofolio" component={Portofolio}/>
                        <Route path="/testimonial" component={Testimonial}/>
                        <Route path="/contact" component={Contact}/> 
                    </div>
                </div>
                </main> 
            </React.Fragment>
        );
    }
}
 
export default Header;