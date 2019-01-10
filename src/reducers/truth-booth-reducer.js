import { DisplayValue, Phase } from '../constants';
import { Actions } from '../action-creators';

const updatePair = (pairs, index, update) => {
    return [
        ...pairs.slice(0, index),
        Object.assign({}, pairs[index], update),
        ...pairs.slice(index + 1)
    ]
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
        updatedPairs = updatePair(pairs, selectedCoupleIndex, { display: DisplayValue.Matched });
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