import React, { Component } from 'react';
import DateAndTimeBox from './DateAndTimeBox.js';
import IPAddressBox from './IPAddressBox.js';
import TicTacToe from './TicTacToe.js';

class Sidebar extends Component {
    render() {

        var subprops = {
            classNames: "card my-2 p-0 text-center",
            styles: {
                // width: "256px"
            }
        }

        return (
            <div className={this.props.classList}>
                <IPAddressBox p={subprops} />
                <DateAndTimeBox title="Current Time" p={subprops} />
                <TicTacToe p={subprops} />
            </div>
        );
    }
}

export default Sidebar;
