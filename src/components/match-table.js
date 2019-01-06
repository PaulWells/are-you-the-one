import React from 'react';
import MatchSquare from './match-square.js';
import './match-table.css';

const NumContestantsOfEachGender = 10;

const isMatch = (row, col, pairs) => {
    return pairs[row][col].isMatch;
}

const GenerateMatchTableRow = (row, store) => {
    let squares = [];
    for (let col = 0; col < NumContestantsOfEachGender; col++)
    {
        squares.push(<MatchSquare isMatch={ isMatch(row, col, store.getState().pairs) } />)
    }

    return squares;
}

const GenerateMatchTable = (store) => {
    let rows = [];
    for (let row = 0; row < NumContestantsOfEachGender; row++)
    {
        rows.push(
            <div className="match-table-row">
                { GenerateMatchTableRow(row, store) }
            </div>
        );
    }
    return rows;
}

const MatchTable = ({ store }) => (
    <div className="match-table">
        { GenerateMatchTable(store) }
    </div>
)

export default MatchTable;

