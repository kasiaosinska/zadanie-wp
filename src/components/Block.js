import React, {Component} from 'react';
import './style/block.css';

class Block extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='box' key={this.props.key}>
                    {this.props.text}
                </div>
            </div>
        )
    }
}

export default Block