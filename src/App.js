import React, { Component } from 'react';
import Sidebar from './Sidebar.js';
import Contents from './Contents.js';

// var createClass = require('create-react-class')

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row m-4">
                    <Contents classList="col-sm-6 col-md-8 col-lg-9 my-2"/>
                    <Sidebar classList="col-sm-6 col-md-4 col-lg-3"/>
                </div>
            </div>
        );
    }
}

export default App;
