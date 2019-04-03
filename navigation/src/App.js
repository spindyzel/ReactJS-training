import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Login from './pages/Login';
import Register from './pages/Register';
import NoMatch from './pages/NoMatch';
import Menu from './menu/Menu';
import CreateTraining from './menu/CreateTraining';
import ListTraining from './menu/ListTraining';
import Profile from './menu/Profile';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* Route awal dibuat exact agar tidak keluar di tiap page*/}
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          {/* Route menu tidak dibuat exact agar selalu keluar jika ada path yang menggunakan /menu/ */}
          <Route path="/menu/" component={Menu}/>
          <Route path="/menu/create" component={CreateTraining}/>
          <Route path="/menu/list" component={ListTraining}/>
          <Route path="/menu/profile" component={Profile}/>
          {/* Route 404 */}
          <Route component={NoMatch}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
