// https://www.kirupa.com/react/working_with_external_data.htm
import React, { Component } from 'react';

// var createClass = require('create-react-class')

var xhr;

class IPAddress extends Component {

    getInitialState() {
        return ({
            ip_address: "..."
        })
    }

    constructor(props, context) {
        super(props, context);
        this.state = this.getInitialState();
        this.processRequest = this.processRequest.bind(this);
    }

    componentDidMount() {
        this.doRequest();
    }

    doRequest() {
        this.setState(this.getInitialState());
        xhr = new XMLHttpRequest();
        xhr.open('GET', "https://ipinfo.io/json", true);
        xhr.send();
        xhr.addEventListener("readystatechange", this.processRequest, false);
    }

    processRequest() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            this.setState({
                ip_address: response.ip
            });
        }
    }

    render() {
        return (
            <button className="btn btn-outline-dark border-0 m-0 p-2 w-100" onClick={() => this.doRequest()}>{this.state.ip_address}</button>
        );
    }
}

class IPAddressBox extends Component {
    render() {
        return(
            <div className={this.props.p.classNames} style={this.props.p.styles}>
                <h6 className="card-header bg-orange text-cosmic">Visitor Public IP</h6>
                <IPAddress />
                {/* <TorCheckFrame />*/}
            </div>
        )
    }
}

export default IPAddressBox;
