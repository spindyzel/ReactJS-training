import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './component/Home';
import Header from './component/Header';
import Widget from './component/Widget';
import Footer from './component/Footer';
import Profile from './component/Profile';
import Resume from './component/Resume';
import Service from './component/Service';
import Portofolio from './component/Portofolio';
import Testimonial from './component/Testimonial';
import Contact from './component/Contact';
import NoMatch from './component/NoMatch';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <BrowserRouter>
        <Switch>
          {/* Route awal dibuat exact agar tidak keluar di tiap page*/}
          <Route path="/" component={Home}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/resume" component={Resume}/>
          <Route path="/service" component={Service}/>
          <Route path="/portofolio" component={Portofolio}/>
          <Route path="/testimonial" component={Testimonial}/>
          <Route path="/contact" component={Contact}/>        
          {/* Route 404 */}
          <Route component={NoMatch}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
 
export default App;
