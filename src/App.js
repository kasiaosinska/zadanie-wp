import React, { Component } from 'react';
import './App.css';
import 'intersection-observer'; // optional polyfill
import Observer from '@researchgate/react-intersection-observer';


import Block from './components/Block';
import Logo from './components/Logo';
import Jokes from './components/Jokes';

class App extends Component {
    constructor(props) {
        super(props);
    }


    handleIntersection(event) {
        console.log(event.isIntersecting);
        console.log("I'm in viewport");

        let logo = document.querySelector('.logo');

        if(event.isIntersecting) {
            logo.style.display = 'block';
        }
        else {
            logo.style.display = 'none';
        }

    }


    render() {

        const options = {
            onChange: this.handleIntersection,
            root: null,
            rootMargin: "0px",
            threshold: 0
        };

        return (
            <div classID="App">
                <Logo/>
                <Block color={'green'} />
                <Block color={'green'} />
                <Observer {...options}>
                    <Block color={'blue'} />
                </Observer>
            </div>
        );
    }
}

export default App;
