import React, { Component } from 'react';
import './App.css';
import Logo from './image/wp-logo.jpg';

import Block from './components/Block';
import Jokes from './components/Jokes';

class App extends Component {
  render() {

    showLogo = () => {

    };

    return (
      <div className="App">
        <img className="logo" src={Logo} atl="logo"/>
        <Block color={'green'} />
        <Block color={'green'} />
        <Block color={'blue'} />
        <Block color={'green'} />
        <Jokes />
      </div>
    );
  }
}

export default App;
