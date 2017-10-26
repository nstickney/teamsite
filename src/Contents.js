import React, { Component } from 'react';
import ClickCounter from './ClickCounter.js';
import DateAndTimeBox from './DateAndTimeBox.js';
import IPAddressBox from './IPAddressBox.js';
import TicTacToe from './TicTacToe.js';
import ToDoList from './ToDoList.js';
import Twitter from './Twitter.js';
import VZLinksBox from './VZLinksBox.js';

class Contents extends Component {
    render() {

        var subprops = {
            classNames: "card d-inline-block m-2 text-center",
            styles: {
                width: "256px"
            }
        }

        return (
            <div className="card-columns d-block h-100 mx-auto">
                <IPAddressBox p={subprops} />
                <VZLinksBox p={subprops} />
                <ToDoList p={subprops} />
                <DateAndTimeBox title="Date and Time" p={subprops} />
                <Twitter user="nstickney" p={subprops} />
                <TicTacToe p={subprops} />
                <ClickCounter p={subprops} />
            </div>
        );
    }
}

export default Contents;
