import { DisplayValue, Phase } from '../constants';
import { Actions } from '../action-creators';
import Grid from '../utilities/grid';

const getUpdatedPair = (pair, update) => {
    return Object.assign({}, pair, update)
}

const updatePair = (pairs, index, update) => {
    return [
        ...pairs.slice(0, index),
        getUpdatedPair(pairs[index], update),
        ...pairs.slice(index + 1)
    ]
}

const markCoupleAsMatched = (pairs, selectedCoupleIndex) => {

    let updatedPairs = pairs.map((pair, index) => {
        if (index === selectedCoupleIndex) {
            return getUpdatedPair(pair, { display: DisplayValue.Matched });
        } else if (Grid.getRow(index) === Grid.getRow(selectedCoupleIndex) || 
                   Grid.getColumn(index) === Grid.getColumn(selectedCoupleIndex)) {
            return getUpdatedPair(pair, { display: DisplayValue.NotAMatch });
        } else {
            return pair;
        }
    });
    return updatedPairs;
}

const truthBoothReducer = (state, action) => {
    if (!state || !action) {
        return {};
    }

    if (action.type !== Actions.ActivateTruthBooth) {
        return state;
    }

    let updatedPairs = [];
    let pairs = state.pairs;
    let selectedCoupleIndex = action.pairId;
    let selectedCouple = pairs[selectedCoupleIndex];

    if (selectedCouple.isMatch) {
        // change state to match and all squares in row and column to not a match
        updatedPairs = markCoupleAsMatched(pairs, selectedCoupleIndex);
    } else {
        updatedPairs = updatePair(pairs, selectedCoupleIndex, { display: DisplayValue.NotAMatch });
    }

    state = Object.assign(
        {},
        state,
        { 
            phase: Phase.MatchUpCeremony,
            pairs: updatedPairs
        }
    );

    return state;
}

export default truthBoothReducer;