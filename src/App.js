import React, { Component } from 'react';
import Sidebar from './Sidebar.js';
import Contents from './Contents.js';

// var createClass = require('create-react-class')

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Contents classList="col-sm-6 col-md-8 col-lg-9 my-2 p-0 pl-4 pr-1"/>
                    <Sidebar classList="col-sm-6 col-md-4 col-lg-3 p-0 pl-1 pr-4"/>
                </div>
            </div>
        );
    }
}

export default App;
