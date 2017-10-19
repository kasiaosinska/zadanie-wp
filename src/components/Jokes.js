import React, {Component} from 'react';


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
            <div>
                <ul classID="list">
                    <div></div>
                </ul>
            </div>
        )
    }
}

export default Jokes;