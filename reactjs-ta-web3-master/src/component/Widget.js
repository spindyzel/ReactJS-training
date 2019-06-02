import React, { Component } from 'react';

class Widget extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="widget-area">
                <div className="social-widgect">
                    <ul>
                        <li><a href="http://behance.net/"><i className="flaticon-behance"></i></a></li>
                        <li><a href="http://facebook.com/"><i className="flaticon-facebook-logo"></i></a></li>
                        <li><a href="http://twitter.com/"><i className="flaticon-twitter"></i></a></li>
                        <li><a href="http://dribbble.com/"><i className="flaticon-dribble-logo"></i></a></li>
                        <li><a href="skype.com"><i className="flaticon-skype-logo"></i></a></li>
                    </ul>
                </div>
                <div className="print-widgect">
                    <ul>
                        <li><a href="#"><i className="flaticon-printer"></i> <span>Print</span></a></li>
                    </ul>
                </div>
                <div className="download-widgect">
                    <ul>
                        <li><a href="#"><i className="flaticon-test"></i> <span>Download</span></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default Widget;