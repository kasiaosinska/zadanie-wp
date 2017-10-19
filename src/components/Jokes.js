import React, {Component} from 'react';


class Jokes extends Component{
    constructor(props) {
        super(props);
        this.state = {
            joke: ''
        }
    }
    componentDidMount() {
        fetch(`https://api.icndb.com/jokes`)
            .then(resp => resp.json())
            .then(data => data.value.joke)
            .then(info => this.setState({joke:info}))
    }
    render() {
        return(
            <div>
                <h1>{this.state.joke}</h1>
            </div>
        )
    }
}

export default Jokes;