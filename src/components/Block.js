import React, {Component} from 'react';
import './style/block.css';

class Block extends Component {
    render() {
        return (
            <div>
                <div className='box'>
                    {this.props.text}
                </div>
            </div>
        )
    }
}

export default Block;