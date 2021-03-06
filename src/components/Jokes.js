import React, {Component} from 'react';
import 'intersection-observer';
import Observer from '@researchgate/react-intersection-observer';

import Block from './Block';

class Jokes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jokes: []
        }
    }

    handleIntersection = (event) => {
        let logo = document.querySelector('.logo'),
            showLogo = event.target.innerText.includes(' can ', 0);

        event.isIntersecting && showLogo ? logo.classList.add('show') : logo.classList.remove('show');
    };

    componentDidMount() {
        fetch('https://api.icndb.com/jokes')
            .then(resp => resp.json())
            .then(data => this.setState({ jokes: data.value }))
    }

    render() {

        const options = {
            onChange: this.handleIntersection,
            root: null,
            rootMargin: '0px',
            threshold: 0
        };

        const jokeList = this.state.jokes.map((el) => {
            return (
                <Observer {...options} key={el.id}>
                    <Block text={el.joke}/>
                </Observer>
            )
        });

        return(
            <div>
                {jokeList}
            </div>
        )
    }
}

export default Jokes;