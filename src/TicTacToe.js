// https://reactjs.org/tutorial/tutorial.html
import React, { Component } from 'react';

const gameButtonSize = 50;

function Square(props) {

    var squarestyle = {
        border: "2px solid black",
        color: "blue",
        fontSize: "xx-large",
        fontWeight: "bold",
        height: gameButtonSize + "px",
        margin: "0px",
        padding: "0px",
        width: gameButtonSize + "px"
    }

    let canClick;
    if (!props.value) {
        canClick = 'clickable';
    }

    return (
        <td className={canClick} style={squarestyle} onClick={props.onClick}>
        {props.value}
        </td>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

class Board extends Component {

    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        )
    }

    render() {

        var tablestyle = {
            borderCollapse: "collapse",
            borderStyle: "hidden",
            margin: "auto"
        }

        return (
            <table style={tablestyle}>
                <tr>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </tr>
                <tr>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </tr>
                <tr>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </tr>
            </table>
        );
    }
}

class Game extends Component {

    getInitialState() {
        return ({
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber: 0,
            xIsNext: true
        });
    }

    constructor(props, context) {
        super(props, context);
        this.state = this.getInitialState();
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step) {
        if (step === -1) {
            this.setState(this.getInitialState());
        } else {
            this.setState({
                stepNumber: step,
                xIsNext: (step % 2) === 0,
            });
        }
    }

    render() {
        const history = this.state.history.slice(1, this.state.history.length);
        const current = this.state.history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            var squeezestyle = {
                margin: "2px"
            }
            return (
                <button className="btn btn-secondary btn-sm m-1 p-1" style={squeezestyle} onClick={() => this.jumpTo(move + 1)}>
                    {move + 1}
                </button>
            );
        });

        let status;
        if (winner) {
            status = winner + ' Wins!';
        } else if (this.state.stepNumber === 9) {
            status = 'Draw!'
        } else {
            status = (this.state.xIsNext ? 'X' : 'O') + '\'s Turn';
        }

        var histFootStyle = {
            height: "70px"
        }

        return (
            <div className={this.props.p.classNames} style={this.props.p.styles}>
                <h6 className="card-header bg-orange text-cosmic">Tic Tac Toe: {status}</h6>
                <div className="card-body">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="card-body p-0">
                    <button className="btn btn-primary btn-sm m-1" onClick={() => this.jumpTo(-1)}>New Game</button>
                </div>
                <div className="card-footer p-1" style={histFootStyle}>
                    <div>Move History</div>
                    <div>{moves}</div>
                </div>
            </div>
        );
    }
}

export default Game
