import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Login extends Component {
    render(){
        return (
            <div>
                <h2>Login</h2>
                <Link to="/menu/create">
                    <button>submit</button>
                </Link>
            </div>
        );
    }
}

export default Login;