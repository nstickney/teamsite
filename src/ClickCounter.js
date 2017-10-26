// https://scotch.io/tutorials/learning-react-getting-started-and-concepts
import React, { Component } from 'react';

class ClickCount extends Component {
    render() {
        return (
            <button className="btn btn-outline-secondary m-2 w-50" unselectable="on" onClick={this.props.onClick}>{this.props.count}</button>
        )
    }
}

class ClickCounter extends Component {

    getInitialState() {
            return {
                count: 0
            }
    }

    constructor(props, context) {
        super(props, context);
        this.state = this.getInitialState();
    }

    incrementCount() {
        this.setState({
            count: this.state.count + 1
        });
    }

    zero() {
        this.setState(this.getInitialState());
    }

    render() {
        return (
            <div className={this.props.p.classNames} style={this.props.p.styles}>
                <h6 className="card-header bg-orange text-cosmic">Click Counter</h6>
                <ClickCount count={this.state.count} onClick={() => this.incrementCount()}/>
                <button className="btn btn-primary btn-sm m-1" onClick={() => this.zero()}>Reset</button>
            </div>
        )
    }
}

export default ClickCounter;
