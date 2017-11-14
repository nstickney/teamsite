import React, { Component } from 'react';
import Jumbo from './Jumbo.js';

class Contents extends Component {
    render() {
        return (
            <div className={this.props.classList}>
                <Jumbo />
            </div>
        );
    }
}

export default Contents;
