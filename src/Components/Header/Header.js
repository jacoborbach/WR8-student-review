import { Component } from 'react';
import axios from 'axios';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [`${e.target.name}`]: e.target.value })
    }

    render() {
        return (
            <div>
                <h1>Gotta Catch Em All</h1>
                <input placeholder='Name' name='name' onChange={this.handleChange} />
                <input placeholder='Password' name='password' onChange={this.handleChange} />
                <button>Register</button>
                <button>Login</button>
                <button>Logout</button>
            </div>
        )
    }
}

export default Header 