import React, { Component } from 'react';
import './App.css';

import Block from './components/Block';
import Logo from './components/Logo';
import Jokes from './components/Jokes';

class App extends Component {
  render() {



    return (
      <div className="App">
        <Block color={'green'} />
        <Block color={'green'} />
        <Block color={'blue'} />
        <Block color={'green'} />
        <Logo/>
        <Jokes />
      </div>
    );
  }
}

export default App;
