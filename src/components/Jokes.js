import React, {Component} from 'react';

import Block from './Block';

class Jokes extends Component{
    constructor(props) {
        super(props);
        this.state = {
            jokes: ''
        }
    }
    componentDidMount() {
        fetch(`https://api.icndb.com/jokes`)
            .then(resp => resp.json())
            .then(data => data.value)
            .then(info => this.setState({jokes:info}))
    }


    render() {
        return(
            <Block />
        )
    }
}

export default Jokes;