// https://kirupa.com/react/simple_todo_app_react.htm
import React, { Component } from 'react';

class ToDoItems extends Component {
    constructor(props, context) {
        super(props, context);
        this.createTasks = this.createTasks.bind(this);
        this.delete = this.delete.bind(this);
    }

    createTasks(item) {
        return <button className="btn btn-outline-dark list-group-item m-1 p-1"
            onClick={(e) => this.delete(item.key, e)}
            key={item.key}>{item.text}</button>
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        var toDoEntries = this.props.entries;
        var listItems = toDoEntries.map(this.createTasks);
        var liststyle = {
            listStyle: "none",
            padding: "0px"
        }
        return (
            <ul className="card-body list-group m-1" style={liststyle}>{listItems}</ul>
        );
    }
}

class ToDoList extends Component {

    getInitialState() {
        return ({
            items: [
                {text: "Be Awesome", key: 0},
                {text: "Do Hard Things", key: 1},
                {text: "Learn It All", key: 2},
                {text: "Build Stuff", key: 3},
                {text: "Love People", key: 4}
            ]
        });
    }

    constructor(props, context) {
        super(props, context);
        this.state = this.getInitialState();
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        var itemArray = this.state.items;
        if (this._inputElement.value !== "") {
            itemArray.unshift(
                {
                    text: this._inputElement.value,
                    key: Date.now()
                }
            );
            this.setState({
                items: itemArray
            });

            this._inputElement.value = "";
        }
        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }

    clearList() {
        this.setState({
            items: []
        });
    }

    render() {

        let todo;
        if (this.state.items) {
            todo = <ToDoItems entries={this.state.items} delete={this.deleteItem} />;
        }

        return (
            <div className={this.props.p.classNames} style={this.props.p.styles}>
                <h6 className="card-header bg-orange text-cosmic">To Do List</h6>
                <form className="card-body p-1" onSubmit={this.addItem}>
                    <input className="m-0" ref={(a) => this._inputElement = a}
                        placeholder="enter task" />
                    <button className="btn btn-primary btn-sm m-1" type="submit">Add</button>
                </form>
                {todo}
                <button className="btn btn-primary btn-sm m-1" onClick={() => this.clearList()}>Clear List</button>
            </div>
        );
    }
}

export default ToDoList;
