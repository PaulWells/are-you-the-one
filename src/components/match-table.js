import React from 'react';
import MatchSquare from './match-square.js';
import './match-table.css';
import { getVisiblePairs } from '../utilities/pair-visibility-filter';
import { NumContestantsOfEachGender } from '../constants';

const getDisplayValue = (row, col, pairs) => {
    return pairs[NumContestantsOfEachGender * row + col].display;
}

const GenerateMatchTableRow = (row, pairs) => {
    let squares = [];
    for (let col = 0; col < NumContestantsOfEachGender; col++)
    {
        squares.push(<MatchSquare display={ getDisplayValue(row, col, pairs) } />)
    }

    return squares;
}

const GenerateMatchTable = (store) => {
    let visiblePairs = getVisiblePairs(store);
    let rows = [];
    for (let row = 0; row < NumContestantsOfEachGender; row++)
    {
        rows.push(
            <div className="match-table-row">
                { GenerateMatchTableRow(row, visiblePairs) }
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

