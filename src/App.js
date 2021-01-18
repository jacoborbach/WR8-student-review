import axios from 'axios';
import { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Container from './Components/Container/Container';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    }
  }

  updateUser = (user) => {
    this.setState({
      user
    })
  }

  render() {
    return (
      <div className="App">
        <Header user={this.state.user} updateUser={this.updateUser} />
        <h1> Hello World!</h1>
        {/* <Container /> */}
      </div>
    );
  }
}

export default App;
