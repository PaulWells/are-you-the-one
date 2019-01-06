import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';

const rootReducer = (state = {}, action) => {
    return state;
}

const MatchSquare = () => (
    <div className="match-table-square" onClick={() => alert("MatchSquare clicked")}>
    </div>
)

const MaleContestantCount = 10;
const FemaleContestantCount = 10;

const GenerateMatchTableRow = () => {
    let squares = [];
    for (let j = 0; j < MaleContestantCount; j++)
    {
        squares.push(<MatchSquare />)
    }

    return squares;
}

const GenerateMatchTable = () => {
    let rows = [];
    for (let i = 0; i < FemaleContestantCount; i++)
    {
        rows.push(
            <div className="match-table-row">
                { GenerateMatchTableRow() }
            </div>
        );
    }
    return rows;
}

const Root = () => (
    <div>
        <h1 className="title">
            Are You The One?
        </h1>
        <div className="match-table">
            { GenerateMatchTable() }
        </div>
    </div>
)



ReactDOM.render(
    <Provider store={createStore(rootReducer)}>
        <Root/>
    </Provider>,
    document.getElementById('root')
);
