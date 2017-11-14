import React, { Component } from 'react';

class Jumbo extends Component {
    render() {

        var logoClass = "align-baseline mr-4";

        return (
            <div className="jumbotron">
                <h1 className="display-3">
                    <img className={logoClass} src="img/avatar.svg" alt="glider"/>
                    White Team
                </h1>
                <p class="lead">Maybe one day you can be White Team too.</p>
            </div>
        );
    }
}

export default Jumbo;
