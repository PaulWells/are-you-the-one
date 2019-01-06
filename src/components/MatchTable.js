import React from 'react';
import MatchSquare from './MatchSquare.js';
import './MatchTable.css';

const NumContestantsOfEachGender = 10;

const isMatch = (row, col, matches) => {
    return matches.reduce((accumulator, currentValue) => {
        if (currentValue.man === row && currentValue.woman === col) {
            return true;
        }

        return accumulator;
    },
    false);
}

const GenerateMatchTableRow = (row, store) => {
    let squares = [];
    for (let col = 0; col < NumContestantsOfEachGender; col++)
    {
        squares.push(<MatchSquare isMatch={ isMatch(row, col, store.getState().matches) } />)
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

