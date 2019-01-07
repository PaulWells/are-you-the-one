import React from 'react';
import MatchSquare from './match-square.js';
import './match-table.css';
import { getVisiblePairs } from '../utilities/pair-visibility-filter';
import { NumContestantsOfEachGender, DisplayValue } from '../constants';
import ActionCreators from '../action-creators'; 

const getPairIndex = (row, col) => {
    return NumContestantsOfEachGender * row + col;
}

const handleMatchSquareClick = (row, col, pair, dispatch) => {

    // Only one action for now;
    if (pair.display === DisplayValue.PossibleMatch)
    {
        dispatch(ActionCreators.activateTruthBooth(row, col, pair.isMatch));
    }
}

const GenerateMatchTableRow = (row, pairs, dispatch) => {
    let squares = [];
    for (let col = 0; col < NumContestantsOfEachGender; col++)
    {
        let index = getPairIndex(row, col);
        let pair = pairs[index];
        squares.push(
            <MatchSquare 
                key={ index }
                display={ pair.display } 
                onClick={ () => handleMatchSquareClick(row, col, pair, dispatch) }
            />
        )
    }

    return squares;
}

const GenerateMatchTable = (store) => {
    let visiblePairs = getVisiblePairs(store);
    let rows = [];
    for (let row = 0; row < NumContestantsOfEachGender; row++)
    {
        rows.push(
            <div className="match-table-row" key={ row }>
                { GenerateMatchTableRow(row, visiblePairs, store.dispatch) }
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

