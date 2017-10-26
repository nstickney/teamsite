// https://ihatetomatoes.net/react-tutorial-for-beginners
import React, { Component } from 'react';

class DateAndTime extends Component {

    getInitialState() {
        return ({
            date: new Date()
        });
    }

    tick() {
        this.setState(this.getInitialState());
    }

    constructor(props, context) {
        super(props, context);
        this.state = this.getInitialState();
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {

        let br, date, time, label;
        if (this.props.format === "utc") {
            label = 'UTC:';
            var dtg = this.state.date.toUTCString();
            time = dtg.substring(17, dtg.length - 4);
            date = dtg.substring(0, 3) + dtg.substring(4, 16);
            br = <br />;
        } else if (this.props.format === "unix") {
            label = 'Unix:';
            time = this.state.date.valueOf();
        } else {
            label = 'Local:';
            br = <br />;
            time = this.state.date.toLocaleTimeString();
            date = this.state.date.toDateString();
        }

        return (
            <div className="card-body p-2" onClick={() => this.tick()}>
                <div className="align-middle d-inline-block font-weight-bold w-25">{label}</div>
                <div className="align-middle d-inline-block w-75">{time}{br}{date}</div>
            </div>
        )
    }
}

class DateAndTimeBox extends Component {

    render() {
        return (
            <div className={this.props.p.classNames} style={this.props.p.styles}>
                <h6 className="card-header bg-orange text-cosmic">{this.props.title}</h6>
                <DateAndTime format="utc" />
                <hr className="m-0" />
                <DateAndTime format="unix" />
                <hr className="m-0" />
                <DateAndTime />
            </div>
        );
    }
}

export default DateAndTimeBox
