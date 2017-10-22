import React, {Component} from 'react';
import './style/logo.css';
import LogoImg from '../image/wp-logo.jpg';

class Logo extends Component {
    render() {
        return (
            <div>
                <div className='box-logo'>
                    <img className="logo" src={LogoImg} alt="logo"/>
                </div>
            </div>
        )
    }
}

export default Logo;