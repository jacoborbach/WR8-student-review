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

    register = () => {
        const { name, password } = this.state;
        axios.post('/auth/register', { name, password })
            .then(res => {
                this.setState({ name: '', password: '' })
                this.props.updateUser(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    login = () => {
        const { name, password } = this.state;
        axios.post('/auth/login', { name, password })
            .then(res => {
                this.setState({ name: '', password: '' })
                this.props.updateUser(res.data)
            })
            .catch(err => {
                console.log(err)
                alert(err.response.request.response)
            })
    }

    logout = () => {
        axios.get('/auth/logout')
            .then(() => {
                this.props.updateUser({})
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h1>Gotta Catch Em All</h1>
                <h3>{this.props.user.name}, welcome to dragon's lair</h3>
                <input placeholder='Name' type='text' name='name' onChange={this.handleChange} />
                <input placeholder='Password' type='text' name='password' onChange={this.handleChange} />
                <button onClick={this.register}>Register</button>
                <button onClick={this.login}>Login</button>
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default Header 