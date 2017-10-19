import React, {Component} from 'react';
import './style/block.css';

class Block extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <div className='box' style={{background: this.props.color}}>
                </div>
            </div>
        )
    }
}

export default Block