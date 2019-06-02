import React, { Component } from 'react';

import Header from './component/Header';
import Widget from './component/Widget';
import Footer from './component/Footer';
import MobileMenu from './component/MobileMenu';
import Profile from './component/Profile';
import Resume from './component/Resume';
import Service from './component/Service';
import Portofolio from './component/Portofolio';
import Testimonial from './component/Testimonial';
import Contact from './component/Contact';

class App extends Component {
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
                  <MobileMenu/>
                  <div className="pencil-content-area">
                    <div className="tab-content clearfix">
                      <Profile/>
                      <Resume/>
                      <Service/>
                      <Portofolio/>
                      <Testimonial/>
                      <Contact/>
                    </div>
                  </div>
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
 
export default App;
