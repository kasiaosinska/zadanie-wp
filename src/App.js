import React, { Component } from 'react';
import './App.css';


import Block from './components/Block';
import Logo from './components/Logo';
import Jokes from './components/Jokes';

class App extends Component {
    constructor(props) {
        super(props);
    }

    // checkIfIsVisible = () => {
    //     let div = document.querySelectorAll('.myDiv')[0];
    //     let height = div.getBoundingClientRect().top;
    //
    //     console.log(height);
    // };

    // document.getElementsById('.App').appendChild(<Logo style="display:block"/>)


    render() {
        return (
          <div classID="App">
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
