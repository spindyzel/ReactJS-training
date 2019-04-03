import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
    render(){
        return (
            <div>
                <h2>Register</h2>
                <Link to="/menu">
                    <button>submit</button>
                </Link>
            </div>
        );
    }
}

export default Register;