import React, { Component } from 'react';
import './App.css';

import Logo from './components/Logo';
import Jokes from './components/Jokes';

class App extends Component {
    render() {
        return (
            <div classID="App">
                <Logo/>
                <Jokes/>
            </div>
        );
    }
}

export default App;
