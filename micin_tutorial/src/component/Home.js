import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import Widget from './Widget';
import Footer from './Footer';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>        
                <div className="pencile-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 acurate">
                                <div id="pencil-info">
                                <Header/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Widget/>
                </div>
                <Footer/>
            </div>
        );
    }
}
 
export default Home;