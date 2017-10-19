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

    showJokes = () => {
        let list = this.state.jokes;
        let jokeList = [];

        for(let i = 0; i < list.length; i++) {
            jokeList[i] = '<li>' + list[i].joke + '</li>';
        }

        document.getElementById('list').innerHTML=jokeList;
    };

    render() {
        return(
            <div>
                <ul classID="list">
                    <div>{this.showJokes()}</div>
                </ul>
            </div>
        )
    }
}

export default Jokes;