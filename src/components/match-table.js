import React from 'react';
import MatchSquare from './match-square.js';
import './match-table.css';
import { getVisiblePairs } from '../utilities/pair-visibility-filter';
import { NumContestantsOfEachGender, DisplayValue, Phase } from '../constants';
import { ActionCreators } from '../action-creators'; 

const getPairIndex = (row, col) => {
    return NumContestantsOfEachGender * row + col;
}

const handleMatchSquareClick = (phase, display, pairId, dispatch) => {

    // Only one action for now;
    switch (phase) {
        case Phase.TruthBooth:
            if (display === DisplayValue.PossibleMatch) {
                dispatch(ActionCreators.activateTruthBooth(pairId));
            }
            break;
        case Phase.MatchUpCeremony:
            if (display === DisplayValue.PossibleMatch) {
                dispatch(ActionCreators.toggleMatchUpCeremonySelection(pairId));
            }
            break;
        default:
            break;
    }
    
}

const GenerateMatchTableRow = (rowIndex, store) => {
    
    let state = store.getState();
    let pairs = getVisiblePairs(state);
    let phase = state.phase;

    let squares = [];
    for (let col = 0; col < NumContestantsOfEachGender; col++)
    {
        let index = getPairIndex(rowIndex, col);
        let pair = pairs[index];
        squares.push(
            <MatchSquare 
                key={ index }
                display={ pair.display } 
                onClick={ () => handleMatchSquareClick(phase, pair.display, index, store.dispatch) }
            />
        )
    }

    return squares;
}

const GenerateMatchTable = (store) => {
    let rows = [];
    for (let rowIndex = 0; rowIndex < NumContestantsOfEachGender; rowIndex++)
    {
        rows.push(
            <div className="match-table-row" key={ rowIndex }>
                { GenerateMatchTableRow(rowIndex, store) }
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

