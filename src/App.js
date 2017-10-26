import React, { Component } from 'react';
import Header from './Header.js';
import Contents from './Contents.js';
import './hacks.css'

// var createClass = require('create-react-class')

class App extends Component {
    render() {
        return (
            <div className="bg-cosmic h-100">
                <Header apptitle="Reacting" author="nstickney" />
                <Contents />
            </div>
        );
    }
}

export default App;
