import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="footer-area">
                <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                    <div className="copyright-area">
                        <p>&copy; 2018 Pencil. All rights reserved.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
         );
    }
}
 
export default Footer;