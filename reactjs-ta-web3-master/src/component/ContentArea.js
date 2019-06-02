import React, { Component } from 'react';

import Profile from 'Profile';
import Resume from 'Resume';
import Service from 'Service';
import Portofolio from 'Portofolio';
import Testimonial from 'Testimonial';
import Contact from 'Contact';

class ContentArea extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="pencil-content-area">
                <div class="tab-content clearfix">
                    <Profile/>
                    <Resume/>
                    <Service/>
                    <Portofolio/>
                    <Testimonial/>
                    {/* <Contact/> */}
                </div>
            </div>
        );
    }
}
 
export default ContentArea;