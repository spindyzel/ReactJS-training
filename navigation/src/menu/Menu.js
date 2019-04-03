import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import CreateTraining from './CreateTraining';
import ListTraining from './ListTraining';
import Profile from './Profile';

class Menu extends Component {
    render(){
        return (
            <div>
                <h2>Menu</h2>
                <Link to="/menu/create">
                    <button>create training</button>
                </Link>
                <Link to="/menu/list">
                    <button>list training</button>
                </Link>
                <Link to="/menu/profile">
                    <button>Profile</button>
                </Link>
                <Route path="/menu/create" component={CreateTraining}/>
                <Route path="/menu/list" component={ListTraining}/>
                <Route path="/menu/profile" component={Profile}/>
            </div>
        );
    }
}

export default Menu;