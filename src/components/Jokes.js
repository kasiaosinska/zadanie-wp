import React, {Component} from 'react';
import 'intersection-observer';
import Observer from '@researchgate/react-intersection-observer';

import Block from './Block';

class Jokes extends Component{
    constructor(props) {
        super(props);
        this.state = {
            jokes: []
        }
    }

    handleIntersection(event) {
        let logo = document.querySelector('.logo');
        // let joke = document.getElementsByClassName('box').innerText;
        // let check = joke.includes(' can ', 0);
        //
        // console.log(joke);

        if(event.isIntersecting) {
            logo.style.display = 'block';
        }
        else {
            logo.style.display = 'none';
        }
    }

    componentDidMount() {
        fetch(`https://api.icndb.com/jokes`)
            .then(resp => resp.json())
            .then(data => data.value)
            .then(info => this.setState({jokes:info}))
    }

    render() {

        const options = {
            onChange: this.handleIntersection,
            root: null,
            rootMargin: "0px",
            threshold: 0
        };

        const jokeList = this.state.jokes.map((el) => {
            return (
                <Observer {...options}>
                    <Block text={el.joke} key={el.id}/>
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